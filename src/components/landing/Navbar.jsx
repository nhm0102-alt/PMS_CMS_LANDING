import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Cloud, ChevronDown, LayoutDashboard, GitBranch, Globe, BarChart2, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const featuresMenu = [
  {
    icon: <LayoutDashboard className="w-4 h-4 text-gold" />,
    title: "Quản lý vận hành (PMS)",
    href: "#pms",
    items: ["Quản lý đặt phòng", "Buồng phòng", "Quản lý dịch vụ", "Lịch sử thanh toán", "Quản lý khách hàng"],
  },
  {
    icon: <GitBranch className="w-4 h-4 text-gold" />,
    title: "Quản lý đa kênh (CMS)",
    href: "#cms",
    items: ["Lịch trung tâm", "Kết nối đa kênh OTA", "Liên kết chéo"],
  },
  {
    icon: <Globe className="w-4 h-4 text-gold" />,
    title: "Website đặt phòng",
    href: "#booking",
    items: ["Đặt phòng trực tiếp", "Giao diện tuỳ chỉnh", "Đa ngôn ngữ", "Thanh toán online"],
  },
  {
    icon: <BarChart2 className="w-4 h-4 text-gold" />,
    title: "Báo cáo & hiệu suất",
    href: "#pms",
    items: ["Báo cáo vận hành", "Hiệu suất lấp đầy", "Quản lý chi phí"],
  },
  {
    icon: <Smartphone className="w-4 h-4 text-gold" />,
    title: "Ứng dụng di động",
    href: "#panorama",
    items: ["Tải ứng dụng", "Thông báo tức thời", "Lịch đặt phòng"],
  },
];

const solutionsMenu = [
  { label: "Homestay", page: "HomestayPage" },
  { label: "Nhà trọ", page: "NhaTroPage" },
  { label: "Villa nguyên căn", page: "VillaPage" },
  { label: "Khách sạn", page: "KhachSanPage" },
];

const simpleLinks = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Liên hệ", href: "#contact" },
];

function DropdownMenu({ label, children, isMega = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 rounded-lg hover:bg-secondary/50"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className={`absolute top-full mt-2 z-50 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden ${
              isMega ? "left-1/2 -translate-x-1/2 w-[700px]" : "left-0 w-52"
            }`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFeatures, setMobileFeatures] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center">
              <Cloud className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Stayhub<span className="text-gold">Cloud</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#hero" className="px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 rounded-lg hover:bg-secondary/50">
              Trang chủ
            </a>

            {/* Tính Năng mega menu */}
            <DropdownMenu label="Tính Năng" isMega>
              <div className="p-6 grid grid-cols-3 gap-6">
                {featuresMenu.map((group) => (
                  <div key={group.title}>
                    <a
                      href={group.href}
                      className="flex items-center gap-2 font-semibold text-gold text-sm mb-3 hover:opacity-80 transition-opacity"
                    >
                      {group.icon}
                      {group.title}
                    </a>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item}>
                          <a
                            href={group.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DropdownMenu>

            {/* Giải pháp ứng dụng */}
            <DropdownMenu label="Giải pháp ứng dụng">
              <div className="py-2">
                {solutionsMenu.map((item) =>
                  item.page ? (
                    <Link
                      key={item.label}
                      to={createPageUrl(item.page)}
                      className="block px-5 py-2.5 text-sm text-muted-foreground hover:text-gold hover:bg-secondary/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-5 py-2.5 text-sm text-muted-foreground hover:text-gold hover:bg-secondary/50 transition-colors"
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </DropdownMenu>

            <a href="#contact" className="px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 rounded-lg hover:bg-secondary/50">
              Liên hệ
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Đăng nhập
            </Button>
            <Button className="gradient-gold text-background font-semibold hover:opacity-90 transition-opacity">
              Dùng thử miễn phí
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <a href="#hero" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-gold rounded-lg hover:bg-secondary/50 transition-colors">
                Trang chủ
              </a>

              {/* Mobile Tính Năng */}
              <button
                onClick={() => setMobileFeatures(!mobileFeatures)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-muted-foreground hover:text-gold rounded-lg hover:bg-secondary/50 transition-colors"
              >
                Tính Năng
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileFeatures ? "rotate-180" : ""}`} />
              </button>
              {mobileFeatures && (
                <div className="pl-4 space-y-1">
                  {featuresMenu.map((g) => (
                    <a key={g.title} href={g.href} onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2 text-sm text-gold/80 hover:text-gold rounded-lg hover:bg-secondary/50 transition-colors">
                      {g.title}
                    </a>
                  ))}
                </div>
              )}

              {/* Mobile Giải pháp */}
              <button
                onClick={() => setMobileSolutions(!mobileSolutions)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-muted-foreground hover:text-gold rounded-lg hover:bg-secondary/50 transition-colors"
              >
                Giải pháp ứng dụng
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutions ? "rotate-180" : ""}`} />
              </button>
              {mobileSolutions && (
                <div className="pl-4 space-y-1">
                  {solutionsMenu.map((item) => {
                    const cls = "block px-4 py-2 text-sm text-muted-foreground hover:text-gold rounded-lg hover:bg-secondary/50 transition-colors";
                    return item.page ? (
                      <Link key={item.label} to={createPageUrl(item.page)} onClick={() => setMobileOpen(false)} className={cls}>
                        {item.label}
                      </Link>
                    ) : (
                      <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className={cls}>
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              )}

              <a href="#contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-gold rounded-lg hover:bg-secondary/50 transition-colors">
                Liên hệ
              </a>

              <div className="pt-2 border-t border-border space-y-2">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">Đăng nhập</Button>
                <Button className="w-full gradient-gold text-background font-semibold">Dùng thử miễn phí</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

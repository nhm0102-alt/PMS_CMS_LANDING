import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Cloud, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const solutionsMenu = [
  { label: "Homestay", page: "HomestayPage" },
  { label: "Nhà trọ", page: "NhaTroPage" },
  { label: "Villa nguyên căn", page: "VillaPage" },
  { label: "Khách sạn", page: "KhachSanPage" },
];

function SolutionsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 rounded-lg hover:bg-secondary/50"
      >
        Giải pháp ứng dụng
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 left-0 w-52 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            <div className="py-2">
              {solutionsMenu.map((item) => (
                <Link
                  key={item.label}
                  to={createPageUrl(item.page)}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-2.5 text-sm text-muted-foreground hover:text-gold hover:bg-secondary/50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SolutionNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center">
              <Cloud className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Stayhub<span className="text-gold">Cloud</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link to={createPageUrl("Home")} className="px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 rounded-lg hover:bg-secondary/50">
              Trang chủ
            </Link>
            <Link to={createPageUrl("Home")} className="px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 rounded-lg hover:bg-secondary/50">
              Tính Năng
            </Link>
            <SolutionsDropdown />
            <Link to={createPageUrl("Home")} className="px-4 py-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 rounded-lg hover:bg-secondary/50">
              Liên hệ
            </Link>
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

          {/* Mobile toggle */}
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
              <Link to={createPageUrl("Home")} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-gold rounded-lg hover:bg-secondary/50 transition-colors">
                Trang chủ
              </Link>
              <button
                onClick={() => setMobileSolutions(!mobileSolutions)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-muted-foreground hover:text-gold rounded-lg hover:bg-secondary/50 transition-colors"
              >
                Giải pháp ứng dụng
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutions ? "rotate-180" : ""}`} />
              </button>
              {mobileSolutions && (
                <div className="pl-4 space-y-1">
                  {solutionsMenu.map((item) => (
                    <Link key={item.label} to={createPageUrl(item.page)} onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-gold rounded-lg hover:bg-secondary/50 transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
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

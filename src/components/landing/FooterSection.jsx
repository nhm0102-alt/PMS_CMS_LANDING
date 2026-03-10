import React, { useState } from "react";
import { Cloud, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import LegalModal from "@/components/landing/LegalModal";

export default function FooterSection() {
  const [modal, setModal] = useState(null);

  return (
    <footer id="contact" className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center">
                <Cloud className="w-5 h-5 text-background" />
              </div>
              <span className="text-lg font-bold text-foreground">
                Stayhub<span className="text-gold">Cloud</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Hệ sinh thái quản trị cơ sở lưu trú hàng đầu Việt Nam. PMS + CMS All-in-One.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-gold" />
                <span>hello@stayhubcloud.vn</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-gold" />
                <span>1900 636 999</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Tầng 12, Toà nhà Techcombank, Hà Nội</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Sản phẩm</h4>
            <ul className="space-y-3">
              {["Stayhub PMS", "Stayhub CMS", "Booking Engine", "Panorama", "Stayhub API"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Giải pháp</h4>
            <ul className="space-y-3">
              {[
                { label: "Homestay", page: "HomestayPage" },
                { label: "Villa Nguyên Căn", page: "VillaPage" },
                { label: "Khách sạn", page: "KhachSanPage" },
                { label: "Nhà Trọ", page: "NhaTroPage" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={createPageUrl(item.page)} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Hỗ trợ</h4>
            <ul className="space-y-3">
              {["Trung tâm trợ giúp", "Hướng dẫn sử dụng", "Video tutorial", "Blog", "Cộng đồng"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Pháp lý</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => setModal("terms")} className="text-sm text-muted-foreground hover:text-gold transition-colors text-left">
                  Điều khoản dịch vụ
                </button>
              </li>
              <li>
                <button onClick={() => setModal("privacy")} className="text-sm text-muted-foreground hover:text-gold transition-colors text-left">
                  Chính sách bảo mật
                </button>
              </li>
              {["Chính sách cookie", "GDPR Compliance"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 StayhubCloud. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Facebook", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      {modal && <LegalModal type={modal} onClose={() => setModal(null)} />}
    </footer>
  );
}

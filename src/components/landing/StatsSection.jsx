import React from "react";
import { motion } from "framer-motion";
import { Building2, BedDouble, Users, Globe } from "lucide-react";

const stats = [
  { icon: Building2, num: "500+", label: "Cơ sở lưu trú" },
  { icon: BedDouble, num: "50,000+", label: "Phòng được quản lý" },
  { icon: Users, num: "2,000+", label: "Người dùng hoạt động" },
  { icon: Globe, num: "200+", label: "Kênh OTA kết nối" },
];

export default function StatsSection() {
  return (
    <section className="py-24 relative section-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden gradient-purple p-12 md:p-16 mb-20"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-gold blur-[60px]" />
            <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-purple-glow blur-[80px]" />
          </div>
          <div className="relative text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Không còn sợ mất dữ liệu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              Hệ thống backup tự động, uptime 99.9%, bảo mật SSL/TLS — dữ liệu khách sạn của bạn luôn an toàn tuyệt đối.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-8 h-8 text-background" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{s.num}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

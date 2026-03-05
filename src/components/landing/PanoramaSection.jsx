import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layout, Image, Search, Smartphone, Paintbrush, Sparkles } from "lucide-react";

const features = [
  { icon: Layout, title: "Kéo thả dễ dàng", desc: "Không cần biết code, tạo website chuyên nghiệp trong vài phút" },
  { icon: Image, title: "Thư viện template", desc: "100+ mẫu thiết kế đẹp mắt cho ngành khách sạn" },
  { icon: Search, title: "SEO tối ưu", desc: "Tích hợp sẵn công cụ SEO, schema markup cho hotel" },
  { icon: Smartphone, title: "Mobile-first", desc: "Responsive trên mọi thiết bị, tốc độ nhanh" },
  { icon: Paintbrush, title: "Brand Identity", desc: "Tùy biến hoàn toàn theo thương hiệu riêng" },
  { icon: Sparkles, title: "AI Content", desc: "Tạo nội dung tự động bằng AI thông minh" },
];

const sampleSites = [
  {
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80",
    name: "Melia Resort",
  },
  {
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80",
    name: "Vinpearl Hotel",
  },
  {
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80",
    name: "Fusion Suites",
  },
];

export default function PanoramaSection() {
  return (
    <section id="panorama" className="py-24 relative section-alt">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent via-purple-deep/20 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-deep/50 border border-border mb-6">
            <span className="text-xs font-medium text-gold">MODULE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stayhub <span className="text-gold">Panorama</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Thiết kế website khách sạn chuyên nghiệp chỉ trong vài phút. Kéo thả dễ dàng, không cần kỹ thuật.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {[
            { num: "72%", label: "Tăng lượt truy cập tự nhiên" },
            { num: "94%", label: "Khách hàng hài lòng" },
            { num: "70%", label: "Giảm chi phí thiết kế web" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-6"
            >
              <div className="text-3xl font-bold text-gold mb-1">{s.num}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-gold/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-base font-semibold mb-1 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Sample websites */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-center mb-8">
            Ghé thăm những website được tạo bởi{" "}
            <span className="text-gold">Stayhub Panorama</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {sampleSites.map((site, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-border hover:border-gold/40 transition-all cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={site.img}
                    alt={site.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-sm font-medium text-foreground">{site.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="gradient-gold text-background font-semibold hover:opacity-90 group">
            Tạo website ngay
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

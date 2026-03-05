import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointerClick, Smartphone, Palette, CreditCard, Globe, Gauge } from "lucide-react";

const features = [
  { icon: MousePointerClick, title: "Đặt phòng 1-click", desc: "Quy trình đặt phòng đơn giản, tối ưu conversion rate" },
  { icon: Smartphone, title: "Responsive hoàn hảo", desc: "Tối ưu trải nghiệm trên mọi thiết bị" },
  { icon: Palette, title: "Tùy biến giao diện", desc: "Phù hợp thương hiệu khách sạn của bạn" },
  { icon: CreditCard, title: "Thanh toán đa kênh", desc: "Visa, MasterCard, VNPay, MoMo, ZaloPay" },
  { icon: Globe, title: "Đa ngôn ngữ", desc: "Hỗ trợ tiếng Việt, Anh, Trung, Nhật, Hàn..." },
  { icon: Gauge, title: "Tốc độ tải nhanh", desc: "Tối ưu SEO & Core Web Vitals" },
];

export default function BookingSection() {
  return (
    <section id="booking" className="py-24 relative section-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Stayhub <span className="text-gold">Booking Engine</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trang đặt phòng trực tiếp trên website khách sạn. Giảm phụ thuộc OTA, tăng doanh thu trực tiếp lên đến 30%.
          </p>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="absolute -inset-4 bg-purple-glow/5 rounded-3xl blur-3xl" />
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/50 glow-purple">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80"
              alt="Booking Engine"
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-gold/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-purple-deep transition-colors">
                <f.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-base font-semibold mb-1 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="gradient-gold text-background font-semibold hover:opacity-90 group">
            Bắt đầu ngay
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

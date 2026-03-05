import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Văn Minh",
    role: "GM - Mường Thanh Hotel",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    text: "StayflowCloud đã giúp chúng tôi giảm 40% thời gian vận hành và tăng 25% doanh thu trực tiếp. Một giải pháp tuyệt vời!",
    stars: 5,
  },
  {
    name: "Trần Thị Lan",
    role: "Owner - Hội An Boutique",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    text: "Giao diện dễ sử dụng, đội ngũ hỗ trợ rất tận tâm. Tôi đã giới thiệu cho nhiều đồng nghiệp trong ngành.",
    stars: 5,
  },
  {
    name: "Lê Hoàng Phúc",
    role: "IT Director - Vinpearl",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    text: "Channel Manager rất mạnh, kết nối 200+ OTA mà không bao giờ bị overbooking. API chuẩn quốc tế.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative section-purple">
      <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold tracking-wider uppercase">
            Đánh giá
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Đánh giá của <span className="text-gold">khách hàng</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="text-sm text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, BedDouble, BarChart3, CreditCard } from "lucide-react";

const features = [
  { icon: CalendarCheck, text: "Quản lý đặt phòng & lịch phòng realtime" },
  { icon: BedDouble, text: "Housekeeping & bảo trì tự động hóa" },
  { icon: BarChart3, text: "Báo cáo doanh thu & phân tích chi tiết" },
  { icon: CreditCard, text: "Thanh toán đa phương thức tích hợp" },
];

export default function PMSSection() {
  return (
    <section id="pms" className="py-24 relative section-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-deep/50 border border-border mb-6">
              <span className="text-xs font-medium text-gold">MODULE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stayhub <span className="text-gold">PMS</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Hệ thống quản lý khách sạn toàn diện giúp bạn kiểm soát mọi hoạt động vận hành từ check-in, check-out đến quản lý doanh thu — tất cả trên một nền tảng duy nhất.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm text-foreground">{f.text}</span>
                </motion.div>
              ))}
            </div>

            <Button className="gradient-gold text-background font-semibold hover:opacity-90 group">
              Tìm hiểu thêm
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-purple-glow/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-purple">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="PMS Dashboard"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Mini floating card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 left-8 bg-card border border-border rounded-xl p-3 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-xs font-medium text-foreground">Occupancy Rate: 89%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

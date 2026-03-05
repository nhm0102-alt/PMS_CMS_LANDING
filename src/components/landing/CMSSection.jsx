import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, RefreshCw, DollarSign, BarChart } from "lucide-react";

const features = [
  { icon: Layers, text: "Kết nối 200+ OTA: Booking.com, Agoda, Expedia..." },
  { icon: RefreshCw, text: "Đồng bộ giá & phòng realtime tránh overbooking" },
  { icon: DollarSign, text: "Quản lý Rate Plan linh hoạt theo mùa" },
  { icon: BarChart, text: "Phân tích hiệu suất kênh phân phối" },
];

export default function CMSSection() {
  return (
    <section id="cms" className="py-24 relative section-purple">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-gold">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="CMS Dashboard"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 right-8 bg-card border border-border rounded-xl p-3 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-glow" />
                <span className="text-xs font-medium text-foreground">200+ OTA Connected</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-deep/50 border border-border mb-6">
              <span className="text-xs font-medium text-gold">MODULE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stayhub <span className="text-gold">CMS</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Channel Manager thông minh giúp bạn quản lý tất cả kênh phân phối trực tuyến từ một nơi duy nhất. Tự động đồng bộ giá, phòng trống và chính sách đặt phòng.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
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
        </div>
      </div>
    </section>
  );
}

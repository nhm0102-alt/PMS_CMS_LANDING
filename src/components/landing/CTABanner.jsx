import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* BG */}
          <div className="absolute inset-0 gradient-gold opacity-90" />
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-60 h-60 bg-background/10 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-background/5 rounded-full blur-[80px]" />
          </div>

          <div className="relative p-12 md:p-16 text-center">
            <Sparkles className="w-10 h-10 mx-auto mb-6 text-background/80" />
            <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4">
              Đồng hành hỗ trợ sự thành công của khách hàng là công việc của chúng tôi
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto mb-8 text-lg">
              Bắt đầu dùng thử miễn phí 14 ngày — không cần thẻ tín dụng, không cam kết.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-background text-gold font-semibold hover:bg-background/90">
                Đăng ký dùng thử
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10">
                Liên hệ tư vấn
              </Button>
            </div>

            {/* Product cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { name: "Stayhub PMS", desc: "Quản lý khách sạn" },
                { name: "Stayhub CMS", desc: "Channel Manager" },
                { name: "Booking Engine", desc: "Đặt phòng trực tiếp" },
                { name: "Panorama", desc: "Thiết kế website" },
              ].map((p, i) => (
                <div key={i} className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-left">
                  <div className="text-sm font-semibold text-background">{p.name}</div>
                  <div className="text-xs text-background/60">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

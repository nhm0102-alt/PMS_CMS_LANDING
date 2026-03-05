import React from "react";
import { motion } from "framer-motion";

const OTA_LOGOS = [
  { name: "Booking.com", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/c8100deab_booking-active.png" },
  { name: "Agoda", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/b778fe322_agoda-active.png" },
  { name: "Airbnb", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/14c85fc27_airbnb-active.png" },
  { name: "Expedia", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/cff6aa369_expedia-active.png" },
  { name: "Traveloka", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/fac565b39_traveloka-active.png" },
  { name: "Ctrip", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/de933b686_ctrip-active.png" },
];

// Duplicate for seamless loop
const LOGOS_DOUBLED = [...OTA_LOGOS, ...OTA_LOGOS, ...OTA_LOGOS];

export default function OTASlider() {
  return (
    <section className="py-16 relative section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gold tracking-wider uppercase mb-2">Kết nối đa kênh</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Stayhub hỗ trợ kết nối hơn{" "}
            <span className="text-gold">200+ kênh OTA</span> phổ biến
          </h2>
        </motion.div>
      </div>

      {/* Slider track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[hsl(255,30%,16%)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[hsl(255,30%,16%)] to-transparent" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {LOGOS_DOUBLED.map((ota, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 h-20 bg-white/95 rounded-2xl flex items-center justify-center px-6 py-3 shadow-md hover:shadow-gold/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={ota.url}
                  alt={ota.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-3 gap-6 text-center">
          {[
            { badge: "Tăng", value: "10%", icon: "↗", color: "text-green-400", desc: "Tỷ lệ lấp đầy khi sử dụng" },
            { badge: "Giảm", value: "40%", icon: "↘", color: "text-red-400", desc: "Thời gian quản lý thủ công" },
            { badge: "Tiết kiệm", value: "60%", icon: "◎", color: "text-gold", desc: "Chi phí so với các nền tảng khác" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-all"
            >
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-muted-foreground mb-3">
                {s.badge}
              </span>
              <div className={`text-4xl font-bold mb-2 ${s.color}`}>
                <span className="text-2xl mr-1">{s.icon}</span>{s.value}
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

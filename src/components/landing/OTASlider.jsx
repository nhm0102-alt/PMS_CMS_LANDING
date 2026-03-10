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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              label: "Tỷ lệ lấp đầy phòng",
              value: "10%",
              desc: "Tăng doanh thu đáng kể ngay từ tháng đầu sử dụng",
              gradient: "from-violet-500/20 to-purple-600/10",
              border: "border-violet-500/30",
              valueColor: "text-violet-300",
              chartColor: "#a78bfa",
              // trending up sparkline points
              points: "0,32 10,28 20,24 30,26 40,18 50,14 60,10 70,6 80,4 90,2",
            },
            {
              label: "Thời gian vận hành thủ công",
              value: "40%",
              desc: "Tự động hoá quy trình, đội ngũ tập trung vào trải nghiệm khách",
              gradient: "from-sky-500/20 to-blue-600/10",
              border: "border-sky-400/30",
              valueColor: "text-sky-300",
              chartColor: "#7dd3fc",
              // trending down sparkline points
              points: "0,2 10,4 20,8 30,6 40,12 50,16 60,20 70,24 80,28 90,32",
            },
            {
              label: "Chi phí nền tảng",
              value: "60%",
              desc: "Tiết kiệm so với các giải pháp riêng lẻ trên thị trường",
              gradient: "from-amber-500/20 to-yellow-600/10",
              border: "border-amber-400/30",
              valueColor: "text-gold",
              chartColor: "#d4a853",
              // steep down sparkline
              points: "0,2 10,5 20,10 30,8 40,15 50,20 60,24 70,28 80,30 90,32",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${s.gradient} border ${s.border} rounded-2xl p-7 overflow-hidden transition-all duration-300 cursor-default`}
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30 bg-white/10" />

              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{s.label}</p>

              <div className="flex items-end gap-4 mb-3">
                <div className={`text-5xl font-extrabold ${s.valueColor} tabular-nums leading-none`}>{s.value}</div>
                {/* Sparkline */}
                <svg viewBox="0 0 90 34" className="w-20 h-9 mb-1" fill="none">
                  <defs>
                    <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={s.chartColor} stopOpacity="0.35" />
                      <stop offset="100%" stopColor={s.chartColor} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points={s.points}
                    fill="none"
                    stroke={s.chartColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

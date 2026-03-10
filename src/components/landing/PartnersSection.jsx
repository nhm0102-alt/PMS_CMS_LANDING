import React, { useRef, useEffect } from "react";

const partners = [
  { name: "Crystal Hotel", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/9f79488ef_logoitc1.png" },
  { name: "Coastal Hotel", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/892efdace_Logoitc2.png" },
  { name: "Tranquilo Resort", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/202b65146_Logoitc3.png" },
  { name: "HKSUMA Hotel", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/9b493a769_Logoditc4.png" },
  { name: "Mountain Bliss Resort", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/9b2fabed6_Logoitc5.png" },
  { name: "Lakeside Haven", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/7788b6ba0_Logoitc6.png" },
  { name: "Whispering Pines Lodge", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/b26587e83_Logoitc7.png" },
  { name: "Zenith Villas", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/2cfc7ed66_Logoitc8.png" },
  { name: "Palm Grove Retreat", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/30393944e_Logoitc9.png" },
  { name: "Tranquil Hotel", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/80e7cc6ab_Logoitc10.png" },
  { name: "Silverwood Hotel", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/813a5ef63_Logoitc11.png" },
  { name: "Oasis Villa", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/b192845d5_Logoitc12.png" },
  { name: "Serenity Resort", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a928884385b8727ce61a75/702eaa8df_Logoitc13.png" },
];

// Duplicate for seamless loop
const allLogos = [...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="py-16 relative section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Đối tác của StayhubCloud
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(255,30%,16%), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(255,30%,16%), transparent)" }} />

        <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
          {allLogos.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-52 h-24 bg-white/8 hover:bg-white/15 rounded-2xl border border-white/10 flex items-center justify-center px-4 py-3 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

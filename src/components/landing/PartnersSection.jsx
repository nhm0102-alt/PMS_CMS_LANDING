import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Booking.com", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&q=80" },
  { name: "Agoda", logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=120&q=80" },
  { name: "Expedia", logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=120&q=80" },
  { name: "Traveloka", logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=120&q=80" },
  { name: "Trip.com", logo: "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?w=120&q=80" },
  { name: "VNPay", logo: "https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=120&q=80" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 relative section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Đối tác của StayflowCloud
          </span>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center">
                <span className="text-xs font-bold text-gold">{p.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <span className="text-xs text-muted-foreground">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

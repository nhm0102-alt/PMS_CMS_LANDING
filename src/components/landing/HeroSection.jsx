import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const ROTATING_WORDS = ["Khách Sạn", "Homestay", "Biệt thự, villa nguyên căn"];

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROTATING_WORDS[wordIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="text-gold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Bg effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-purple-glow/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/10 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm text-muted-foreground">
                Hệ sinh thái quản trị #1 Việt Nam
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hệ sinh thái quản trị toàn diện dành cho{" "}
              <TypingText />
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-lg">
              Giải pháp toàn diện <span className="text-gold font-semibold">PMS</span> + <span className="text-gold font-semibold">CMS</span> All-in-One giúp quản lý mọi hoạt động kinh doanh lưu trú từ một nền tảng duy nhất.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="gradient-gold text-background font-semibold text-base px-8 hover:opacity-90 transition-opacity group">
                Trải nghiệm ngay
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary group">
                <Play className="w-5 h-5 mr-2 text-gold" />
                Xem demo
              </Button>
            </div>

            {/* Stats mini */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-gold">500+</div>
                <div className="text-xs text-muted-foreground">Khách sạn tin dùng</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-gold">50K+</div>
                <div className="text-xs text-muted-foreground">Phòng được quản lý</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-gold">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime cam kết</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-purple border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Dashboard PMS"
                className="w-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-2xl glow-gold"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-background" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">+28%</div>
                  <div className="text-xs text-muted-foreground">Tỉ lệ đặt phòng</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-deep flex items-center justify-center">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">1,234</div>
                  <div className="text-xs text-muted-foreground">Khách check-in hôm nay</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

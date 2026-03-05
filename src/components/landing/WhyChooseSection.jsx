import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Vận hành tức thì",
    desc: "Triển khai nhanh chóng trong vòng 24h, không cần cài đặt phần cứng phức tạp. Giao diện trực quan, dễ sử dụng.",
  },
  {
    icon: Globe,
    title: "Kết nối đa kênh",
    desc: "Tích hợp liền mạch với 200+ OTA hàng đầu thế giới. Đồng bộ giá & phòng realtime tránh overbooking.",
  },
  {
    icon: Shield,
    title: "Bảo mật tuyệt đối",
    desc: "Hạ tầng cloud chuẩn quốc tế, mã hóa SSL/TLS, backup tự động hàng ngày. Dữ liệu an toàn 100%.",
  },
  {
    icon: HeadphonesIcon,
    title: "Hỗ trợ 24/7",
    desc: "Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ mọi lúc mọi nơi. Cam kết phản hồi trong vòng 15 phút.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 relative section-alt">
      <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-transparent via-purple-deep/20 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold tracking-wider uppercase">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Tại sao chọn <span className="text-gold">StayhubCloud</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nền tảng tất-cả-trong-một được thiết kế dành riêng cho ngành hospitality Việt Nam
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-gold/40 transition-all duration-500 hover:glow-gold"
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <r.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

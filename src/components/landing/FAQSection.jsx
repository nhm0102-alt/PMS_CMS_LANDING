import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "StayflowCloud phù hợp với loại hình lưu trú nào?",
    a: "StayflowCloud phù hợp với mọi loại hình cơ sở lưu trú từ khách sạn, resort, homestay, villa cho đến chuỗi khách sạn quy mô lớn.",
  },
  {
    q: "Thời gian triển khai là bao lâu?",
    a: "Hệ thống có thể triển khai trong vòng 24 giờ. Đội ngũ hỗ trợ sẽ đồng hành cùng bạn trong toàn bộ quá trình setup và đào tạo.",
  },
  {
    q: "Có hỗ trợ tích hợp với phần mềm khác không?",
    a: "Có, StayflowCloud cung cấp Open API chuẩn RESTful, hỗ trợ tích hợp với hệ thống POS, kế toán, CRM và nhiều phần mềm khác.",
  },
  {
    q: "Chi phí sử dụng như thế nào?",
    a: "Chúng tôi có nhiều gói cước linh hoạt phù hợp với quy mô từ nhỏ đến lớn. Bạn có thể dùng thử miễn phí 14 ngày trước khi quyết định.",
  },
  {
    q: "Dữ liệu có an toàn không?",
    a: "Tuyệt đối. Chúng tôi sử dụng mã hóa SSL/TLS, backup tự động hàng ngày và hạ tầng cloud chuẩn quốc tế với uptime cam kết 99.9%.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-24 relative section-deep">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Câu hỏi <span className="text-gold">thường gặp</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

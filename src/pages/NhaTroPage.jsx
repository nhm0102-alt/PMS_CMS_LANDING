import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, FileText, BarChart2, MessageCircle, Smartphone, Brain, ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import SolutionNavbar from "@/components/landing/SolutionNavbar";
import FooterSection from "@/components/landing/FooterSection";

const features = [
  { icon: Smartphone, title: "Quản lý Phòng & Khách", desc: "Trực quan hóa danh sách phòng, trạng thái thuê và hồ sơ khách hàng. Tìm kiếm thông tin chỉ trong vài giây." },
  { icon: Zap, title: "Chốt Điện Nước & Hóa Đơn", desc: "Nhập chỉ số nhanh chóng, tự động tính tiền theo bậc thang hoặc giá cố định. Xuất hóa đơn chuyên nghiệp." },
  { icon: BarChart2, title: "Báo Cáo Tài Chính", desc: "Theo dõi doanh thu, lợi nhuận, công nợ theo thời gian thực. Biểu đồ trực quan giúp ra quyết định đúng đắn." },
  { icon: MessageCircle, title: "Tích hợp Zalo", desc: "Gửi thông báo tiền phòng, nhắc nợ tự động qua Zalo. Tăng tỷ lệ thu tiền đúng hạn lên 90%." },
  { icon: FileText, title: "Hợp Đồng Điện Tử", desc: "Tạo hợp đồng từ mẫu có sẵn, hỗ trợ ký điện tử ngay trên điện thoại. Không còn lo thất lạc giấy tờ." },
  { icon: Brain, title: "Công nghệ AI & OCR", desc: "Tự động trích xuất thông tin CCCD để điền hợp đồng. Phát hiện bất thường trong chỉ số điện nước." },
];

const steps = [
  { num: "01", title: "Thiết lập nhà trọ", desc: "Tạo danh sách phòng, cài đặt giá điện nước và dịch vụ nhanh chóng." },
  { num: "02", title: "Quản lý khách thuê", desc: "Lưu trữ hồ sơ, tự động quét CCCD và tạo hợp đồng thuê chuyên nghiệp." },
  { num: "03", title: "Chốt điện nước", desc: "Nhập chỉ số hàng tháng, hệ thống tự động tính toán tiền chính xác." },
  { num: "04", title: "Gửi hóa đơn Zalo", desc: "Xuất hóa đơn và gửi thông báo thanh toán qua Zalo chỉ với 1 cú click." },
];

const pricing = [
  { name: "Cơ bản", price: "0đ", label: "FREE", items: ["Quản lý tối đa 5 phòng", "Tính tiền điện nước cơ bản", "Hóa đơn PDF chuẩn", "Lưu trữ 10 hợp đồng"], cta: "Bắt đầu miễn phí", featured: false },
  { name: "Chuyên nghiệp", price: "99.000đ", label: "PRO / tháng", items: ["Không giới hạn phòng", "Tự động gửi thông báo Zalo", "AI nhận diện CCCD", "Báo cáo doanh thu chi tiết", "Chữ ký điện tử"], cta: "Dùng thử PRO", featured: true },
  { name: "Doanh nghiệp", price: "Liên hệ", label: "", items: ["Phân quyền quản lý nhân viên", "Tích hợp cổng thanh toán tự động", "Hỗ trợ 24/7 riêng biệt", "API tích hợp riêng"], cta: "Liên hệ tư vấn", featured: false },
];

const faqs = [
  { q: "StayhubCloud có phù hợp với nhà trọ nhỏ chỉ vài phòng không?", a: "Hoàn toàn phù hợp. Gói miễn phí hỗ trợ quản lý tối đa 5 phòng, rất thích hợp cho chủ trọ nhỏ mới bắt đầu." },
  { q: "Tích hợp Zalo có yêu cầu tài khoản đặc biệt không?", a: "Không, bạn chỉ cần tài khoản Zalo thông thường. Hệ thống sẽ hướng dẫn cách kết nối và tự động gửi thông báo cho khách thuê." },
  { q: "Tính năng AI nhận diện CCCD hoạt động như thế nào?", a: "Bạn chỉ cần chụp ảnh CCCD của khách, hệ thống sẽ tự động trích xuất tên, ngày sinh, số CCCD và điền vào hợp đồng, tiết kiệm thời gian nhập liệu." },
  { q: "Dữ liệu của tôi có được bảo mật không?", a: "Tất cả dữ liệu được mã hóa và lưu trữ trên hệ thống đám mây bảo mật. Bạn có thể xuất dữ liệu bất kỳ lúc nào." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/30 transition-colors">
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gold shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}

export default function NhaTroPage() {
  return (
    <div className="min-h-screen bg-background">
      <SolutionNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden section-deep">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-glow/10 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-6">
              <span className="text-xs font-medium text-gold">GIẢI PHÁP QUẢN LÝ NHÀ TRỌ 4.0</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Vận hành <span className="text-gold">nhà trọ</span><br />tự động & thông minh
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Tạm biệt sổ sách. Tự động tính tiền, lập hóa đơn và quản lý hợp đồng chuyên nghiệp chỉ trên một nền tảng duy nhất.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gradient-gold text-background font-semibold hover:opacity-90 group">
                Dùng thử miễn phí ngay
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/50 glow-purple">
            <img src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=80" alt="Nhà trọ Management" className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tính năng nổi bật — <span className="text-gold">Mọi thứ bạn cần để quản lý hiệu quả</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-purple-deep transition-colors">
                  <f.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 section-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bắt đầu quản lý <span className="text-gold">chỉ trong 5 phút</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-gold/40 transition-all duration-300">
                <div className="text-4xl font-bold text-gold/20 mb-3">{s.num}</div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 section-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bảng giá <span className="text-gold">phù hợp mọi quy mô</span></h2>
            <p className="text-muted-foreground">Tiết kiệm 80% thời gian vận hành mỗi tháng</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-2xl p-7 flex flex-col border transition-all duration-300 ${p.featured ? "border-gold glow-gold" : "border-border hover:border-gold/40"}`}>
                {p.featured && <div className="text-xs font-bold text-background bg-gold rounded-full px-3 py-1 self-start mb-4">Phổ biến nhất</div>}
                <div className="text-lg font-bold text-foreground mb-1">{p.name}</div>
                <div className="text-3xl font-bold text-gold mb-1">{p.price}</div>
                {p.label && <div className="text-xs text-muted-foreground mb-5">{p.label}</div>}
                <ul className="space-y-3 mb-7 flex-1">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Button className={p.featured ? "gradient-gold text-background font-semibold hover:opacity-90" : "border border-border bg-transparent text-foreground hover:bg-secondary"}>
                  {p.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Câu hỏi thường gặp về <span className="text-gold">quản lý nhà trọ</span></h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bắt đầu quản lý <span className="text-gold">nhà trọ thông minh</span> ngay hôm nay</h2>
            <p className="text-muted-foreground mb-8">Tự động hóa mọi công việc vận hành, tiết kiệm thời gian và tăng doanh thu.</p>
            <Button size="lg" className="gradient-gold text-background font-semibold hover:opacity-90 group">
              Dùng thử miễn phí
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

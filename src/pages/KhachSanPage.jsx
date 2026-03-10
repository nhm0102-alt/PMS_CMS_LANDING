import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Smartphone, BarChart2, BedDouble, CreditCard, Package, Users, DollarSign, ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import SolutionNavbar from "@/components/landing/SolutionNavbar";
import FooterSection from "@/components/landing/FooterSection";

const benefits = [
  { icon: DollarSign, title: "Tối ưu chi phí vận hành, gia tăng lợi nhuận", desc: "Ứng dụng phần mềm quản lý StayhubCloud giúp giảm chi phí nhân sự, tăng hiệu quả hoạt động & gia tăng sự hài lòng trải nghiệm khách hàng." },
  { icon: Users, title: "Vận hành chuyên nghiệp, nâng cao hiệu suất đội ngũ", desc: "Chuẩn hóa quy trình làm việc cho mọi bộ phận. Phân quyền linh hoạt, giúp đội ngũ của bạn làm việc hiệu quả hơn." },
  { icon: TrendingUp, title: "Mở rộng kênh bán, tăng doanh thu", desc: "Đồng bộ hoàn hảo hơn 50+ kênh OTA, tránh overbooking. Tăng cường đặt phòng trực tiếp qua website riêng, giảm phụ thuộc và chi phí hoa hồng." },
  { icon: CreditCard, title: "Quản lý tài chính minh bạch, hiệu quả", desc: "Dễ dàng theo dõi các khoản thu chi, công nợ và quản lý chi phí hoạt động, giúp bạn kiểm soát dòng tiền tốt hơn." },
];

const features = [
  { icon: BarChart2, title: "Quản lý đặt phòng tập trung", desc: "Theo dõi, xử lý đặt phòng trên một lịch duy nhất. Dễ dàng theo dõi và quản lý thông tin đặt phòng, dịch vụ sử dụng, thanh toán của khách hàng." },
  { icon: TrendingUp, title: "Đồng bộ OTA, tăng hiển thị", desc: "Kết nối và đồng bộ giá, lịch đặt phòng với hơn 50+ kênh OTA bao gồm Booking.com, Agoda, Traveloka, Expedia..." },
  { icon: ArrowRight, title: "Website đặt phòng trực tiếp", desc: "Nâng tầm thương hiệu và tối ưu doanh thu với giải pháp website đặt phòng trực tiếp, giảm hoa hồng OTA." },
  { icon: Smartphone, title: "Vận hành mọi nơi từ ứng dụng di động", desc: "Ứng dụng di động StayhubCloud cho phép bạn quản lý khách sạn từ bất cứ đâu, không bỏ lỡ bất kỳ cơ hội kinh doanh nào." },
  { icon: BarChart2, title: "Báo cáo vận hành trực quan", desc: "Báo cáo doanh thu & hiệu suất từng phòng được cập nhật nhanh chóng theo thời gian thực. Xuất file Excel, CSV để kế toán dễ dàng sử dụng." },
  { icon: BedDouble, title: "Quản lý buồng phòng hiệu quả", desc: "Dễ dàng theo dõi và sắp xếp công việc dọn phòng, đảm bảo mọi thứ luôn tươm tất, chuyên nghiệp khi khách checkin." },
  { icon: CreditCard, title: "Theo dõi thanh toán minh bạch", desc: "Theo dõi lịch sử các đợt thanh toán và hình thức thanh toán của khách hàng. Hỗ trợ quản lý công nợ và đối soát dòng tiền." },
  { icon: Package, title: "Quản lý dịch vụ đơn giản", desc: "Quản lý các dịch vụ cộng thêm (đón tiễn, ăn uống, giặt là...) trong đặt phòng. Đồng bộ với báo cáo thu chi chi tiết." },
];

const testimonials = [
  { name: "LeO Homesuites", text: "Chỉ sau 1 tháng sử dụng, tỷ lệ lấp đầy phòng tăng 10% và không phải mất thời gian nhập thông tin hay quản lý file Excel nữa." },
  { name: "D Home", text: "StayhubCloud thực sự khác biệt nhờ cách đặt trải nghiệm người dùng lên hàng đầu, giữ mọi thứ đơn giản, hiện đại và dễ sử dụng. Chi phí tiết kiệm hơn 40%." },
  { name: "Pandora Villa", text: "Tính năng đồng bộ hoá lịch tự động rất tối ưu và chính xác. Tăng doanh thu hơn 20% nhờ sắp xếp phòng tự động tối ưu khoảng trống." },
];

const faqs = [
  { q: "StayhubCloud có phù hợp với khách sạn quy mô vừa và nhỏ không?", a: "Hoàn toàn phù hợp. StayhubCloud được thiết kế để đáp ứng nhu cầu của các khách sạn vừa và nhỏ, với khả năng mở rộng linh hoạt. Giải pháp giúp bạn quản lý hiệu quả dù quy mô phòng là bao nhiêu." },
  { q: "Phần mềm PMS có tính năng phân quyền cho nhân viên không? Có giới hạn số lượng tài khoản không?", a: "Có, StayhubCloud PMS cho phép phân quyền chi tiết cho từng vị trí như lễ tân, kế toán, buồng phòng, quản lý... Đặc biệt, không giới hạn số lượng tài khoản người dùng." },
  { q: "Channel Manager kết nối với những kênh OTA nào là chủ yếu cho khách sạn?", a: "StayhubCloud Channel Manager kết nối mạnh mẽ với Booking.com, Agoda, Traveloka, Expedia và hơn 50+ kênh khác, giúp bạn tối đa hóa phạm vi tiếp cận." },
  { q: "StayhubCloud có hỗ trợ xuất dữ liệu để làm báo cáo kế toán không?", a: "Có. Hệ thống báo cáo cho phép bạn dễ dàng xuất dữ liệu (doanh thu, đặt phòng, công nợ...) ra file Excel hoặc CSV để bộ phận kế toán tiện lợi sử dụng." },
  { q: "Chi phí sử dụng StayhubCloud cho khách sạn được tính như thế nào?", a: "StayhubCloud cung cấp các gói dịch vụ linh hoạt dựa trên số lượng phòng và nhu cầu sử dụng. Số lượng phòng càng lớn, chi phí càng tối ưu. Vui lòng liên hệ để nhận báo giá chi tiết." },
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

export default function KhachSanPage() {
  return (
    <div className="min-h-screen bg-background">
      <SolutionNavbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden section-deep">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-6">
              <span className="text-xs font-medium text-gold">GIẢI PHÁP</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Vận hành <span className="text-gold">khách sạn</span> chuyên nghiệp<br />chi phí tối ưu
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Giải pháp all-in-one tích hợp liền mạch PMS & CMS, giúp bạn tối ưu hóa quy trình vận hành, đồng bộ kênh OTA hiệu quả và nâng cao trải nghiệm đội ngũ cũng như khách hàng.
            </p>
            <Button size="lg" className="gradient-gold text-background font-semibold hover:opacity-90 group">
              Dùng thử miễn phí
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/50 glow-gold">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80" alt="Hotel Management" className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lợi ích vượt trội cho <span className="text-gold">chủ khách sạn</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-purple-deep transition-colors">
                  <b.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">StayhubCloud hỗ trợ khách sạn <span className="text-gold">của bạn như thế nào?</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-gold/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-purple-deep transition-colors">
                  <f.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Khách hàng nói gì về <span className="text-gold">StayhubCloud</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Đội ngũ chăm sóc khách hàng <span className="text-gold">đồng hành cùng bạn</span></h2>
              <p className="text-muted-foreground mb-8">Chúng tôi tin rằng mọi khách sạn đều có thể thành công, bất kể quy mô hay kinh nghiệm.</p>
              <div className="space-y-4">
                {["Tư vấn, triển khai và đào tạo theo tình hình thực tế","Hướng dẫn kết nối & đồng bộ dữ liệu từ các kênh OTA","Lắng nghe & phản hồi nhanh chóng các vấn đề","Đội ngũ thân thiện, chủ động đồng hành & hỗ trợ tận tâm"].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-border/50">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Support team" className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-deep">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Câu hỏi thường gặp về <span className="text-gold">quản lý khách sạn</span></h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nâng tầm vận hành <span className="text-gold">khách sạn</span> của bạn ngay hôm nay</h2>
            <p className="text-muted-foreground mb-8">Khám phá cách StayhubCloud có thể giúp khách sạn của bạn hoạt động trơn tru hơn và tăng trưởng bền vững.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gradient-gold text-background font-semibold hover:opacity-90 group">
                Đăng ký miễn phí
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                Xem bảng giá
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

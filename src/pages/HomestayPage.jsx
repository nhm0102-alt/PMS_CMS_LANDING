import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Clock, RefreshCw, TrendingUp, Layers,
  CalendarCheck, Globe, Smartphone, BarChart2,
  BedDouble, CreditCard, Package, CheckCircle2,
  ChevronDown, ArrowRight, Star, Users, Headphones
} from "lucide-react";
import { createPageUrl } from "@/utils";
import SolutionNavbar from "@/components/landing/SolutionNavbar";
import FooterSection from "@/components/landing/FooterSection";

const benefits = [
  {
    icon: Clock,
    title: "Tiết kiệm thời gian, tạm biệt sai sót thủ công",
    desc: "Tự động hóa việc cập nhật booking và đồng bộ lịch, giúp bạn thoát khỏi những công việc lặp đi lặp lại và giảm thiểu rủi ro nhầm lẫn.",
  },
  {
    icon: RefreshCw,
    title: "Đồng bộ đa kênh OTA",
    desc: "Lịch trống của bạn luôn được cập nhật chính xác trên Airbnb, Booking.com và hơn 50+ kênh khác. Yên tâm vận hành, không còn nỗi lo đặt phòng trùng.",
  },
  {
    icon: TrendingUp,
    title: "Tối ưu hiển thị OTA, tiếp cận nhiều khách hàng hơn",
    desc: "Mở rộng kênh bán, tối ưu hóa mọi cơ hội bán phòng với tính năng Liên Kết Chéo thông minh. Quản lý linh hoạt, tăng doanh thu hiệu quả.",
  },
  {
    icon: Layers,
    title: "Giải pháp toàn diện",
    desc: "Sở hữu trọn bộ công cụ PMS và phần mềm CMS tích hợp liền mạch. Quản lý vận hành và phân phối đa kênh trên một nền tảng duy nhất.",
  },
];

const features = [
  {
    icon: CalendarCheck,
    title: "Quản lý đặt phòng tập trung",
    desc: "Theo dõi, xử lý đặt phòng trên một lịch duy nhất. Dễ dàng theo dõi và quản lý thông tin đặt phòng, dịch vụ sử dụng, thanh toán của khách hàng.",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
  },
  {
    icon: Globe,
    title: "Đồng bộ OTA, tăng hiển thị",
    desc: "Kết nối và đồng bộ giá, lịch đặt phòng với hơn 50+ kênh OTA. Cho phép kết nối linh hoạt nhiều phòng/loại phòng, nhiều tài khoản OTA; tối đa cơ hội hiển thị homestay và tăng doanh thu.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    icon: Globe,
    title: "Website đặt phòng trực tiếp",
    desc: "Nâng tầm thương hiệu và tối ưu doanh thu với giải pháp website đặt phòng trực tiếp; giúp xây dựng thương hiệu và tăng lượng đặt phòng trực tiếp.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    icon: Smartphone,
    title: "Vận hành mọi nơi từ ứng dụng di động",
    desc: "Ứng dụng di động StayhubCloud cho phép bạn quản lý homestay từ bất cứ đâu, không bỏ lỡ bất kỳ cơ hội kinh doanh nào.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    icon: BarChart2,
    title: "Báo cáo vận hành trực quan",
    desc: "Báo cáo doanh thu & hiệu suất từng phòng được cập nhật nhanh chóng theo thời gian thực. Giúp bạn nắm rõ tình hình kinh doanh một cách nhanh chóng.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    icon: BedDouble,
    title: "Quản lý buồng phòng hiệu quả",
    desc: "StayhubCloud giúp bạn dễ dàng theo dõi và sắp xếp công việc dọn phòng, đảm bảo mọi thứ luôn tươm tất, chuyên nghiệp khi khách checkin.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    icon: CreditCard,
    title: "Theo dõi thanh toán minh bạch",
    desc: "Theo dõi lịch sử các đợt thanh toán và hình thức thanh toán của khách hàng. Hỗ trợ quản lý công nợ và đối soát dòng tiền một cách rõ ràng.",
    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
  },
  {
    icon: Package,
    title: "Quản lý dịch vụ đơn giản",
    desc: "Quản lý các dịch vụ cộng thêm (đón tiễn, ăn uống, giặt là...) trong đặt phòng. Đồng bộ với báo cáo thu chi, giúp bạn quản lý doanh thu chi tiết.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
  },
];

const testimonials = [
  {
    quote: "Chỉ sau 1 tháng sử dụng StayhubCloud, tôi đã thấy hiệu quả rõ rệt: tỷ lệ lấp đầy phòng tăng 10% và không phải mất thời gian nhập thông tin hay quản lý file Excel nữa.",
    name: "Anh Minh",
    role: "Chủ Homestay LEO",
    stars: 5,
  },
  {
    quote: "StayhubCloud thực sự khác biệt so với các phần mềm quản lý khác trên thị trường nhờ cách họ đặt trải nghiệm người dùng lên hàng đầu, giữ mọi thứ đơn giản, hiện đại và dễ sử dụng.",
    name: "Chị Hoa",
    role: "Chủ D Home Homestay",
    stars: 5,
  },
  {
    quote: "Tính năng đồng bộ hoá lịch tự động rất tối ưu và chính xác. StayhubCloud còn giúp sắp xếp phòng tự động tối ưu khoảng trống, giúp tôi tăng doanh thu hơn 20%.",
    name: "Anh Tuấn",
    role: "Chủ Pandora Villa",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Homestay của tôi quy mô nhỏ, chỉ có vài phòng, sử dụng StayhubCloud có hiệu quả không?",
    a: "StayhubCloud được thiết kế để phù hợp với mọi quy mô homestay, từ những căn hộ dịch vụ nhỏ 1-2 phòng đến các chuỗi homestay lớn hơn. Bạn có thể sử dụng giải pháp toàn diện (PMS, CMS tích hợp) để tối ưu vận hành, tăng trưởng doanh thu cho homestay của mình.",
  },
  {
    q: "Tôi đang bán phòng trên nhiều kênh như Airbnb, Booking.com, Agoda. StayhubCloud có hỗ trợ đồng bộ tất cả không?",
    a: "Có! StayhubCloud Channel Manager kết nối và đồng bộ lịch trống, giá cả với hơn 50+ kênh OTA phổ biến (Airbnb, Booking.com, Agoda, Traveloka, Trip.com...). Đối với booking từ kênh trực tiếp (Facebook, Zalo, điện thoại), bạn có thể dễ dàng tự tạo và quản lý trên cùng một lịch tổng quan.",
  },
  {
    q: "Tính năng liên kết chéo hoạt động như thế nào và có thực sự giúp tăng doanh thu?",
    a: "Tính năng này cho phép bạn liên kết nhiều phòng trống cùng loại vào một listing OTA đang có hiệu suất tốt nhất. Listing đó sẽ luôn hiển thị 'còn phòng' cho đến khi tất cả các phòng được liên kết đã được bán, giúp tối đa hóa cơ hội hiển thị và tăng đáng kể tỷ lệ lấp đầy.",
  },
  {
    q: "Khi gặp vấn đề trong quá trình sử dụng, tôi sẽ được hỗ trợ như thế nào?",
    a: "Đội ngũ Chăm sóc Khách hàng của StayhubCloud luôn hỗ trợ nhanh chóng qua Zalo, Điện thoại, Email. Cam kết hỗ trợ từ A-Z, đảm bảo bạn khai thác tối đa hiệu quả của phần mềm.",
  },
];

const supportPoints = [
  "Tư vấn, triển khai và đào tạo theo tình hình thực tế của từng homestay",
  "Hướng dẫn kết nối & đồng bộ dữ liệu từ các kênh OTA",
  "Lắng nghe & phản hồi nhanh chóng các vấn đề trong quá trình sử dụng",
  "Đội ngũ luôn thân thiện, chủ động đồng hành & hỗ trợ tận tâm",
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-medium text-foreground hover:bg-secondary/30 transition-colors"
      >
        {q}
        <ChevronDown className={`w-4 h-4 shrink-0 ml-3 text-gold transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function HomestayPage() {
  return (
    <div className="min-h-screen bg-background">
      <SolutionNavbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="py-20 relative section-deep overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-deep/50 border border-border mb-6">
                <span className="text-xs font-medium text-gold">GIẢI PHÁP ỨNG DỤNG</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Đơn giản hoá vận hành{" "}
                <span className="text-gold">homestay</span>, tăng trưởng doanh thu cùng StayhubCloud!
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Phần mềm quản lý homestay toàn diện, giúp bạn quản lý mọi hoạt động, từ đặt phòng đến đồng bộ kênh OTA dễ dàng và hiệu quả.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-gold text-background font-semibold hover:opacity-90 group">
                  Đăng ký dùng thử
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:border-gold hover:text-gold">
                  Xem bảng giá
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
              <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-gold">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
                  alt="Homestay management"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                  {["Booking", "Airbnb", "Agoda", "Traveloka", "Expedia"].map((ota) => (
                    <span key={ota} className="px-3 py-1 bg-card/90 backdrop-blur-sm border border-border rounded-full text-xs font-medium text-foreground">
                      {ota}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Lợi ích vượt trội, tối ưu lợi ích <span className="text-gold">chủ homestay</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm leading-snug">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">
              StayhubCloud hỗ trợ homestay <span className="text-gold">của bạn như thế nào?</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-card/90 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-gold" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-foreground mb-1.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl font-bold">Khách hàng nói gì về <span className="text-gold">StayhubCloud?</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support section */}
      <section className="py-20 section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-deep/50 border border-border mb-6">
                <Headphones className="w-4 h-4 text-gold" />
                <span className="text-xs font-medium text-gold">HỖ TRỢ KHÁCH HÀNG</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Đội ngũ chăm sóc khách hàng{" "}
                <span className="text-gold">đồng hành cùng bạn</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Tại StayhubCloud, chúng tôi tin rằng mọi host đều có thể thành công, bất kể quy mô hay kinh nghiệm. Đội ngũ chuyên gia sẽ luôn đồng hành, hỗ trợ bạn tối ưu từng bước vận hành.
              </p>
              <div className="space-y-3">
                {supportPoints.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -inset-4 bg-purple-glow/5 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="Customer support"
                className="relative rounded-2xl border border-border/50 w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Câu hỏi thường gặp về giải pháp{" "}
              <span className="text-gold">quản lý homestay</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <FAQItem q={f.q} a={f.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 section-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nâng tầm vận hành, tối ưu hiệu quả cho{" "}
              <span className="text-gold">homestay của bạn</span> ngay hôm nay
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Khám phá cách StayhubCloud có thể giúp homestay của bạn hoạt động trơn tru hơn, chuyên nghiệp hơn và tăng trưởng bền vững.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gradient-gold text-background font-semibold hover:opacity-90 group">
                Đăng ký miễn phí
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:border-gold hover:text-gold">
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

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TERMS_CONTENT = {
  title: "ĐIỀU KHOẢN SỬ DỤNG",
  subtitle: "(Áp dụng đối với việc truy cập và sử dụng website stayhub.vn)",
  sections: [
    {
      heading: "1. Giới thiệu",
      body: `Website stayhub.vn do Công ty TNHH Awaken Việt Nam vận hành nhằm giới thiệu hệ sinh thái các giải pháp phần mềm bao gồm nhưng không giới hạn: HMS (Hotel Management System), PMS (Property Management System) và các nền tảng dịch vụ trực tuyến liên quan.\n\nViệc truy cập và sử dụng website đồng nghĩa với việc bạn đã đọc, hiểu và đồng ý với các Điều khoản này.`,
    },
    {
      heading: "2. Phạm vi website",
      body: "stayhub.vn là website cung cấp thông tin, giới thiệu sản phẩm và dịch vụ. Mọi giao dịch, đăng ký tài khoản hoặc thanh toán (nếu có) sẽ được thực hiện tại các website dịch vụ thành phần tương ứng.",
    },
    {
      heading: "3. Quyền và nghĩa vụ của người truy cập",
      list: [
        "Được tìm hiểu thông tin về các sản phẩm và dịch vụ do Công ty cung cấp.",
        "Không sử dụng website vào mục đích vi phạm pháp luật.",
        "Không thực hiện hành vi tấn công, phá hoại hoặc gây ảnh hưởng đến hoạt động của website.",
      ],
    },
    {
      heading: "4. Quyền sở hữu trí tuệ",
      list: [
        "Toàn bộ nội dung, hình ảnh, thiết kế, thương hiệu, logo và tài liệu trên website thuộc quyền sở hữu của Công ty TNHH Awaken Việt Nam hoặc bên cấp phép hợp pháp.",
        "Nghiêm cấm sao chép, khai thác hoặc sử dụng cho mục đích thương mại khi chưa có sự chấp thuận bằng văn bản.",
      ],
    },
    {
      heading: "5. Miễn trừ trách nhiệm",
      body: `Website cung cấp thông tin với mục đích tham khảo. Công ty không chịu trách nhiệm đối với các thiệt hại phát sinh do việc sử dụng thông tin không đúng mục đích hoặc ngoài phạm vi cung cấp.\n\nCác dịch vụ cụ thể được điều chỉnh bởi điều khoản và chính sách riêng tại từng website dịch vụ tương ứng.`,
    },
    {
      heading: "6. Sửa đổi điều khoản",
      body: "Công ty có quyền cập nhật nội dung Điều khoản mà không cần báo trước. Phiên bản mới nhất sẽ được công bố trên website.",
    },
    {
      heading: "7. Thông tin liên hệ",
      list: ["Email: hostsupport@stayhub.vn", "Hotline: 0987909286"],
    },
  ],
};

const PRIVACY_CONTENT = {
  title: "CHÍNH SÁCH BẢO MẬT THÔNG TIN",
  subtitle: "(Áp dụng đối với website stayhub.vn)",
  sections: [
    {
      heading: "1. Mục đích thu thập thông tin",
      body: "Website stayhub.vn có thể thu thập thông tin cá nhân khi người truy cập:",
      list: ["Gửi yêu cầu tư vấn;", "Đăng ký nhận thông tin;", "Liên hệ qua biểu mẫu trên website."],
    },
    {
      heading: "2. Thông tin thu thập",
      list: ["Họ và tên;", "Số điện thoại;", "Email;", "Nội dung liên hệ do người dùng cung cấp."],
    },
    {
      heading: "3. Mục đích sử dụng",
      list: ["Liên hệ tư vấn, hỗ trợ;", "Cung cấp thông tin về sản phẩm và dịch vụ;", "Cải thiện trải nghiệm website."],
    },
    {
      heading: "4. Phạm vi chia sẻ",
      body: "Thông tin không được bán hoặc chia sẻ cho bên thứ ba, trừ trường hợp pháp luật yêu cầu.",
    },
    {
      heading: "5. Bảo mật",
      body: "Chúng tôi áp dụng các biện pháp kỹ thuật phù hợp nhằm bảo vệ thông tin cá nhân khỏi truy cập trái phép.",
    },
    {
      heading: "6. Quyền của người dùng",
      body: "Người dùng có quyền yêu cầu chỉnh sửa hoặc xóa thông tin bằng cách liên hệ:",
      list: ["Email: hostsupport@stayhub.vn", "Hotline: 0987909286"],
    },
  ],
};

export const LEGAL_MODALS = { terms: TERMS_CONTENT, privacy: PRIVACY_CONTENT };

export default function LegalModal({ type, onClose }) {
  const content = LEGAL_MODALS[type];
  if (!content) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-lg font-bold text-gold">{content.title}</h2>
              <p className="text-xs text-muted-foreground mt-1">{content.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-1.5 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 space-y-5 max-h-[calc(85vh-100px)]">
            {content.sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold text-foreground mb-2">{section.heading}</h3>
                {section.body && (
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-2">
                    {section.body}
                  </p>
                )}
                {section.list && (
                  <ul className="space-y-1.5 pl-4">
                    {section.list.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-gold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

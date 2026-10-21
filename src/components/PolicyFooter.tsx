import React from 'react';
import { ArrowUp, BookOpen, ShieldCheck } from 'lucide-react';

export const PolicyFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-700 text-white font-bold flex items-center justify-center text-sm font-mono">
                26
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                VỊ TRÍ VIỆC LÀM & QUẢN LÝ BIÊN CHẾ
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Trang tổng hợp trực quan nội dung về Quan điểm, Nguyên tắc, 5 nhiệm vụ trọng tâm và Tổ chức thực hiện.
            </p>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Căn cứ văn kiện nêu trong nội dung</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Nghị quyết Đại hội XIV của Đảng</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Kết luận số 76-KL/TW</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Mô hình chính quyền địa phương 2 cấp</span>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Mốc thời gian nêu trong văn bản</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <span className="text-amber-400 font-mono font-semibold">Năm 2026:</span> Hoàn thành CSDL vị trí việc làm thống nhất.
              </li>
              <li>
                <span className="text-amber-400 font-mono font-semibold">Quý 4-2026:</span> Báo cáo Bộ Chính trị phương án giao biên chế & CSDL.
              </li>
              <li>
                <span className="text-amber-400 font-mono font-semibold">Tháng 11-2026:</span> Bắt đầu hàng tháng tổng hợp tiến độ báo cáo Bộ Chính trị.
              </li>
              <li>
                <span className="text-amber-400 font-mono font-semibold">2027 – 2031:</span> Phương án giao biên chế & chuẩn hóa.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Trang thông tin trực quan hóa chính sách theo đúng nguyên văn văn bản.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

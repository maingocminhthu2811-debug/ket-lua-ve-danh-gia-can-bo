import React from 'react';
import { Layers, Briefcase, ListTodo, ShieldCheck, ChevronRight } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative text-white overflow-hidden pt-28 pb-16 sm:pb-20"
      style={{
        background: 'linear-gradient(135deg, #1E1B4B 0%, #7F1D1D 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tag */}
        <div className="mb-5">
          <span className="inline-flex items-center px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-amber-300 border border-white/15 text-xs font-bold uppercase tracking-widest">
            VỊ TRÍ VIỆC LÀM & QUẢN LÝ BIÊN CHẾ
          </span>
        </div>

        {/* Big Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] max-w-5xl uppercase font-serif-heading">
          ĐỔI MỚI QUẢN TRỊ THEO VỊ TRÍ VIỆC LÀM & QUẢN LÝ BIÊN CHẾ
        </h1>

        {/* Summary Quote from Quan điểm 1 */}
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-200 max-w-4xl leading-relaxed">
          Vị trí việc làm là nền tảng của quản trị tổ chức, quản trị nhân lực; là căn cứ để tuyển dụng, bố trí, sử dụng, đào tạo, đánh giá, sàng lọc và cải cách chính sách tiền lương. Hoàn thiện hệ thống vị trí việc làm phải xuất phát từ chức năng, nhiệm vụ, sản phẩm đầu ra; chuyển mạnh từ quản lý theo số lượng người, biên chế, ngạch bậc sang quản trị theo vị trí việc làm và kết quả thực thi.
        </p>

        {/* 4 Quick Section Anchor Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          <button
            onClick={() => scrollTo('quan-diem')}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-300">01</span>
              <Layers className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">
              Quan điểm
            </div>
            <div className="text-[11px] text-slate-300 mt-1">
              5 quan điểm chỉ đạo
            </div>
          </button>

          <button
            onClick={() => scrollTo('nguyen-tac')}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-300">02</span>
              <Briefcase className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">
              Nguyên tắc
            </div>
            <div className="text-[11px] text-slate-300 mt-1">
              Vị trí việc làm & Biên chế
            </div>
          </button>

          <button
            onClick={() => scrollTo('nhiem-vu')}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-300">03</span>
              <ListTodo className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">
              5 nhiệm vụ trọng tâm
            </div>
            <div className="text-[11px] text-slate-300 mt-1">
              Lộ trình 2026 – 2031
            </div>
          </button>

          <button
            onClick={() => scrollTo('thuc-hien')}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-amber-300">04</span>
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-white">
              Thực hiện
            </div>
            <div className="text-[11px] text-slate-300 mt-1">
              Phân công trách nhiệm
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

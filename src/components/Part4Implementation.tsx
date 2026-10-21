import React from 'react';
import { thucHienData } from '../data/policyData';
import { Building2, Scale, ShieldCheck, FileCheck2, MapPin, CalendarClock } from 'lucide-react';

// Simple icons based on the content of each implementation item
const getExecutionIcon = (id: number) => {
  switch (id) {
    case 1:
      // Ban Tổ chức Trung ương chủ trì, tham mưu
      return <Building2 className="w-5 h-5 text-white" />;
    case 2:
      // Đảng ủy Chính phủ, Bộ Nội vụ, quy định, định mức, chính sách tiền lương
      return <Scale className="w-5 h-5 text-white" />;
    case 3:
      // Cấp ủy, tổ chức đảng, người đứng đầu chịu trách nhiệm trực tiếp
      return <ShieldCheck className="w-5 h-5 text-white" />;
    case 4:
      // Cơ quan quản lý ngành hoàn thiện văn bản, kiểm chứng dữ liệu
      return <FileCheck2 className="w-5 h-5 text-white" />;
    case 5:
      // Các đơn vị, địa phương trên cả nước
      return <MapPin className="w-5 h-5 text-white" />;
    case 6:
    default:
      // Báo cáo định kỳ hàng tháng tiến độ lên Bộ Chính trị
      return <CalendarClock className="w-5 h-5 text-white" />;
  }
};

export const Part4Implementation: React.FC = () => {
  return (
    <section id="thuc-hien" className="relative">
      {/* Prominent Centered Title (div:nth-of-type(1)) */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase inline-block">
          Thực hiện
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-700 mx-auto mt-3 rounded-full shadow-xs" />
      </div>

      {/* 6 Implementation Cards Grid (div:nth-of-type(2)) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {thucHienData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border-t-4 border-t-red-700 border-x border-b border-slate-200/90 p-7 sm:p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-start"
          >
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              {/* Simple icon based on content (CSS selectors 6 to 11: span:nth-of-type(1)) */}
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-700 to-red-900 text-white flex items-center justify-center shrink-0 shadow-sm shadow-red-900/20">
                {getExecutionIcon(item.id)}
              </span>
            </div>

            {/* Verbatim Content: 1 size larger font */}
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { nguyenTacData } from '../data/policyData';
import { ArrowRight } from 'lucide-react';

interface FlipCardProps {
  title: string;
  paragraphs: string[];
  number: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, paragraphs, number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-[420px] sm:h-[400px] w-full [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative h-full w-full rounded-3xl shadow-lg transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT FACE: Vibrant editorial card with top red accent border */}
        <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-8 sm:p-10 border-t-4 border-t-red-700 border-x border-b border-slate-200/90 [backface-visibility:hidden] flex flex-col justify-between shadow-md group-hover:shadow-xl transition-shadow">
          <div className="flex-1 flex items-center justify-center text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug max-w-sm">
              {title}
            </h3>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-800 border border-red-200/90 font-bold text-xs sm:text-sm group-hover:bg-red-700 group-hover:text-white transition-all shadow-xs">
              <span>Kê chuột để lật nội dung</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>

        {/* BACK FACE: Eye-catching rich red background with amber accent border */}
        <div className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-br from-[#991B1B] via-[#881337] to-[#7F1D1D] text-white p-7 sm:p-9 border-t-4 border-t-amber-400 border-x border-b border-red-500/40 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center shadow-2xl shadow-red-950/50">
          <div className="overflow-y-auto space-y-4 text-base sm:text-lg text-white leading-relaxed pr-1">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="font-normal text-white drop-shadow-xs">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Part2Principles: React.FC = () => {
  return (
    <section id="nguyen-tac" className="relative">
      {/* Prominent Centered Title (div:nth-of-type(1)) */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase inline-block">
          Nguyên tắc
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-700 mx-auto mt-3 rounded-full shadow-xs" />
      </div>

      {/* Selected Element: CSS selector 1: 2 Flip Cards Grid (div:nth-of-type(2)) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {nguyenTacData.map((item, index) => (
          <FlipCard
            key={item.id}
            number={index + 1}
            title={item.title}
            paragraphs={item.paragraphs}
          />
        ))}
      </div>
    </section>
  );
};

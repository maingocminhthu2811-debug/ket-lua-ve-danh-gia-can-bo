import React, { useState } from 'react';
import { quanDiemData } from '../data/policyData';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Part1Views: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeItem = quanDiemData[activeIdx];

  return (
    <section id="quan-diem" className="relative">
      {/* Prominent Centered Title (div:nth-of-type(1)) */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase inline-block">
          Quan điểm
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-700 mx-auto mt-3 rounded-full shadow-xs" />
      </div>

      {/* Timeline with 5 circular nodes (div:nth-of-type(2)) */}
      <div className="max-w-3xl mx-auto mb-12 px-4">
        <div className="relative flex items-center justify-between">
          {/* Timeline background track line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1.5 bg-slate-200 z-0 rounded-full" />
          
          {/* Active progress track with vivid gradient */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-red-600 via-red-700 to-amber-500 transition-all duration-300 z-0 rounded-full"
            style={{
              width: `${(activeIdx / (quanDiemData.length - 1)) * 100}%`,
            }}
          />

          {/* 5 Circular Nodes */}
          {quanDiemData.map((item, idx) => {
            const isActive = idx === activeIdx;
            const isPassed = idx < activeIdx;

            return (
              <div key={item.number} className="relative z-10 flex flex-col items-center">
                <button
                  onClick={() => setActiveIdx(idx)}
                  className={`w-13 h-13 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-mono font-black text-base sm:text-lg transition-all duration-300 cursor-pointer shadow-md ${
                    isActive
                      ? 'bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white ring-4 ring-red-200 scale-110 shadow-red-700/30'
                      : isPassed
                      ? 'bg-gradient-to-br from-red-700 to-red-900 text-white hover:opacity-95'
                      : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-red-500 hover:text-red-700 hover:scale-105'
                  }`}
                  aria-label={`Quan điểm ${item.number}`}
                >
                  0{item.number}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Central Content Frame Container (div:nth-of-type(3)) */}
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {/* Selected Element: CSS selector 2: div:nth-of-type(3) > div:nth-of-type(1) */}
          <motion.div
            key={activeItem.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-gradient-to-br from-[#991B1B] via-[#881337] to-[#7F1D1D] text-white rounded-3xl border border-red-500/40 p-7 sm:p-11 shadow-2xl shadow-red-950/40 relative min-h-[240px] flex flex-col justify-between"
          >
            <div>
              {/* Header inside frame: prominent gold number badge on red card */}
              <div className="flex items-center pb-4 mb-6 border-b border-white/20">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-slate-950 font-mono font-black text-base flex items-center justify-center shrink-0 shadow-md shadow-black/20">
                  0{activeItem.number}
                </span>
              </div>

              {/* Exact Paragraphs */}
              <div className="space-y-5">
                {activeItem.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-normal drop-shadow-xs"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Stepper controls */}
            <div className="flex items-center justify-between pt-6 mt-8 border-t border-white/20 text-sm">
              <button
                disabled={activeIdx === 0}
                onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/30 text-white hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent transition-all font-semibold cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Trước</span>
              </button>

              <div className="flex items-center gap-2">
                {quanDiemData.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIdx(dotIdx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      dotIdx === activeIdx
                        ? 'w-7 bg-amber-400 shadow-xs'
                        : 'w-2.5 bg-white/35 hover:bg-white/60'
                    }`}
                    aria-label={`Chuyển tới quan điểm ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button
                disabled={activeIdx === quanDiemData.length - 1}
                onClick={() => setActiveIdx((prev) => Math.min(quanDiemData.length - 1, prev + 1))}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 disabled:opacity-30 disabled:hover:from-amber-400 transition-all font-bold cursor-pointer shadow-md shadow-black/20"
              >
                <span>Tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

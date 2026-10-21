import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewItem } from '../data/policyData';
import { RotateCcw, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';

interface InteractiveCardStackProps {
  items: ViewItem[];
}

export const InteractiveCardStack: React.FC<InteractiveCardStackProps> = ({ items }) => {
  const [stack, setStack] = useState<number[]>(() => items.map((_, i) => i));
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (stack.length <= 1) return;
    setDirection('right');
    setStack((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    if (stack.length <= 1) return;
    setDirection('left');
    setStack((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  const handleReset = () => {
    setDirection(null);
    setStack(items.map((_, i) => i));
  };

  const handleJumpTo = (index: number) => {
    const foundPos = stack.indexOf(index);
    if (foundPos === -1) return;
    const rotated = [...stack.slice(foundPos), ...stack.slice(0, foundPos)];
    setStack(rotated);
  };

  const activeIndex = stack[0];
  const activeItem = items[activeIndex];

  const handleCopy = (item: ViewItem) => {
    const textToCopy = `Quan điểm ${item.number}:\n${item.paragraphs.join('\n\n')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedIndex(item.number);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      {/* Top Controls */}
      <div className="flex items-center justify-between w-full mb-6 px-1">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-700 text-white text-xs font-bold font-mono">
            0{activeItem.number}
          </span>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Quan điểm {activeItem.number} / {items.length}
          </span>
        </div>

        {/* Step buttons */}
        <div className="flex items-center gap-1.5">
          {items.map((it, idx) => {
            const isTop = idx === activeIndex;
            return (
              <button
                key={it.number}
                onClick={() => handleJumpTo(idx)}
                className={`transition-all duration-200 rounded-full ${
                  isTop
                    ? 'w-7 h-2.5 bg-red-700'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Xem quan điểm ${it.number}`}
              />
            );
          })}
        </div>

        {/* Reset button */}
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white hover:text-red-700 hover:bg-red-50 border border-slate-200 rounded-lg shadow-xs transition-colors"
          title="Đặt lại về quan điểm 1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Đặt lại</span>
        </button>
      </div>

      {/* 3D Stack */}
      <div className="relative w-full min-h-[380px] sm:min-h-[340px] select-none perspective-[1000px]">
        <AnimatePresence mode="popLayout">
          {stack.slice(0, 3).map((itemIndex, stackPosition) => {
            const item = items[itemIndex];
            const isTopCard = stackPosition === 0;
            const cardUniqueKey = `card-${item.number}-${itemIndex}`;

            return (
              <motion.div
                key={cardUniqueKey}
                layout
                initial={
                  direction === 'right'
                    ? { x: 260, opacity: 0, scale: 0.9, rotateZ: 6 }
                    : direction === 'left'
                    ? { x: -260, opacity: 0, scale: 0.9, rotateZ: -6 }
                    : { scale: 0.95, opacity: 0 }
                }
                animate={{
                  x: 0,
                  y: stackPosition * 12,
                  scale: 1 - stackPosition * 0.04,
                  rotateZ: stackPosition === 0 ? 0 : stackPosition === 1 ? -1 : 1,
                  zIndex: 30 - stackPosition,
                  opacity: 1 - stackPosition * 0.15,
                }}
                exit={
                  direction === 'right'
                    ? { x: -280, opacity: 0, rotateZ: -10, transition: { duration: 0.25 } }
                    : { x: 280, opacity: 0, rotateZ: 10, transition: { duration: 0.25 } }
                }
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 26,
                }}
                drag={isTopCard ? 'x' : false}
                dragConstraints={{ left: -100, right: 100 }}
                onDragEnd={(_e, info) => {
                  if (info.offset.x > 80) {
                    handlePrev();
                  } else if (info.offset.x < -80) {
                    handleNext();
                  }
                }}
                className={`absolute inset-0 w-full rounded-2xl bg-white border border-slate-200 shadow-lg p-6 sm:p-7 flex flex-col justify-between cursor-${
                  isTopCard ? 'grab active:cursor-grabbing' : 'default'
                }`}
                style={{
                  touchAction: 'pan-y',
                  boxShadow:
                    stackPosition === 0
                      ? '0 16px 32px -8px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(185, 28, 28, 0.08)'
                      : undefined,
                }}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-red-700 text-white font-mono font-bold text-lg flex items-center justify-center shadow-xs">
                        {item.number}
                      </span>
                      <div>
                        <div className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider">
                          MỤC {item.number}
                        </div>
                        <div className="text-sm font-bold text-slate-800">
                          Quan điểm {item.number}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(item);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-slate-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors border border-slate-200/80"
                      title="Sao chép nội dung quan điểm"
                    >
                      {copiedIndex === item.number ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-medium text-[11px]">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Verbatim Paragraphs */}
                  <div className="space-y-3.5">
                    {item.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="italic">Kéo ngang hoặc bấm nút chuyển</span>
                  <span className="font-mono text-slate-500 font-semibold">
                    0{item.number} / 05
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          onClick={handlePrev}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 rounded-xl shadow-xs transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Quan điểm trước</span>
        </button>

        <button
          onClick={handleNext}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 active:bg-red-900 rounded-xl shadow-xs transition-colors"
        >
          <span>Quan điểm tiếp theo</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

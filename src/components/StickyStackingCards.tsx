import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ViewItem } from '../data/policyData';

interface StickyStackingCardsProps {
  items: ViewItem[];
}

interface SingleStickyCardProps {
  item: ViewItem;
  index: number;
  total: number;
  baseTop?: number;
  step?: number;
}

const SingleStickyCard: React.FC<SingleStickyCardProps> = ({
  item,
  index,
  total,
  baseTop = 24,
  step = 32,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Card shrinks gradually from its top edge (transform-origin: top) as the next card rides over it
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, targetScale]
  );

  const stickyTop = baseTop + index * step;

  return (
    <div
      ref={containerRef}
      className="relative pb-16 sm:pb-24 last:pb-4"
      style={{
        minHeight: '340px',
      }}
    >
      <motion.div
        style={{
          position: 'sticky',
          top: `${stickyTop}px`,
          zIndex: 10 + index,
          scale: index === total - 1 ? 1 : scale,
          transformOrigin: 'top center',
        }}
        className="w-full bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xl transition-shadow overflow-hidden"
      >
        {/* Step Indicator / Title */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
          <span className="w-8 h-8 rounded-lg bg-red-700 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
            0{item.number}
          </span>
          <h3 className="text-base font-bold text-slate-900">
            Quan điểm {item.number}
          </h3>
        </div>

        {/* Verbatim Paragraphs */}
        <div className="space-y-4">
          {item.paragraphs.map((para, pIdx) => (
            <p
              key={pIdx}
              className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal"
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const StickyStackingCards: React.FC<StickyStackingCardsProps> = ({ items }) => {
  return (
    <div className="w-full relative pt-2">
      {items.map((item, index) => (
        <SingleStickyCard
          key={item.number}
          item={item}
          index={index}
          total={items.length}
          baseTop={24}
          step={32}
        />
      ))}
    </div>
  );
};

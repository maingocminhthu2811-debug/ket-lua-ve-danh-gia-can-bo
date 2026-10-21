import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { nhiemVuData, TaskItem } from '../data/policyData';
import { Search, Users, Database, RefreshCw, Award } from 'lucide-react';

interface TaskCardProps {
  item: TaskItem;
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

// Simple icons based on the content of each task
const getTaskIcon = (index: number) => {
  switch (index) {
    case 0:
      // Rà soát, cập nhật vị trí việc làm mô hình mới, nhất là cấp xã
      return <Search className="w-5 h-5 text-slate-950" />;
    case 1:
      // Nhu cầu nhân lực phù hợp đặc thù từng khối, địa bàn
      return <Users className="w-5 h-5 text-slate-950" />;
    case 2:
      // Hoàn thành cơ sở dữ liệu vị trí việc làm thống nhất 2026
      return <Database className="w-5 h-5 text-slate-950" />;
    case 3:
      // Phương án giao biên chế 2027-2031, sắp xếp, điều chuyển, đào tạo
      return <RefreshCw className="w-5 h-5 text-slate-950" />;
    case 4:
    default:
      // Đánh giá dựa trên sản phẩm, hiệu quả, chuẩn hóa khung năng lực
      return <Award className="w-5 h-5 text-slate-950" />;
  }
};

const TaskCard: React.FC<TaskCardProps> = ({
  item,
  index,
  totalCards,
  scrollYProgress,
}) => {
  // Target scale formula: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  // Calculate the scroll window when the next card rides up over this card
  const stepSize = 1 / (totalCards - 1);
  const startShrink = index * stepSize;
  const endShrink = Math.min(1, (index + 1) * stepSize);

  const scale = useTransform(
    scrollYProgress,
    index === totalCards - 1
      ? [0, 1]
      : [0, startShrink, endShrink, 1],
    index === totalCards - 1
      ? [1, 1]
      : [1, 1, targetScale, targetScale]
  );

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: `calc(100px + ${index * 28}px)`,
        zIndex: index + 1,
        scale,
        transformOrigin: 'top center',
      }}
      className={`task-card w-full bg-gradient-to-br from-[#991B1B] via-[#881337] to-[#7F1D1D] text-white rounded-3xl border border-red-500/40 p-7 sm:p-9 shadow-2xl shadow-red-950/50 transition-shadow overflow-hidden ${
        index === totalCards - 1 ? 'mb-0' : 'mb-20 sm:mb-24'
      }`}
    >
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/20">
        {/* Simple icon based on content (CSS selectors 1 to 5: span:nth-of-type(1)) */}
        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-black/20">
          {getTaskIcon(index)}
        </span>
      </div>

      {/* Verbatim Task Content: White text on eye-catching red background */}
      <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-normal drop-shadow-xs">
        {item.content}
      </p>
    </motion.div>
  );
};

export const Part3Tasks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalCards = nhiemVuData.length;

  // Track scroll progress of the common stacking container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="nhiem-vu" className="relative">
      {/* Prominent Centered Title (div:nth-of-type(1)) */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase inline-block">
          5 nhiệm vụ trọng tâm
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-700 mx-auto mt-3 rounded-full shadow-xs" />
      </div>

      {/* Stacking Cards Container (div:nth-of-type(2)) */}
      <div
        ref={containerRef}
        className="w-full max-w-3xl mx-auto relative pt-4 pb-8 sm:pb-12"
      >
        {nhiemVuData.map((item, index) => (
          <TaskCard
            key={item.number}
            item={item}
            index={index}
            totalCards={totalCards}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

import React from 'react';
import { Part1Views } from './components/Part1Views';
import { Part2Principles } from './components/Part2Principles';
import { Part3Tasks } from './components/Part3Tasks';
import { Part4Implementation } from './components/Part4Implementation';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] font-sans antialiased py-10 sm:py-16">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Section 1: Quan điểm */}
        <Part1Views />

        {/* Section 2: Nguyên tắc */}
        <Part2Principles />

        {/* Section 3: 5 nhiệm vụ trọng tâm */}
        <Part3Tasks />

        {/* Section 4: Thực hiện */}
        <Part4Implementation />
      </main>
    </div>
  );
}

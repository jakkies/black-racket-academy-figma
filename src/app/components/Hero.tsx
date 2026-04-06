import { useState } from "react";
import imgSection from "../../assets/a06948c10ce47e94004c816b793a76954255baad.png";

export function Hero({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imgSection}
          alt="Tennis player"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/25" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 h-full flex items-center">
        <div className="max-w-2xl pt-10 sm:pt-20">
          <h1 className="text-[44px] sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-none">
            <span className="text-white block">WHERE</span>
            <span className="text-white block">DEDICATION</span>
            <span className="text-[#d3e83d] block">MEETS</span>
            <span className="text-[#d3e83d] block">RESULTS</span>
          </h1>

          <p className="text-white text-lg md:text-2xl mb-8 leading-relaxed max-w-xl">
            Professional padel coaching for all ages and skill levels. Where focus, discipline, and passion builds success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              //onClick={onJoinClick}
              className="bg-[#d3e83d] text-black px-6 py-3 sm:px-8 sm:py-4 font-bold text-base sm:text-lg hover:bg-[#c5d639] transition-colors cursor-pointer"
            >
              <a href="#promotion">COACHING PROMOTION</a>
            </button>
            <a href="#programs" className="bg-black border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-colors block text-center">
              VIEW PROGRAMS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

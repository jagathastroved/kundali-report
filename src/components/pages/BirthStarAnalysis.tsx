import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { Compass, AlertCircle, Sparkles, CheckCircle } from 'lucide-react';
import { PieChartComponent, BookletMockup } from '../SharedElements';
import { elementImages } from '../../data/elementImages';
import { reportContent } from '../../data/reportContent';

export const BirthStarPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = () => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-8">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">
        <p className="text-[12px] text-slate-500 font-medium uppercase tracking-widest">{reportContent?.birthStar?.chapterInfo}</p>
        <div className="inline-flex items-center justify-center p-4 rounded-full mb-2 shadow-inner border border-white bg-gradient-to-br from-indigo-100 to-indigo-50 overflow-hidden w-20 h-20 relative group mx-auto">
          <img src={elementImages.ether} alt="Ether Space" className="w-full h-full object-cover absolute opacity-30 group-hover:scale-110 transition-transform duration-500" />
          <span className="text-4xl filter drop-shadow-md relative z-10">⭐</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          {reportContent?.birthStar?.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-600 font-black">{data?.birthStar?.nkName} Nakshatra</span>
        </h2>
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          {reportContent?.birthStar?.deityPrefix} {data?.birthStar?.associatedDeity}
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-orange-400 mx-auto rounded-full mt-4" />
      </div>

      {/* Main Description */}
      <div className="px-2">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-50/50 to-white border border-indigo-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-400" />
          <p className="text-slate-700 text-[15px] leading-relaxed font-medium text-center max-w-2xl mx-auto z-10 relative">
            {data?.birthStar?.nkName} Nakshatra! You are ruled by the <strong className="text-indigo-600">{data?.birthStar?.rulingPlanet}</strong> and your zodiac sign is <strong className="text-indigo-600">{data?.birthStar?.zodiacSign}</strong>. Your nakshatra is intimately associated with the god {data?.birthStar?.associatedDeity}. {data?.birthStar?.description}
          </p>
        </div>
      </div>

      {/* Traits Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">

        {/* Personality Card */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-br from-orange-50/80 to-white border border-orange-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
          <div className="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-1 text-[11px] font-bold uppercase rounded-full shadow-md tracking-wider flex items-center">
            <Sparkles className="w-3 h-3 mr-1" /> {reportContent?.birthStar?.personalityTitle}
          </div>
          <div className="mt-4 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shadow-inner border border-white p-2">
              <img src={elementImages.fire} alt="Fire Energy" className="w-full h-full object-contain opacity-80" />
            </div>
            <p className="text-slate-700 text-[14px] leading-relaxed font-medium">
              {reportContent?.birthStar?.personalityText?.replace('{nkName}', data?.birthStar?.nkName)}
            </p>
          </div>
        </div>

        {/* Strengths & Weaknesses Card */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-br from-indigo-50/80 to-white border border-indigo-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
          <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-4 py-1 text-[11px] font-bold uppercase rounded-full shadow-md tracking-wider flex items-center">
            <Compass className="w-3 h-3 mr-1" /> {reportContent?.birthStar?.strengthsTitle}
          </div>
          <div className="mt-4 flex flex-col space-y-4">
             <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center shadow-inner border border-white p-2">
              <img src={elementImages.water} alt="Water Flow" className="w-full h-full object-contain opacity-80" />
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-emerald-700 font-bold mb-1 flex items-center text-[13px] uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 mr-1" /> {reportContent?.birthStar?.yourStrengths}
                </span>
                <p className="text-slate-700 text-[14px] leading-relaxed font-medium">
                  {data?.birthStar?.strengths}
                </p>
              </div>
              <div className="h-px w-full bg-indigo-200/50" />
              <div>
                <span className="text-rose-600 font-bold mb-1 flex items-center text-[13px] uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 mr-1" /> {reportContent?.birthStar?.areasForGrowth}
                </span>
                <p className="text-slate-700 text-[14px] leading-relaxed font-medium">
                  {data?.birthStar?.weaknesses}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

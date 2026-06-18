import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { reportContent } from '../../data/reportContent';
import { Moon, Sun } from 'lucide-react';
import { PieChartComponent, BookletMockup } from '../SharedElements';
import { planetImages } from '../../data/planetImages';
import { zodiacSignImages } from '../../data/zodiacSigns';

export const CorePersonalityPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = () => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-6">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">
        <p className="text-[12px] text-slate-500 font-medium uppercase tracking-widest">{reportContent?.corePersonality?.chapterInfo}</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          {reportContent?.corePersonality?.title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      <div className="px-2">
        <p className="text-slate-600 text-[14px] leading-relaxed font-medium text-center max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: reportContent?.corePersonality?.description?.replace('BIG 3', '<strong class="text-slate-800">BIG 3</strong>') }} />
      </div>

      <div className="space-y-4 px-1 pt-2">

        {/* Sun Sign Card */}
        <div className="relative p-5 md:p-6 bg-gradient-to-r from-orange-50/80 to-white rounded-3xl shadow-sm hover:shadow-md transition-all border border-orange-100 flex flex-col md:flex-row md:items-center gap-4 group hover:-translate-y-1">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={planetImages.surya} alt="Sun" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-orange-900 text-base">
              {reportContent?.corePersonality?.sunTitle}
            </h3>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
              {reportContent?.corePersonality?.sunDesc}
            </p>
          </div>
        </div>

        {/* Moon Sign Card */}
        <div className="relative p-5 md:p-6 bg-gradient-to-r from-indigo-50/80 to-white rounded-3xl shadow-sm hover:shadow-md transition-all border border-indigo-100 flex flex-col md:flex-row md:items-center gap-4 group hover:-translate-y-1">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={planetImages.moon} alt="Moon" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-indigo-900 text-base">
              {reportContent?.corePersonality?.moonTitle}
            </h3>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
              {reportContent?.corePersonality?.moonDesc}
            </p>
          </div>
        </div>

        {/* Rising Sign Card */}
        <div className="relative p-5 md:p-6 bg-gradient-to-r from-rose-50/80 to-white rounded-3xl shadow-sm hover:shadow-md transition-all border border-rose-100 flex flex-col md:flex-row md:items-center gap-4 group hover:-translate-y-1">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={zodiacSignImages[data?.personality?.bigThree?.ascendant?.sign?.split(' ')[0].toLowerCase()] || ''} alt="Ascendant" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-rose-900 text-base">
              {reportContent?.corePersonality?.risingTitle}
            </h3>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
              {reportContent?.corePersonality?.risingDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-50/50 rounded-3xl border border-slate-100 relative shadow-sm">
        <div className="absolute top-0 left-8 -mt-3 text-4xl text-indigo-200 font-serif opacity-50">"</div>
        <p className="text-[14px] text-slate-700 leading-relaxed font-medium italic relative z-10">
          {data?.personality?.description}
        </p>
      </div>

    </div>
  );
};

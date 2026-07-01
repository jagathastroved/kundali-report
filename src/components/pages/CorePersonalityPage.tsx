import React from 'react';
import { useReport } from '../../context/ReportContext';
import { reportContent } from '../../data/reportContent';
import { planetImages } from '../../data/planetImages';
import { zodiacSignImages } from '../../data/zodiacSigns';

export const CorePersonalityPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = () => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-6">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">
        <h2 className="text-2xl md:text-3xl font-semibold page-text tracking-tight leading-tight max-w-xl mx-auto">
          {reportContent?.corePersonality?.title}
        </h2>
      </div>

      <div className="px-2">
        <p className="page-text text-[14px] leading-relaxed font-medium text-left max-w-2xl mx-auto">{reportContent?.corePersonality?.description}</p>
      </div>

      <div className="space-y-4 px-1 pt-2">

        {/* Sun Sign Card */}
        <div className="relative p-5 md:p-6 bg-linear-to-r from-orange-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-orange-900/40 hover:dark:to-slate-800/40 transition-all duration-300 rounded-3xl shadow-soft hover:shadow-soft transition-all border border-orange-100 flex flex-col md:flex-row md:items-center gap-4 group hover:-translate-y-1">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={planetImages.surya} alt="Sun" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-orange-900 dark:text-orange-300 text-base">
              {reportContent?.corePersonality?.sunTitle}
            </h3>
            <p className="text-[13px] page-text font-medium leading-relaxed">
              {reportContent?.corePersonality?.sunDesc}
            </p>
          </div>
        </div>

        {/* Moon Sign Card */}
        <div className="relative p-5 md:p-6 bg-linear-to-r from-indigo-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-indigo-900/40 hover:dark:to-slate-800/40 transition-all duration-300 rounded-3xl shadow-soft hover:shadow-soft transition-all border border-indigo-100 flex flex-col md:flex-row md:items-center gap-4 group hover:-translate-y-1">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={planetImages.moon} alt="Moon" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-indigo-900 dark:text-indigo-300 text-base">
              {reportContent?.corePersonality?.moonTitle}
            </h3>
            <p className="text-[13px] page-text font-medium leading-relaxed">
              {reportContent?.corePersonality?.moonDesc}
            </p>
          </div>
        </div>

        {/* Rising Sign Card */}
        <div className="relative p-5 md:p-6 bg-linear-to-r from-rose-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-rose-900/40 hover:dark:to-slate-800/40 transition-all duration-300 rounded-3xl shadow-soft hover:shadow-soft transition-all border border-rose-100 flex flex-col md:flex-row md:items-center gap-4 group hover:-translate-y-1">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={zodiacSignImages[data?.personality?.bigThree?.ascendant?.sign?.split(' ')[0].toLowerCase()] || ''} alt="Ascendant" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 space-y-1">
            <h3 className="font-bold text-rose-900 dark:text-rose-300 text-base">
              {reportContent?.corePersonality?.risingTitle}
            </h3>
            <p className="text-[13px] page-text font-medium leading-relaxed">
              {reportContent?.corePersonality?.risingDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

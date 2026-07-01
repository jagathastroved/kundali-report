import React from 'react';
import { useReport } from '../../context/ReportContext';
import { reportContent } from '../../data/reportContent';
import { Star, Sparkles } from 'lucide-react';
import { PieChartComponent, renderPromoBox } from '../SharedElements';
import { elementImages } from '../../data/elementImages';

export const FiveGreatElementsPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-6">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">

        <h2 className="text-2xl md:text-3xl font-semibold page-text tracking-tight leading-tight max-w-xl mx-auto">
          {reportContent?.dominantElement?.title}
        </h2>
      </div>

      <p className="page-text text-[14px] leading-relaxed font-medium max-w-2xl mx-auto px-2">
        {reportContent?.dominantElement?.description} {data?.elementAnalysis?.description}
      </p>

      <div className="space-y-4 font-sans px-1 pt-2">
        {/* Fire Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-linear-to-r from-red-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-red-900/40 hover:dark:to-slate-800/40 transition-all duration-300 border border-red-100 shadow-soft hover:shadow-soft transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.fire} alt="Fire" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-red-900 dark:text-red-300 text-base mb-1">{reportContent?.dominantElement?.fireTitle}</h4>
            <p className="text-[13px] page-text font-medium leading-relaxed">{reportContent?.dominantElement?.fireDesc}</p>
          </div>
        </div>

        {/* Earth Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-linear-to-r from-green-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-green-900/40 hover:dark:to-slate-800/40 transition-all duration-300 border border-green-100 shadow-soft hover:shadow-soft transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.earth} alt="Earth" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-green-900 dark:text-green-300 text-base mb-1">{reportContent?.dominantElement?.earthTitle}</h4>
            <p className="text-[13px] page-text font-medium leading-relaxed">{reportContent?.dominantElement?.earthDesc}</p>
          </div>
        </div>

        {/* Air Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-linear-to-r from-amber-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-amber-900/40 hover:dark:to-slate-800/40 transition-all duration-300 border border-amber-100 shadow-soft hover:shadow-soft transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.air} alt="Air" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-[#A16207] dark:text-amber-300 text-base mb-1">{reportContent?.dominantElement?.airTitle}</h4>
            <p className="text-[13px] page-text font-medium leading-relaxed">{reportContent?.dominantElement?.airDesc}</p>
          </div>
        </div>

        {/* Water Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-linear-to-r from-blue-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-blue-900/40 hover:dark:to-slate-800/40 transition-all duration-300 border border-blue-100 shadow-soft hover:shadow-soft transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.water} alt="Water" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 dark:text-blue-300 text-base mb-1">{reportContent?.dominantElement?.waterTitle}</h4>
            <p className="text-[13px] page-text font-medium leading-relaxed">{reportContent?.dominantElement?.waterDesc}</p>
          </div>
        </div>

        {/* Ether Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-linear-to-r from-purple-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-purple-900/40 hover:dark:to-slate-800/40 transition-all duration-300 border border-purple-100 shadow-soft hover:shadow-soft transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.ether} alt="Ether" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-purple-900 dark:text-purple-300 text-base mb-1">{reportContent?.dominantElement?.etherTitle}</h4>
            <p className="text-[13px] page-text font-medium leading-relaxed">{reportContent?.dominantElement?.etherDesc}</p>
          </div>
        </div>
      </div>

      {/* --- INSERTED FROM ELEMENTAL BALANCE PAGE --- */}
      <div className="pt-8 mt-8 border-t border-light">

        <div className="text-center space-y-2 mb-8">
          <p className="text-[12px] text-muted font-medium uppercase tracking-widest">{reportContent?.dominantElement?.yogiMetrology}</p>
          <h2 className="text-2xl font-semibold page-text tracking-tight leading-tight">
            {reportContent?.dominantElement?.assessmentTitle}
          </h2>
        </div>

        <div className="p-6 rounded-3xl bg-linear-to-r from-[#FEF6E4] to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-orange-900/40 hover:dark:to-slate-800/40 transition-all duration-300 border-l-4 border-l-[#FE7950] border border-[#FDE5A9] shadow-soft mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transform transition-transform hover:scale-[1.01]">
          <div>
            <span className="text-[11px] font-bold text-amber-800/60 dark:text-amber-400/80 uppercase tracking-widest block mb-1">{reportContent?.dominantElement?.yourDominantElements}</span>
            <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#FE7950] to-orange-500">
              {data?.elementAnalysis?.dominant || 'Ether and Air'}
            </span>
          </div>
          <div className="w-14 h-14 card-bg rounded-full flex items-center justify-center shadow-soft border border-orange-100 flex-shrink-0 text-orange-400">
            <Sparkles className="w-7 h-7" />
          </div>
        </div>

        <div className="py-4 bg-slate-50/50 rounded-3xl border border-light mb-8 p-4">
          <PieChartComponent ratios={data?.elementAnalysis?.ratios} />
        </div>

        <div className="space-y-5">
          {data?.elementAnalysis?.ratios?.slice(0, 2).map((element, idx) => {
            const ElementIcon = idx === 0 ? Star : Sparkles;

            return (
              <div
                key={idx}
                className="p-6 rounded-3xl card-bg border border-default shadow-soft hover:shadow-soft transition-shadow relative overflow-hidden group"
              >
                {/* Subtle background glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40 ${idx === 0 ? 'bg-orange-400' : 'bg-blue-400'}`} />

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-light pb-3 mb-3 relative z-10 gap-2">
                  <span className="text-sm font-bold page-text uppercase tracking-wider flex items-center">
                    <ElementIcon className={`w-5 h-5 mr-2 ${idx === 0 ? 'text-orange-500' : 'text-blue-500'}`} />
                    {element.name} Dominance
                  </span>
                  <span className="text-xs font-bold card-bg page-text px-3 py-1 rounded-full font-mono shadow-inner">
                    Ratio {element.percentage}%
                  </span>
                </div>
                <p className="text-[14px] page-text leading-relaxed font-medium relative z-10 pl-1" dangerouslySetInnerHTML={{ __html: reportContent?.dominantElement?.dominanceText?.replace('{element}', `<span class="font-bold page-text">${element.name.toLowerCase()}</span>`).replace('{description}', element.description.toLowerCase()) }} />
              </div>
            );
          })}
        </div>
        {/* Premium Insert Promo */}
        <div className="pt-6">
          {renderPromoBox(() => setPage(pageIdx + 1), 'element')}
        </div>
      </div>
    </div>
  );
};

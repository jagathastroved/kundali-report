import React from 'react';
import { useReport } from '../../context/ReportContext';
import { reportContent } from '../../data/reportContent';
import { planetImages } from '../../data/planetImages';
import { zodiacSignImages } from '../../data/zodiacSigns';

export const BigThreeSignsPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = () => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-6">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">

        <p className="text-[12px] text-slate-500 font-medium uppercase tracking-widest">{reportContent?.influentialSigns?.chapterInfo}</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          {reportContent?.influentialSigns?.title}
        </h2>
        <div className="w-16 h-1 bg-linear-to-r from-orange-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      {/* Three big signs columns grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-sans pt-4">

        {/* Sun Card */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-b from-orange-50/50 to-white border border-orange-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center group">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center shadow-inner border border-white mb-4 group-hover:scale-105 transition-transform overflow-hidden">
            <img src={planetImages.surya} alt="Surya (Sun)" className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">Surya (Sun)</span>
          <h4 className="font-bold text-slate-900 text-lg tracking-tight">
            {data?.personality?.bigThree?.sun?.sign}
          </h4>
        </div>

        {/* Lagna (Rising Card) */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-b from-rose-50 to-white border-2 border-rose-200 shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center group transform sm:-translate-y-2">
          <div className="absolute -top-3 bg-linear-to-r from-rose-500 to-rose-400 text-white px-3 py-1 text-[10px] font-bold uppercase rounded-full shadow-md tracking-wider">
            {reportContent?.influentialSigns?.mostImportantLabel}
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-200 to-rose-100 flex items-center justify-center shadow-inner border border-white mb-4 mt-2 group-hover:scale-105 transition-transform overflow-hidden p-1">
            <img src={zodiacSignImages[data?.personality?.bigThree?.ascendant?.sign?.split(' ')[0].toLowerCase()] || ''} alt={data?.personality?.bigThree?.ascendant?.sign} className="w-full h-full object-contain" />
          </div>
          <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-1">Lagna (Rising)</span>
          <h4 className="font-bold text-rose-900 text-lg tracking-tight">
            {data?.personality?.bigThree?.ascendant?.sign}
          </h4>
        </div>

        {/* Moon Card */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center group">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-100 flex items-center justify-center shadow-inner border border-white mb-4 group-hover:scale-105 transition-transform overflow-hidden">
            <img src={planetImages.moon} alt="Chandra (Moon)" className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Chandra (Moon)</span>
          <h4 className="font-bold text-slate-900 text-lg tracking-tight">
            {data?.personality?.bigThree?.moon?.sign}
          </h4>
        </div>
      </div>

      {/* Dynamic description cards structured in matching color themes */}
      <div className="space-y-5 pt-4 font-sans">

        <div className="p-6 rounded-3xl bg-linear-to-r from-orange-50/50 to-white border border-orange-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="absolute top-0 left-0 w-2 h-full bg-orange-400" />
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-orange-200 shadow-sm ml-2">
            <img src={planetImages.surya} alt="Sun" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-orange-900 text-[13px] uppercase tracking-wider mb-1">
              {reportContent?.influentialSigns?.sunEssenceTitle}
            </h4>
            <p className="text-[14px] text-slate-700 leading-relaxed font-medium">
              {data?.personality?.bigThree?.sun?.description}
            </p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-linear-to-r from-rose-50/50 to-white border border-rose-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="absolute top-0 left-0 w-2 h-full bg-rose-400" />
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-rose-200 shadow-sm ml-2 bg-white p-1">
            <img src={zodiacSignImages[data?.personality?.bigThree?.ascendant?.sign?.split(' ')[0].toLowerCase()] || ''} alt="Ascendant" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-rose-900 text-[13px] uppercase tracking-wider mb-1">
              {reportContent?.influentialSigns?.risingPersonaTitle}
            </h4>
            <p className="text-[14px] text-slate-700 leading-relaxed font-medium">
              {data?.personality?.bigThree?.ascendant?.description}
            </p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-linear-to-r from-indigo-50/50 to-white border border-indigo-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-400" />
          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-indigo-200 shadow-sm ml-2">
            <img src={planetImages.moon} alt="Moon" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-indigo-900 text-[13px] uppercase tracking-wider mb-1">
              {reportContent?.influentialSigns?.moonEmotionTitle}
            </h4>
            <p className="text-[14px] text-slate-700 leading-relaxed font-medium">
              {data?.personality?.bigThree?.moon?.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { useReport } from '../../context/ReportContext';
import { Sparkles, Heart } from 'lucide-react';
import { reportContent } from '../../data/reportContent';
import { planetImages } from '../../data/planetImages';

const getPlanetImage = (planetName: string) => {
  const name = planetName.toLowerCase();
  if (name.includes('sun') || name.includes('surya')) return planetImages.surya;
  if (name.includes('moon') || name.includes('chandra')) return planetImages.moon;
  if (name.includes('mars') || name.includes('mangal') || name.includes('kuja')) return planetImages.mars;
  if (name.includes('mercury') || name.includes('budh') || name.includes('buddha')) return planetImages.buddha;
  if (name.includes('jupiter') || name.includes('guru') || name.includes('brihaspati')) return planetImages.guru;
  if (name.includes('venus') || name.includes('shukra') || name.includes('sukra')) return planetImages.sukra;
  if (name.includes('saturn') || name.includes('shani') || name.includes('sani')) return planetImages.sani;
  if (name.includes('rahu')) return planetImages.rahu;
  if (name.includes('ketu')) return planetImages.ketu;
  return planetImages.surya; // fallback
};

export const AtmakarakaPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = () => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-6 font-sans">
      {/* Title Section */}
      <div className="text-center space-y-3 mt-4 px-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          {reportContent?.atmakaraka?.title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      <p className="text-slate-600 text-[14px] leading-relaxed font-medium text-center max-w-xl mx-auto px-4">
        {reportContent?.atmakaraka?.description}
      </p>

      {/* Hero Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow text-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400 opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-400 opacity-5 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[6px] border-white shadow-xl overflow-hidden mb-5 bg-indigo-50 relative group-hover:scale-105 transition-transform duration-500">
            <img
              src={getPlanetImage(reportContent?.atmakaraka?.planet)}
              alt={reportContent?.atmakaraka?.planet}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent flex items-end justify-center pb-2">
              <Sparkles className="w-4 h-4 text-white/90" />
            </div>
          </div>

          <span className="text-[11px] font-bold uppercase text-indigo-500 tracking-widest mb-1">
            {reportContent?.atmakaraka?.yourAtmakaraka}
          </span>
          <h3 className="text-3xl font-black text-indigo-950 mb-6 tracking-tight">
            {reportContent?.atmakaraka?.planet}
          </h3>

          <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-indigo-100/50 shadow-sm text-left w-full max-w-lg">
            <h4 className="font-bold text-slate-800 text-[13px] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500" /> {reportContent?.atmakaraka?.soulDesireTitle}
            </h4>
            <p className="text-[15px] text-slate-700 leading-relaxed font-medium">
              {reportContent?.atmakaraka?.soulDesire}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

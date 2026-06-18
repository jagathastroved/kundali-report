import React from 'react';
import { useReport } from '../../context/ReportContext';
import { planetImages } from '../../data/planetImages';
import { Sparkles } from 'lucide-react';

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

export const AtmakarakaPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

  const atmakaraka = data.spiritualProfile.atmakaraka;
  const planetImg = getPlanetImage(atmakaraka.planetName);

  return (
    <div className="space-y-8 pb-6">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          Atmakaraka Insight
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      <div className="px-2">
        <p className="text-slate-600 text-[14px] leading-relaxed font-medium text-center max-w-2xl mx-auto">
          The Atmakaraka is the planet with the highest degree in your Kundli. It represents the ultimate desire of your soul and the core spiritual lessons you are here to learn.
        </p>
      </div>

      <div className="space-y-6 pt-4 font-sans px-1">

        {/* Atmakaraka Planet Row */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-50/80 to-white border border-indigo-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-5 group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-400" />
          <div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-[3px] border-indigo-200 shadow-sm ml-2 bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
            <img src={planetImg} alt={atmakaraka.planetName} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 space-y-2 w-full">
            <h4 className="font-bold text-indigo-900 text-[13px] uppercase tracking-wider">
              Your Atmakaraka
            </h4>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              {atmakaraka.planetName}
            </h3>
            <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
              {atmakaraka.description}
            </p>
          </div>
        </div>

        {/* Soul's Desire Row */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-orange-50/80 to-white border border-orange-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-5 group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-2 h-full bg-orange-400" />
          <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-orange-200 shadow-sm ml-2 bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-105 transition-transform">
            <Sparkles size={28} />
          </div>
          <div className="flex-1 space-y-2 w-full pt-1">
            <h4 className="font-bold text-orange-900 text-[13px] uppercase tracking-wider">
              The Soul's Underlying Desire
            </h4>
            <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
              {atmakaraka.soulDesireText}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

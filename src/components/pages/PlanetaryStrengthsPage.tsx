import React from 'react';
import { useReport } from '../../context/ReportContext';
import { Sparkles, ShieldCheck, AlertTriangle } from 'lucide-react';
import { planetImages } from '../../data/planetImages';
import { renderPromoBox } from '../SharedElements';

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

export const PlanetaryStrengthsPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-6">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          Planetary Shield Strengths
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      <div className="px-2">
        <p className="text-slate-600 text-[14px] leading-relaxed font-medium text-center max-w-2xl mx-auto">
          Planets carry unique energetic behaviors depending on their Vedic dignity. Understanding your planetary shields helps you navigate your strengths and prepare for life's challenges.
        </p>
      </div>

      <div className="space-y-6 pt-4 font-sans px-1">

        {/* Yogakaraka Row */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-50/80 to-white border border-indigo-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-5 group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-400" />
          <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-indigo-200 shadow-sm ml-2 bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
            <Sparkles size={26} />
          </div>
          <div className="flex-1 space-y-3 w-full">
            <div className="space-y-1">
              <h4 className="font-bold text-indigo-900 text-[13px] uppercase tracking-wider mb-1">
                Yogakaraka Planets
              </h4>
              <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                Yoga Karaka indicates the supreme helper planet in your natal Kundli, carrying massive powers to invite overall growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {data.planetaryStrengths.yogakaraka.map((p, idx) => (
                <span key={idx} className="bg-white border border-indigo-200 text-indigo-800 pr-4 pl-1.5 py-1.5 rounded-xl text-[13px] font-semibold shadow-sm flex items-center gap-2">
                  <img src={getPlanetImage(p)} alt={p} className="w-6 h-6 rounded-full object-cover border border-indigo-100 shadow-sm" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Benefics Row */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-50/80 to-white border border-emerald-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-5 group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-400" />
          <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-emerald-200 shadow-sm ml-2 bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
            <ShieldCheck size={26} />
          </div>
          <div className="flex-1 space-y-3 w-full">
            <div className="space-y-1">
              <h4 className="font-bold text-emerald-900 text-[13px] uppercase tracking-wider mb-1">
                Benefic Forces
              </h4>
              <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                These are highly protective, auspicious planets that represent areas of ease, wellness, and mental calm.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {data.planetaryStrengths.benefics.map((p, idx) => (
                <span key={idx} className="bg-white border border-emerald-200 text-emerald-800 pr-4 pl-1.5 py-1.5 rounded-xl text-[13px] font-semibold shadow-sm flex items-center gap-2">
                  <img src={getPlanetImage(p)} alt={p} className="w-6 h-6 rounded-full object-cover border border-emerald-100 shadow-sm" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Malefics Row */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-50/80 to-white border border-rose-100 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-5 group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-2 h-full bg-rose-400" />
          <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-rose-200 shadow-sm ml-2 bg-rose-50 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
            <AlertTriangle size={26} />
          </div>
          <div className="flex-1 space-y-3 w-full">
            <div className="space-y-1">
              <h4 className="font-bold text-rose-900 text-[13px] uppercase tracking-wider mb-1">
                Malefic Challenges
              </h4>
              <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                These are challenging areas where unexpected spiritual lessons, lessons, and tests are triggered.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {data.planetaryStrengths.malefics.map((p, idx) => (
                <span key={idx} className="bg-white border border-rose-200 text-rose-800 pr-4 pl-1.5 py-1.5 rounded-xl text-[13px] font-semibold shadow-sm flex items-center gap-2">
                  <img src={getPlanetImage(p)} alt={p} className="w-6 h-6 rounded-full object-cover border border-rose-100 shadow-sm" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Premium Insert Promo */}
      <div className="pt-4 px-1">
        {renderPromoBox(() => setPage(pageIdx + 1), 'planetary')}
      </div>
    </div>
  );
};

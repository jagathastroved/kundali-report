import React from 'react';
import { useReport } from '../../context/ReportContext';
import { Award, Shield, AlertCircle } from 'lucide-react';
import { planetImages } from '../../data/planetImages';
import { renderPromoBox } from '../SharedElements';
import { reportContent } from '@/src/data/reportContent';

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
    <div className="space-y-8 pb-6 font-sans">
      {/* Title Section */}
      <div className="text-center space-y-3 mt-4 px-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          {reportContent?.planetaryStrengths?.title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      <p className="text-slate-600 text-[14px] leading-relaxed font-medium text-center max-w-xl mx-auto px-4">
        {reportContent?.planetaryStrengths?.description}
      </p>

      <div className="space-y-6 pt-2">

        {/* Yogakaraka Planets */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 to-white border border-emerald-100 shadow-sm relative overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200 opacity-20 rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-emerald-100/50 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-50">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-900">{reportContent?.planetaryStrengths?.yogaKarakaTitle}</h3>
              <p className="text-[12px] text-emerald-700/80 font-medium tracking-wide">The Most Auspicious Planets</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 relative z-10">
            {data?.planetaryStrengths?.yogakaraka?.map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-emerald-100 hover:border-emerald-200 transition-colors">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-emerald-50 shadow-inner">
                  <img src={getPlanetImage(p)} alt={p} className="w-full h-full object-cover" />
                </div>
                <span className="text-emerald-800 font-bold text-sm pr-1">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefics */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50/80 to-white border border-indigo-100 shadow-sm relative overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-200 opacity-20 rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-indigo-100/50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-50">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-indigo-900">{reportContent?.planetaryStrengths?.beneficsTitle}</h3>
              <p className="text-[12px] text-indigo-700/80 font-medium tracking-wide">Favorable & Supportive</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 relative z-10">
            {data?.planetaryStrengths?.benefics?.map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-indigo-100 hover:border-indigo-200 transition-colors">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-indigo-50 shadow-inner">
                  <img src={getPlanetImage(p)} alt={p} className="w-full h-full object-cover" />
                </div>
                <span className="text-indigo-800 font-bold text-sm pr-1">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Malefics */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-50/80 to-white border border-rose-100 shadow-sm relative overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-200 opacity-20 rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-rose-100/50 flex items-center justify-center text-rose-600 shadow-sm border border-rose-50">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-rose-900">{reportContent?.planetaryStrengths?.maleficsTitle}</h3>
              <p className="text-[12px] text-rose-700/80 font-medium tracking-wide">Challenging & Karmic</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 relative z-10">
            {data?.planetaryStrengths?.malefics?.map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-rose-100 hover:border-rose-200 transition-colors">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-rose-50 shadow-inner">
                  <img src={getPlanetImage(p)} alt={p} className="w-full h-full object-cover" />
                </div>
                <span className="text-rose-800 font-bold text-sm pr-1">{p}</span>
              </div>
            ))}
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

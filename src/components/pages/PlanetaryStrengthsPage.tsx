import React from 'react';
import { useReport } from '../../context/ReportContext';
import { Award, Shield, AlertCircle } from 'lucide-react';
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
  const planetaryStrengths = data?.pages?.page9_yogakaraka?.planetaryStrengths || data?.planetaryStrengths;
  
  if (!data) return null;

  const yogakarakaObj = planetaryStrengths?.yogaKaraka || planetaryStrengths?.yogakaraka;
  const yogakarakaPlanets = Array.isArray(yogakarakaObj) ? yogakarakaObj : (yogakarakaObj?.planets || []);
  const yogakarakaContent = yogakarakaObj?.content;

  const beneficsObj = planetaryStrengths?.benefics;
  const beneficsPlanets = Array.isArray(beneficsObj) ? beneficsObj : (beneficsObj?.planets || []);
  const beneficsContent = beneficsObj?.content;

  const maleficsObj = planetaryStrengths?.malefics;
  const maleficsPlanets = Array.isArray(maleficsObj) ? maleficsObj : (maleficsObj?.planets || []);
  const maleficsContent = maleficsObj?.content;

  return (
    <div className="space-y-8 pb-6 font-sans">
      {/* Title Section */}
      <div className="text-center space-y-3 mt-4 px-2">
        <h2 className="text-2xl md:text-3xl font-semibold page-text tracking-tight leading-tight max-w-xl mx-auto">
          Planetary Shield Strengths
        </h2>
        <div className="w-16 h-1 bg-linear-to-r from-emerald-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      <p className="page-text text-[14px] leading-relaxed font-medium max-w-xl mx-auto px-4">
        The planets act as powerful cosmic forces within your birth chart, influencing your personality, relationships, career, and spiritual growth. Their strengths and weaknesses reveal both opportunities and areas for personal development.
      </p>

      <div className="space-y-6 pt-2">

        {/* Yogakaraka Planets */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-emerald-900/40 hover:dark:to-slate-800/40 transition-all duration-300 border border-emerald-100 shadow-soft relative overflow-hidden group hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200 opacity-20 rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-emerald-100/50 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-soft border border-emerald-50 dark:border-emerald-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-300">Yogakaraka Planets</h3>
              <p className="text-[12px] text-emerald-700/80 dark:text-emerald-400/90 font-medium tracking-wide">The Most Auspicious Planets</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 relative z-10">
            {yogakarakaPlanets.map((p: string, i: number) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full card-bg shadow-soft border border-emerald-100 dark:border-emerald-500/30 hover:border-emerald-200 transition-colors">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-emerald-50 shadow-inner">
                  <img src={getPlanetImage(p)} alt={p} className="w-full h-full object-cover" />
                </div>
                <span className="text-emerald-800 dark:text-emerald-300 font-bold text-sm pr-1">{p}</span>
              </div>
            ))}
          </div>
          {yogakarakaContent && (
            <p className="mt-4 text-[13.5px] text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed font-medium relative z-10">
              {yogakarakaContent}
            </p>
          )}
        </div>

        {/* Benefics */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-indigo-900/40 hover:dark:to-slate-800/40 transition-all duration-300 border border-indigo-100 dark:border-indigo-800/50 shadow-soft relative overflow-hidden group hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-200 opacity-20 rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-indigo-100/50 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-soft border border-indigo-50 dark:border-indigo-500/30">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300">Benefic Forces</h3>
              <p className="text-[12px] text-indigo-700/80 dark:text-indigo-400/90 font-medium tracking-wide">Favorable & Supportive</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 relative z-10">
            {beneficsPlanets.map((p: string, i: number) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full card-bg shadow-soft border border-indigo-100 dark:border-indigo-500/30 hover:border-indigo-200 transition-colors">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-indigo-50 shadow-inner">
                  <img src={getPlanetImage(p)} alt={p} className="w-full h-full object-cover" />
                </div>
                <span className="text-indigo-800 dark:text-indigo-300 font-bold text-sm pr-1">{p}</span>
              </div>
            ))}
          </div>
          {beneficsContent && (
            <p className="mt-4 text-[13.5px] text-indigo-800/80 dark:text-indigo-300/80 leading-relaxed font-medium relative z-10">
              {beneficsContent}
            </p>
          )}
        </div>

        {/* Malefics */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-50/80 to-white dark:from-slate-800/20 dark:to-transparent hover:dark:from-rose-900/40 hover:dark:to-slate-800/40 transition-all duration-300 border border-rose-100 dark:border-rose-800/50 shadow-soft relative overflow-hidden group hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-200 opacity-20 rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-rose-100/50 dark:bg-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400 shadow-soft border border-rose-50 dark:border-rose-500/30">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-rose-900 dark:text-rose-300">Malefic Challenges</h3>
              <p className="text-[12px] text-rose-700/80 dark:text-rose-400/90 font-medium tracking-wide">Challenging & Karmic</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 relative z-10">
            {maleficsPlanets.map((p: string, i: number) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full card-bg shadow-soft border border-rose-100 dark:border-rose-500/30 hover:border-rose-200 transition-colors">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-rose-50 shadow-inner">
                  <img src={getPlanetImage(p)} alt={p} className="w-full h-full object-cover" />
                </div>
                <span className="text-rose-800 dark:text-rose-300 font-bold text-sm pr-1">{p}</span>
              </div>
            ))}
          </div>
          {maleficsContent && (
            <p className="mt-4 text-[13.5px] text-rose-800/80 dark:text-rose-300/80 leading-relaxed font-medium relative z-10">
              {maleficsContent}
            </p>
          )}
        </div>

      </div>

      {/* Premium Insert Promo */}
      <div className="pt-4 px-1">
        {renderPromoBox(() => setPage(pageIdx + 1), 'planetary')}
      </div>
    </div>
  );
};

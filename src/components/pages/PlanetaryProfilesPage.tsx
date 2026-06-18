import React from 'react';
import { useReport } from '../../context/ReportContext';
import { PlanetPosition } from '../../types';
import { planetImages } from '../../data/planetImages';
import { Lightbulb } from 'lucide-react';

export const PlanetaryProfilesPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

  const planetKeys = ['sun', 'moon', 'mercury', 'jupiter', 'venus', 'mars', 'saturn', 'rahu', 'ketu'];

  // A mapping to get the correct image key. For keys like 'mercury', it maps to 'buddha'
  const imageKeyMap: Record<string, string> = {
    sun: 'surya', moon: 'moon', mercury: 'buddha', jupiter: 'guru', venus: 'sukra',
    mars: 'mars', saturn: 'sani', rahu: 'rahu', ketu: 'ketu'
  };

  return (
    <div className="space-y-8 pb-6">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          All Planetary Positions
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      <div className="px-2">
        <p className="text-slate-600 text-[14px] leading-relaxed font-medium text-center max-w-2xl mx-auto">
          A comprehensive view of all 9 planetary bodies in your Kundli and how they shape your life's path.
        </p>
      </div>

      <div className="space-y-6 pt-4 font-sans px-1">
        {planetKeys.map((key) => {
          const planet: PlanetPosition = data.planetaryStrengths.planets[key];
          if (!planet) return null;

          const imgKey = imageKeyMap[key] || 'surya';
          const imgSrc = planetImages[imgKey];

          return (
            <div key={key} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col gap-5 group hover:shadow-md transition-shadow">

              {/* Header: Image + Name */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-slate-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {imgSrc ? (
                    <img src={imgSrc} alt={planet.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl">🪐</span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {planet.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-widest text-indigo-500 font-semibold">
                    {key}
                  </span>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-0.5">Natal Sign</span>
                  <span className="font-semibold text-slate-800 text-[13px]">{planet.sign}</span>
                </div>
                <div className="p-3 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-0.5">Degree</span>
                  <span className="font-semibold text-slate-800 text-[13px] font-mono">{planet.degree}</span>
                </div>
                <div className="p-3 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-0.5">Nakshatra</span>
                  <span className="font-semibold text-slate-800 text-[13px]">{planet.nakshatra}</span>
                </div>
                <div className="p-3 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mb-0.5">House</span>
                  <span className="font-semibold text-slate-800 text-[13px]">{planet.house} House</span>
                </div>
              </div>

              {/* Description */}
              <div className="text-[13px] text-slate-600 leading-relaxed font-medium bg-indigo-50/30 p-4 rounded-2xl border border-indigo-100/50 italic">
                "{planet.description}"
              </div>

              {/* Remediation */}
              <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50 flex gap-3 items-start">
                <div className="mt-0.5 text-orange-500">
                  <Lightbulb size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase text-orange-700 tracking-wider block">
                    Corrective Jyotish Remediation
                  </span>
                  <p className="text-[13px] text-slate-700 leading-relaxed font-medium">
                    {planet.remediation}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

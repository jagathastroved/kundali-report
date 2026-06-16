import React from 'react';
import { useReport } from '../../context/ReportContext';
import { PlanetPosition } from '../../types';
import { renderPromoBox } from '../SharedElements';

export const PlanetaryProfilesPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

  const planetKeys = ['sun', 'moon', 'mercury', 'jupiter', 'venus', 'mars', 'saturn', 'rahu', 'ketu'];
  const emojis: Record<string, string> = {
    sun: '☀️', moon: '🌙', mercury: '☿️', jupiter: '♃', venus: '♀️',
    mars: '♂️', saturn: '♄', rahu: '☊', ketu: '☋'
  };

  return (
    <div className="space-y-10">
      <div className="space-y-1 border-b border-slate-200 pb-4">
        <span className="text-[10px] font-normal uppercase text-indigo-500 tracking-widest block">Planet Profiles</span>
        <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
          All Planetary Positions
        </h2>
        <p className="text-xs text-slate-500">
          A comprehensive view of all 9 planetary bodies in your Kundli.
        </p>
      </div>

      {planetKeys.map((key) => {
        const planet: PlanetPosition = data.planetaryStrengths.planets[key];
        if (!planet) return null;

        return (
          <div key={key} className="space-y-4 pb-6 border-b border-slate-100 last:border-0">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center">
              <span className="text-2xl mr-2.5 drop-shadow">{emojis[key] || '🪐'}</span>
              {planet.name}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1 text-center">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
                <span className="text-[10px] uppercase font-normal text-slate-400 tracking-wider block">Natal Sign</span>
                <span className="font-normal text-slate-800 text-sm">{planet.sign}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
                <span className="text-[10px] uppercase font-normal text-slate-400 tracking-wider block">Cusp Position</span>
                <span className="font-normal text-slate-800 text-xs font-mono">{planet.degree}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
                <span className="text-[10px] uppercase font-normal text-slate-400 tracking-wider block">Nakshatra</span>
                <span className="font-normal text-slate-800 text-xs">{planet.nakshatra}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50">
                <span className="text-[10px] uppercase font-normal text-slate-400 tracking-wider block">Occupied House</span>
                <span className="font-normal text-slate-800 text-sm">{planet.house} House</span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-normal p-4 bg-indigo-50/15 border border-indigo-200/30 rounded-xl italic">
              "{planet.description}"
            </p>

            <div className="p-4 bg-orange-50/30 rounded-xl space-y-1.5 border border-orange-100">
              <span className="text-[10px] font-normal uppercase text-orange-600 tracking-wider block">
                💡 Corrective Jyotish Remediation:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {planet.remediation}
              </p>
            </div>
          </div>
        );
      })}

      {renderPromoBox(() => setPage(pageIdx + 1), 'combo')}
    </div>
  );
};

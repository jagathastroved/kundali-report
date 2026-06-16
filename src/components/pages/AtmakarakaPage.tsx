import React, { useState } from 'react';
import { useReport } from '../../context/ReportContext';


export const AtmakarakaPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-900  tracking-tight">
          Atmakaraka Soul Focal
        </h2>
      </div>

      <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-600 text-center text-xs font-normal uppercase">
        🌞 Atmakaraka Planet: {data.spiritualProfile.atmakaraka.planetName}
      </div>

      <div className="p-5 bg-gradient-to-r from-orange-500/5 to-indigo-500/5 border border-indigo-50  space-y-2.5 rounded-2xl">
        <h4 className="font-semibold text-slate-900  text-sm">
          The Soul\'s Underlying Desire:
        </h4>
        <p className="text-xs text-slate-600  leading-relaxed font-normal">
          {data.spiritualProfile.atmakaraka.soulDesireText}
        </p>
      </div>

      <p className="text-xs text-slate-500  leading-relaxed italic">
        {data.spiritualProfile.atmakaraka.description}
      </p>
    </div>
  );
};

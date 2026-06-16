import React from 'react';
import { motion } from 'motion/react';
import { Lock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PAGE_TITLES = [
  'Namaste Welcome',
  'Birth Coordinates',
  'Your Birth Star',
  'Core Personality',
  'Your Big Three Signs',
  'Five Great Elements',
  'Elemental Balance',
  'Stored Karmic Path',
  'Your Chakras Map',
  'Dominant Chakra Insight',
  'Ayurvedic Dosha Profile',
  'Planetary Shield Strengths',
  'Planetary Profiles',
  'Favorable Ishta Devata',
  'Atmakaraka Soul Focal',
  'Kundli Lagna Chart',
  'Vimshottari Dasha Wheel',
  'Cosmic Future Forecasts',
  'Your Premium Deliverables'
];

export const PieChartComponent: React.FC<{ ratios: { name: string; percentage: number }[] }> = ({ ratios }) => {
  let accumulatedAngle = 0;
  const radius = 64;
  const cx = 80;
  const cy = 80;

  const total = ratios.reduce((sum, r) => sum + r.percentage, 0) || 100;

  const bgColors: { [key: string]: string } = {
    Ether: '#9333EA',
    Air: '#FEF08A',
    Water: '#3B82F6',
    Fire: '#EF4444',
    Earth: '#10B981',
  };

  const textColors: { [key: string]: string } = {
    Ether: 'text-purple-600',
    Air: 'text-yellow-700',
    Water: 'text-blue-600',
    Fire: 'text-red-700',
    Earth: 'text-green-600',
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-amber-500/[0.02] border border-[#EBE4D5]/60 p-5 rounded-3xl">
      <div className="relative w-40 h-40">
        <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
          {ratios.map((element, idx) => {
            const val = element.percentage;
            if (val <= 0) return null;

            const sliceAngle = (val / total) * 360;
            const startAngle = accumulatedAngle;
            const endAngle = accumulatedAngle + sliceAngle;
            accumulatedAngle += sliceAngle;

            const x1 = cx + radius * Math.cos((startAngle * Math.PI) / 180);
            const y1 = cy + radius * Math.sin((startAngle * Math.PI) / 180);
            const x2 = cx + radius * Math.cos((endAngle * Math.PI) / 180);
            const y2 = cy + radius * Math.sin((endAngle * Math.PI) / 180);

            const largeArcFlag = sliceAngle > 180 ? 1 : 0;
            const pathData = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
            const color = bgColors[element.name] || '#64748B';

            return (
              <motion.path
                key={idx}
                d={pathData}
                fill={color}
                stroke="#FAF7F0"
                strokeWidth="1.5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="hover:opacity-90 transition-opacity cursor-pointer"
              />
            );
          })}
          <circle cx="80" cy="80" r="32" fill="#FCFAF2" />
        </svg>
      </div>

      <div className="space-y-1.5 flex-1 min-w-[120px]">
        {ratios.map((element, idx) => {
          const color = bgColors[element.name] || '#64748B';
          return (
            <div key={idx} className="flex items-center text-xs font-normal text-slate-800">
              <span className="w-3.5 h-3.5 rounded-md mr-2.5 transition-colors" style={{ backgroundColor: color }} />
              <span className="min-w-[50px]">{element.name}:</span>
              <span className={`ml-2 font-mono font-normal ${textColors[element.name] || 'text-slate-500'}`}>{element.percentage}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const BookletMockup: React.FC = () => {
  return (
    <div className="relative group w-32 h-44 flex-shrink-0 perspective-[1000px] select-none pointer-events-none hidden sm:block">
      <div className="w-full h-full bg-gradient-to-br from-[#2D1B7C] via-[#4F46E5] to-[#7C3AED] rounded-r-2xl shadow-[12px_16px_28px_rgba(33,21,92,0.3)] relative overflow-hidden flex flex-col justify-between p-4.5 border-l-[6px] border-l-[#1E115E]/80">
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#F4742E]/15 rounded-full blur-xl" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#6868F9]/15 rounded-full blur-xl" />

        <div className="text-[7.5px] text-[#FDE5A9] font-normal uppercase tracking-widest text-center border-b border-white/10 pb-1.5 font-mono">
          AstroVed
        </div>

        <div className="my-auto text-center space-y-1 z-10">
          <div className="text-[10px] font-normal text-white leading-tight tracking-tight drop-shadow-md">
            Your Personalised
          </div>
          <div className="text-[12px] font-normal tracking-widest text-[#FCAE3B] uppercase bg-white/5 py-1 px-1.5 rounded border border-white/5 drop-shadow">
            Vedic Kundli
          </div>
          <div className="text-[6.5px] text-indigo-200 font-normal tracking-wider uppercase">
            Comprehensive Report
          </div>
        </div>

        <div className="flex justify-between items-end border-t border-white/10 pt-1.5">
          <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FCAE3B]" />
          </div>
          <div className="text-[5px] text-indigo-300 font-normal tracking-widest uppercase">
            Encrypted
          </div>
        </div>
      </div>
    </div>
  );
};

export const renderPromoBox = (onNext: () => void, variant: 'combo' | 'remedies' = 'combo') => {
  return (
    <div className="mt-8 bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden border border-indigo-500/20 shadow-2xl flex flex-col sm:flex-row items-center sm:items-stretch gap-6">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full filter blur-3xl pointer-events-none" />

      <BookletMockup />

      <div className="flex-1 space-y-4 relative z-10 flex flex-col justify-center text-center sm:text-left">
        <div>
          <div className="inline-flex items-center space-x-1.5 bg-orange-500/20 text-orange-300 px-2.5 py-1 rounded-lg text-[10px] font-normal uppercase tracking-widest border border-orange-500/20 mb-3">
            <Lock size={10} />
            <span>Premium Insight</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-semibold text-white leading-tight tracking-tight">
            {variant === 'combo' ? 'Unlock Personalized Full Kundali Report' : 'Get Complete Karmic Remedies & Rituals'}
          </h4>
          <p className="text-indigo-200 text-xs sm:text-sm font-normal mt-2 leading-relaxed max-w-md mx-auto sm:mx-0">
            {variant === 'combo'
              ? 'This summary is just 5% of your full profile. Discover precise timings, career peaks, and personalized gemstone recommendations.'
              : 'Discover exact mantras, poojas, and daily rituals scientifically designed to balance your dominant doshas and clear karmic blocks.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Link to="/report/premium-deliverables"
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3.5 rounded-xl font-normal text-sm tracking-wide transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center space-x-2"
          >
            <span>Upgrade Now</span>
            <CreditCard size={16} />
          </Link>
          <button
            onClick={onNext}
            className="text-xs font-normal text-indigo-300 hover:text-white transition-colors py-2"
          >
            Continue reading summary
          </button>
        </div>
      </div>
    </div>
  );
};

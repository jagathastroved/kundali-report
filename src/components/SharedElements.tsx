import React from 'react';
import { motion } from 'motion/react';
import { Globe2, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PAGE_TITLES = [
  'Welcome ',
  'Birth Star Analysis',
  'Core Personality',
  'Three Most Influential Signs',
  'Your Dominant Element',
  'Kundli Lagna Chart',
  'Why Get This Report?',
  'Karmic Chakra',
  'Planetary Strengths',
  'Planetary Profiles',
  'Atmakaraka Soul Focal',
  'Current Dasha Timeline',
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
    <div className="relative group w-32 h-44 flex-shrink-0 perspective-[1000px] select-none pointer-events-none hidden sm:block ml-2 mb-2">
      <div className="relative w-full h-full transition-transform duration-700 ease-out origin-left group-hover:[transform:rotateY(-20deg)_rotateX(5deg)] [transform-style:preserve-3d]">

        {/* Book Pages (Back layers) */}
        <div className="absolute top-[2px] bottom-[2px] right-[-4px] left-2 bg-[#fdfdfd] rounded-r-xl border border-slate-300 -z-10 [transform:translateZ(-1px)]" />
        <div className="absolute top-[4px] bottom-[4px] right-[-8px] left-2 bg-[#f4f4f4] rounded-r-xl border border-slate-300 -z-20 [transform:translateZ(-2px)]" />
        <div className="absolute top-[6px] bottom-[6px] right-[-11px] left-2 bg-[#ebebeb] rounded-r-xl border border-slate-300 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] -z-30 [transform:translateZ(-3px)]" />

        {/* Main Cover */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-purple-900 to-indigo-950 rounded-r-2xl rounded-l-sm overflow-hidden flex flex-col justify-between p-3 z-10 border-l-[8px] border-[#1f0a2a] shadow-inner [transform:translateZ(0)] ring-1 ring-[#D4AF37]/40 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-shadow duration-500">
          {/* Inner spine crease */}
          <div className="absolute top-0 bottom-0 left-0 w-3 bg-linear-to-r from-black/60 to-transparent z-0 pointer-events-none" />

          {/* Ambient spiritual orbs */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#D4AF37]/25 rounded-full blur-xl" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-rose-500/20 rounded-full blur-xl" />

          {/* Header */}
          <div className="border-b border-[#D4AF37]/20 pb-1.5 mb-2 mt-1 flex justify-center items-center z-10">
            <img
              src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg"
              alt="Astroved-logo"
              className="h-3 w-auto object-contain opacity-90 brightness-0 invert"
            />
          </div>

          {/* Content */}
          <div className="my-auto text-center flex flex-col items-center space-y-1 z-10">
            <div className="mb-2">
              <Globe2 className="w-8 h-8 text-[#D4AF37] drop-shadow-md" strokeWidth={1.5} />
            </div>
            <div className="text-[10px] font-normal text-white leading-tight tracking-tight drop-shadow-md">
              Your Personalised
            </div>
            <div className="text-[12px] font-bold tracking-widest text-[#D4AF37] uppercase bg-black/20 py-1 px-1.5 rounded border border-[#D4AF37]/30 drop-shadow">
              Kundli Report
            </div>
          </div>

          {/* Footer empty space */}
          <div className="border-t border-[#D4AF37]/20 pt-1.5 z-10 mt-2">
          </div>
        </div>
      </div>
    </div>
  );
};

export const renderPromoBox = (onNext: () => void, variant: 'combo' | 'remedies' | 'element' | 'planetary' = 'combo') => {
  return (
    <div className="mt-8 bg-gradient-to-br from-rose-950 via-indigo-950 to-purple-950 rounded-[2rem] p-6 sm:p-8 text-white relative overflow-hidden border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(225,29,72,0.15)] flex flex-col sm:flex-row items-center gap-8 group">
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/20 rounded-full filter blur-3xl pointer-events-none group-hover:bg-rose-500/30 transition-all duration-700" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full filter blur-3xl pointer-events-none group-hover:bg-indigo-500/30 transition-all duration-700" />

      {/* Animated Floating Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Star className="absolute top-6 left-1/4 w-4 h-4 text-[#D4AF37]/60 animate-pulse" />
        <Star className="absolute bottom-10 right-1/4 w-6 h-6 text-[#FCAE3B]/40 animate-[spin_4s_linear_infinite]" />
        <Sparkles className="absolute top-12 right-12 w-5 h-5 text-rose-300/50 animate-bounce" />
      </div>

      <BookletMockup />

      <div className="flex-1 space-y-5 relative z-10 flex flex-col justify-center text-center sm:text-left">
        <div>
          <div className="inline-flex items-center space-x-1.5 bg-[#D4AF37]/20 text-[#F3E5AB] px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/50 mb-4 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Sparkles size={12} className="text-[#FCAE3B]" />
            <span>Get Your Premium Kundali Report</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight tracking-tight drop-shadow-sm">
            {variant === 'combo' ? 'Unlock Personalized Full Kundali Report'
              : variant === 'element' ? 'Unlock Your Complete Astrological Destiny'
                : variant === 'planetary' ? 'Unlock Your Premium Kundali Report'
                  : 'Get Complete Karmic Remedies & Rituals'}
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm font-normal mt-2.5 leading-relaxed max-w-md sm:mx-0 mx-auto">
            {variant === 'combo'
              ? 'This summary is just 5% of your full profile. Discover precise timings, career peaks, and personalized gemstone recommendations.'
              : variant === 'element'
                ? 'Your Dominant Element reveals so much about you, but it\'s only the beginning! Buy the full premium report to unlock crucial insights into your future, wealth, health, and much more important cosmic secrets.'
                : variant === 'planetary'
                  ? 'Your planetary shield strengths reveal key cosmic forces, but it\'s only the beginning! Buy the full premium report to unlock deep insights into your destiny, wealth, and life paths.'
                  : 'Discover exact mantras, poojas, and daily rituals scientifically designed to balance your dominant doshas and clear karmic blocks.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 pt-2">
          {/* Primary Action - Buy Now */}
          <Link to="/report/report-features"
            className="w-full sm:w-auto bg-linear-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:from-[#C5A028] hover:to-[#E4D69C] text-black px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
          >
            <span>Book Your Kundali Report Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

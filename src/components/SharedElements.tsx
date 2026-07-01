import React from 'react';
import { motion } from 'motion/react';
import { Globe2, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import bookImage from '../assets/Kundali_Report_book.png';

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
    Ether: 'text-purple-600 dark:text-purple-400',
    Air: 'text-yellow-600 dark:text-yellow-400',
    Water: 'text-blue-600 dark:text-blue-400',
    Fire: 'text-red-600 dark:text-red-400',
    Earth: 'text-green-600 dark:text-green-400',
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-800/40 dark:to-slate-900/40 hover:dark:from-slate-800/60 hover:dark:to-slate-900/60 border border-light p-6 sm:p-8 rounded-[2rem] shadow-soft hover:shadow-lg transition-all duration-300">
      <div className="relative w-40 h-40 drop-shadow-md">
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
                stroke="currentColor"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="hover:opacity-80 transition-opacity cursor-pointer text-slate-50 dark:text-slate-900"
              />
            );
          })}
          <circle cx="80" cy="80" r="28" className="fill-slate-50 dark:fill-slate-900/90" />
        </svg>
      </div>

      <div className="space-y-2.5 flex-1 min-w-[140px] bg-white/50 dark:bg-slate-800/30 p-4 rounded-2xl border border-light">
        {ratios.map((element, idx) => {
          const color = bgColors[element.name] || '#64748B';
          return (
            <div key={idx} className="flex items-center text-[13px] font-medium page-text group">
              <span className="w-3.5 h-3.5 rounded-full mr-3 shadow-sm transition-transform group-hover:scale-110" style={{ backgroundColor: color }} />
              <span className="min-w-[55px] tracking-wide">{element.name}:</span>
              <span className={`ml-2 font-bold ${textColors[element.name] || 'text-slate-500'}`}>{element.percentage}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const BookletMockup: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-32 sm:w-40 relative flex justify-center items-center sm:ml-2 sm:mb-2">
      <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-glow-zoom" />
      <img
        src={bookImage}
        alt="Premium Kundali Report"
        className="w-full h-auto object-contain drop-shadow-2xl relative z-10 animate-book-zoom"
      />
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

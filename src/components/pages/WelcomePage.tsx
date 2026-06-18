import React from 'react';
import { useReport } from '../../context/ReportContext';
import { reportContent } from '../../data/reportContent';
import { Star, Compass, Sparkles, Globe2, Clock, RefreshCw } from 'lucide-react';
export const WelcomePage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = () => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-10 pb-6 text-center font-sans mt-4">


      {/* Title Section */}
      <div className="space-y-4 relative">

        <h2 className="text-[14px] md:text-base font-bold text-slate-800 tracking-[0.2em] uppercase">
          {reportContent?.welcome?.title} {data?.birthDetails?.name}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-indigo-500 mx-auto rounded-full mt-2" />
      </div>

      {/* User Name Pill */}
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm mt-4">
        <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
        <span className="text-slate-800 font-bold text-sm">
          Prepared exclusively for <span className="text-indigo-600">{data?.birthDetails?.name}</span>
        </span>
      </div>

      {/* Introductory Text */}
      <p className="text-slate-600 text-[14.5px] max-w-lg mx-auto leading-relaxed font-medium">
        {reportContent?.welcome?.introText}
      </p>

      <div className="pt-8 w-full max-w-3xl mx-auto">
        <h3 className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-8 text-center">
          Inside Your Report
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 text-left">
          {[
            { title: "Personalized Kundali Chart", desc: "Access your detailed birth chart based on precise birth details.", icon: <Star size={16} /> },
            { title: "Core Personality", desc: "Reveal your strengths, challenges, talents, and true life potential.", icon: <Sparkles size={16} /> },
            { title: "Dasha Timeline", desc: "Understand current and future planetary periods shaping your journey.", icon: <Clock size={16} /> },
            { title: "Karmic Chakra Analysis", desc: "Uncover karmic patterns and the spiritual lessons guiding your growth.", icon: <RefreshCw size={16} /> },
            { title: "Planetary Profiles", desc: "Gain insights into how each planet influences different areas of life.", icon: <Globe2 size={16} /> },
            { title: "Influential Signs", desc: "Learn how key zodiac signs affect your personality and life path.", icon: <Compass size={16} /> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 flex-shrink-0 mt-0.5 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                {item?.icon}
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-slate-800">{item?.title}</h4>
                <p className="text-[13px] text-slate-500 mt-1 leading-relaxed">{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

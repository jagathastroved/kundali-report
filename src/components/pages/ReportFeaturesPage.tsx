import React from 'react';
import { Star, ArrowRight, BookOpen, Compass, ShieldCheck, PieChart, Sparkles, TrendingUp } from 'lucide-react';
import { BookletMockup } from '../SharedElements';
import { useNavigate } from 'react-router-dom';
import { reportContent } from '../../data/reportContent';

export const ReportFeaturesPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = () => {
  const navigate = useNavigate();
  
  // Helper to attach icons based on the index to our dynamic content
  const iconList = [BookOpen, Compass, ShieldCheck, PieChart, Sparkles, TrendingUp];
  const styleList = [
    { gradient: 'from-amber-50 to-orange-50 dark:from-slate-800/20 dark:to-transparent hover:dark:from-orange-900/40 hover:dark:to-slate-800/40', iconColor: 'text-orange-500', iconBg: 'bg-orange-100 dark:bg-orange-900/30', borderColor: 'border-orange-200 dark:border-slate-700/60' },
    { gradient: 'from-emerald-50 to-teal-50 dark:from-slate-800/20 dark:to-transparent hover:dark:from-teal-900/40 hover:dark:to-slate-800/40', iconColor: 'text-teal-600', iconBg: 'bg-teal-100 dark:bg-teal-900/30', borderColor: 'border-teal-200 dark:border-slate-700/60' },
    { gradient: 'from-blue-50 to-indigo-50 dark:from-slate-800/20 dark:to-transparent hover:dark:from-indigo-900/40 hover:dark:to-slate-800/40', iconColor: 'text-indigo-500', iconBg: 'bg-indigo-100 dark:bg-indigo-900/30', borderColor: 'border-indigo-200 dark:border-slate-700/60' },
    { gradient: 'from-purple-50 to-fuchsia-50 dark:from-slate-800/20 dark:to-transparent hover:dark:from-fuchsia-900/40 hover:dark:to-slate-800/40', iconColor: 'text-fuchsia-600', iconBg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30', borderColor: 'border-fuchsia-200 dark:border-slate-700/60' },
    { gradient: 'from-pink-50 to-rose-50 dark:from-slate-800/20 dark:to-transparent hover:dark:from-rose-900/40 hover:dark:to-slate-800/40', iconColor: 'text-rose-500', iconBg: 'bg-rose-100 dark:bg-rose-900/30', borderColor: 'border-rose-200 dark:border-slate-700/60' },
    { gradient: 'from-yellow-50 to-amber-50 dark:from-slate-800/20 dark:to-transparent hover:dark:from-amber-900/40 hover:dark:to-slate-800/40', iconColor: 'text-amber-600', iconBg: 'bg-amber-100 dark:bg-amber-900/30', borderColor: 'border-amber-200 dark:border-slate-700/60' }
  ];

  const features = reportContent?.reportFeatures?.features?.map((feat, idx) => ({
    ...feat,
    ...styleList[idx],
    Icon: iconList[idx]
  }));

  return (
    <div className="space-y-10 pb-10">
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-slate-900 to-indigo-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 card-bg/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex-1 space-y-4 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full card-bg/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-orange-300">
            {reportContent?.reportFeatures?.premiumInsight}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight drop-shadow-soft">
            {reportContent?.reportFeatures?.heroTitle}
          </h2>
          <p className="text-sm sm:text-base text-indigo-100 leading-relaxed max-w-lg">
            {reportContent?.reportFeatures?.heroDesc}
          </p>
        </div>
        <div className="flex-shrink-0 scale-100 sm:scale-110 relative z-10 transform sm:origin-right flex justify-center w-full sm:w-auto mb-6 sm:mb-0 sm:mt-0 order-first sm:order-last">
          <BookletMockup />
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold page-text tracking-tight">{reportContent?.reportFeatures?.whatYouGet}</h3>
          <p className="text-sm text-muted font-medium">{reportContent?.reportFeatures?.discoverChapters}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
          {features.map((feature, idx) => {
            const { Icon } = feature;
            return (
              <div 
                key={idx} 
                className={`flex flex-col p-6 rounded-3xl bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} shadow-soft hover:shadow-soft transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h4 className="text-[16px] font-bold page-text mb-2 tracking-tight group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">{feature.title}</h4>
                <p className="text-[13.5px] page-text leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card-bg-secondary border border-default rounded-3xl p-6 sm:p-8 shadow-soft space-y-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-soft">
              <img src="https://i.pravatar.cc/150?u=dhaval" alt="Dhaval Motghare" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold page-text text-lg">{reportContent?.reportFeatures?.reviewName}</h4>
              <p className="text-xs text-muted font-medium uppercase tracking-wider">{reportContent?.reportFeatures?.reviewRole}</p>
            </div>
          </div>
          <div className="flex space-x-1 card-bg px-3 py-1.5 rounded-full shadow-soft border border-light">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-[#FCAE3B] fill-[#FCAE3B]" />)}
          </div>
        </div>
        <p className="text-sm sm:text-[15px] page-text leading-relaxed font-medium italic relative z-10">
          {reportContent?.reportFeatures?.reviewText}
        </p>
      </div>

      <div className="pt-4">
        <button
          onClick={() => navigate('/report/premium-deliverables')}
          className="w-full relative group overflow-hidden bg-slate-900 text-white font-bold text-lg py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 active:scale-95"
        >
          {/* Animated gradient background for button */}
          <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-rose-500 to-indigo-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
          
          <span className="relative z-10 tracking-wide">{reportContent?.reportFeatures?.ctaText}</span>
          <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
};

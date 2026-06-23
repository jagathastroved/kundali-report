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
    { gradient: 'from-amber-50 to-orange-50', iconColor: 'text-orange-500', iconBg: 'bg-orange-100', borderColor: 'border-orange-200' },
    { gradient: 'from-emerald-50 to-teal-50', iconColor: 'text-teal-600', iconBg: 'bg-teal-100', borderColor: 'border-teal-200' },
    { gradient: 'from-blue-50 to-indigo-50', iconColor: 'text-indigo-500', iconBg: 'bg-indigo-100', borderColor: 'border-indigo-200' },
    { gradient: 'from-purple-50 to-fuchsia-50', iconColor: 'text-fuchsia-600', iconBg: 'bg-fuchsia-100', borderColor: 'border-fuchsia-200' },
    { gradient: 'from-pink-50 to-rose-50', iconColor: 'text-rose-500', iconBg: 'bg-rose-100', borderColor: 'border-rose-200' },
    { gradient: 'from-yellow-50 to-amber-50', iconColor: 'text-amber-600', iconBg: 'bg-amber-100', borderColor: 'border-amber-200' }
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
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex-1 space-y-4 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-orange-300">
            {reportContent?.reportFeatures?.premiumInsight}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight drop-shadow-md">
            {reportContent?.reportFeatures?.heroTitle}
          </h2>
          <p className="text-sm sm:text-base text-indigo-100 leading-relaxed max-w-lg">
            {reportContent?.reportFeatures?.heroDesc}
          </p>
        </div>
        <div className="hidden sm:block flex-shrink-0 scale-90 sm:scale-110 relative z-10 transform origin-right">
          <BookletMockup />
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{reportContent?.reportFeatures?.whatYouGet}</h3>
          <p className="text-sm text-slate-500 font-medium">{reportContent?.reportFeatures?.discoverChapters}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
          {features.map((feature, idx) => {
            const { Icon } = feature;
            return (
              <div 
                key={idx} 
                className={`flex flex-col p-6 rounded-3xl bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h4 className="text-[16px] font-bold text-slate-900 mb-2 tracking-tight group-hover:text-indigo-900 transition-colors">{feature.title}</h4>
                <p className="text-[13.5px] text-slate-700 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
              <img src="https://i.pravatar.cc/150?u=dhaval" alt="Dhaval Motghare" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">{reportContent?.reportFeatures?.reviewName}</h4>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{reportContent?.reportFeatures?.reviewRole}</p>
            </div>
          </div>
          <div className="flex space-x-1 bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-[#FCAE3B] fill-[#FCAE3B]" />)}
          </div>
        </div>
        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-medium italic relative z-10">
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

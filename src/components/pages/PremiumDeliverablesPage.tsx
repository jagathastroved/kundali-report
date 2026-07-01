import React, { useState } from 'react';
import { useReport } from '../../context/ReportContext';
import { Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import bookImage from '../../assets/Kundali_Report_book.png';
import { reportContent } from '../../data/reportContent';

export const PremiumDeliverablesPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = () => {
  const { birthDetails } = useReport();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleBookNow = () => {
    setIsProcessing(true);
    // Button stays in processing state for exactly 5 seconds, then resets
    setTimeout(() => {
      setIsProcessing(false);
    }, 5000);
  };

  const name = birthDetails?.name || 'You';
  const featureItems = reportContent?.premiumDeliverables?.features || [];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12 font-sans px-2 sm:px-0">

      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/30 shadow-[0_20px_50px_rgba(30,27,75,0.4)] p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 sm:gap-12 group">

        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Book Image */}
        <div className="flex-shrink-0 w-56 sm:w-64 relative flex justify-center items-center order-first sm:order-last z-10 pt-4 sm:pt-0">
          <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full animate-glow-zoom" />
          <img
            src={bookImage}
            alt="Premium Kundali Report"
            className="w-full h-auto object-contain drop-shadow-2xl relative z-10 animate-book-zoom"
          />
        </div>

        {/* Hero Content */}
        <div className="flex-1 text-center sm:text-left space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <Sparkles size={12} className="text-amber-400" />
            <span>Premium Report Ready</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
            Unlock Your Complete <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
              Kundali Report
            </span>
          </h2>

          <p className="text-[14px] sm:text-base text-indigo-200/90 leading-relaxed font-medium max-w-md mx-auto sm:mx-0">
            {name[0].toUpperCase() + name.slice(1).toLowerCase()}, we have successfully analyzed your birth data and compiled your comprehensive life guide. Everything you need to understand your life's purpose is waiting for you.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-6 pt-4 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
          <div className="w-8 h-[2px] bg-amber-500 rounded-full" />
          <h3 className="text-sm font-bold page-text uppercase tracking-widest">
            What's Inside Your Report
          </h3>
          <div className="w-8 h-[2px] bg-amber-500 rounded-full sm:hidden" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featureItems?.map((item: any, idx: number) => (
            <div key={idx} className="group card-bg rounded-3xl p-6 border border-light shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex gap-4 items-start">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-10 -mt-10 pointer-events-none" />

              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-50/80 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300 shadow-soft border border-indigo-100/50">
                <CheckCircle2 size={22} className="fill-indigo-100/50" />
              </div>

              <div className="flex-1 space-y-1.5 relative z-10">
                <h4 className="text-[15px] font-bold page-text leading-tight group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors tracking-tight">{item?.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed font-medium">{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pricing & Action Section */}
      <div className="pt-8 space-y-4 max-w-2xl mx-auto">
        {/* Pricing Box */}
        <div className="bg-[#EFFFF6] border border-[#C6F1D6] rounded-xl p-4 flex flex-row justify-between items-center gap-2">
          <div className="flex-1">
            <p className="text-[9px] font-bold text-[#2E8B57] uppercase tracking-widest mb-0.5">TOTAL ORDER PRICE</p>
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-lg text-[#8FBC8F] font-bold line-through">₹2499</span>
              <span className="text-2xl sm:text-3xl font-black text-[#006400] tracking-tight">₹899</span>
            </div>
          </div>
          <div className="bg-[#00C950] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-soft whitespace-nowrap flex-shrink-0 text-center">
            SAVE 64% TODAY
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleBookNow}
          disabled={isProcessing}
          className="w-full bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold text-[16px] py-4 px-6 rounded-xl shadow-[0_4px_14px_rgba(255,140,0,0.3)] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-80 disabled:cursor-wait disabled:scale-100 flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Processing Secure Payment...
            </>
          ) : (
            <>
              Proceed to Pay ₹899
            </>
          )}
        </button>
      </div>

    </div>
  );
};

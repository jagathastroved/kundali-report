import React, { useState } from 'react';
import { useReport } from '../../context/ReportContext';
import { Loader2, Sparkle } from 'lucide-react';
import { BookletMockup } from '../SharedElements';
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

  const featureItems = reportContent?.premiumDeliverables?.features;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-10 font-sans">

      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-[28px] font-bold text-[#2A2B5F] tracking-tight leading-tight">
          Unlock Your Complete Personalized Kundali Report
        </h2>
      </div>

      {/* Top Hero Card */}
      <div className="bg-gradient-to-br from-[#F8F9FF] to-[#F1F3FF] border border-[#E2E6FF] rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm">
        {/* Book Image */}
        <div className="flex-shrink-0 w-32 h-44 relative flex justify-center items-center">
          <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full" />
          <div className="scale-90 origin-top">
            <BookletMockup />
          </div>
        </div>

        {/* Card Content */}
        <div className="flex-1 text-center sm:text-left space-y-3 pt-2">
          <span className="inline-block bg-[#FFF4D2] text-[#B8860B] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#FFE8A1]">
            PREMIUM REPORT PREPARED
          </span>
          <h3 className="text-lg font-bold text-[#2A2B5F]">
            Kundali Report For {name}
          </h3>
          <p className="text-[12px] text-[#6B7290] leading-relaxed font-medium">
            We have successfully analyzed your birth data and compiled your report. Everything you need to understand your life's purpose and make lucky choices is waiting for you.
          </p>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="pt-2">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-[3px] h-4 bg-[#FF8C00] rounded-full" />
          <h3 className="text-[11px] font-bold text-[#2A2B5F] uppercase tracking-wider">
            WHAT'S INCLUDED IN YOUR REPORT
          </h3>
        </div>

        {/* Grid of Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {featureItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#EAEFFF] rounded-xl p-4 flex gap-3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-[#D1D9FF] hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F0F2FF] flex items-center justify-center text-[#6868F9]">
                <Sparkle size={12} className="fill-current" />
              </div>
              <div className="flex-1">
                <h4 className="text-[13px] font-bold text-[#2A2B5F] mb-1 leading-tight">{item?.title}</h4>
                <p className="text-[11px] text-[#6B7290] leading-snug">{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pricing & Action Section */}
      <div className="pt-4 space-y-3">
        {/* Pricing Box */}
        <div className="bg-[#EFFFF6] border border-[#C6F1D6] rounded-xl p-4 flex justify-between items-center">
          <div>
            <p className="text-[9px] font-bold text-[#2E8B57] uppercase tracking-widest mb-0.5">TOTAL ORDER PRICE</p>
            <div className="flex items-baseline gap-2">
              <span className="text-lg text-[#8FBC8F] font-bold line-through">₹2499</span>
              <span className="text-2xl font-black text-[#006400] tracking-tight">₹899</span>
            </div>
          </div>
          <div className="bg-[#00C950] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
            SAVE 64% TODAY
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleBookNow}
          disabled={isProcessing}
          className="w-full bg-[#FF8C00] hover:bg-[#E67E00] text-white font-bold text-[15px] py-4 px-6 rounded-xl shadow-[0_4px_14px_rgba(255,140,0,0.3)] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-80 disabled:cursor-wait disabled:scale-100 flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <Loader2 size={18} className="animate-spin" />
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

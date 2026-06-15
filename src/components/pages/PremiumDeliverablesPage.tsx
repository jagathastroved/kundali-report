import React from 'react';
import { useReport } from '../../context/ReportContext';
import { Shield, Award, Sparkles, Download, Printer } from 'lucide-react';
import { BookletMockup } from '../SharedElements';

export const PremiumDeliverablesPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

  return (
    <div className="space-y-6 flex flex-col items-center text-center">
      <div className="space-y-1">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Your Premium Deliverables
        </h2>
        <p className="text-xs text-slate-500">
          Unlock your complete 150+ page customized Jyotish report and gemstone recommendations.
        </p>
      </div>

      <div className="my-6">
        <BookletMockup />
      </div>

      <div className="p-6 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl w-full text-left space-y-4 shadow-xl border border-indigo-500/20">
        <div className="flex items-center space-x-2 text-indigo-300 font-bold mb-2">
          <Award size={20} />
          <span>What's included in Premium</span>
        </div>
        <ul className="space-y-3 text-sm text-indigo-100 font-semibold">
          <li className="flex items-start">
            <Sparkles size={16} className="text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
            <span>Complete Planetary Breakdown and comprehensive Dasha timelines.</span>
          </li>
          <li className="flex items-start">
            <Sparkles size={16} className="text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
            <span>Personalized gemstone weight and wearing instructions.</span>
          </li>
          <li className="flex items-start">
            <Sparkles size={16} className="text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
            <span>Remedial Poojas and exact mantras for dosha pacification.</span>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-indigo-500/20">
          <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-4 py-3 rounded-xl font-black text-sm tracking-wide transition-all shadow-lg flex items-center justify-center space-x-2">
            <Download size={16} />
            <span>Download Full PDF</span>
          </button>
          <button className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl font-black text-sm tracking-wide transition-all flex items-center justify-center space-x-2 border border-white/10">
            <Printer size={16} />
            <span>Order Printed Copy</span>
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-2 text-xs font-bold text-slate-400">
        <Shield size={14} className="text-green-500" />
        <span>Secure 256-bit Encrypted Checkout</span>
      </div>
    </div>
  );
};

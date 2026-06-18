import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';
import { elementImages } from '../../data/elementImages';

export const FiveGreatElementsPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  if (!data) return null;

  return (
    <div className="space-y-8 pb-6">

      {/* Title Section */}
      <div className="text-center space-y-3 mt-4">

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-tight max-w-xl mx-auto">
          Can you see how your qualities are connected to the blessings of nature?
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-indigo-500 mx-auto rounded-full mt-4" />
      </div>

      <p className="text-slate-600 text-[14px] leading-relaxed font-medium text-center max-w-2xl mx-auto px-2">
        The universe is said to be made up of five things: fire, earth, air, water, and ether. In Vedic tradition, these Panchamahabhuta elements rule over your energetic frequency and behavior. {data.elementAnalysis.description}
      </p>

      {/* Five elements beautifully colored cards list */}
      <div className="space-y-4 font-sans px-1 pt-2">
        {/* Fire Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-gradient-to-r from-red-50/80 to-white border border-red-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.fire} alt="Fire" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-red-900 text-base mb-1">Fire Element (Agni)</h4>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">Primal energy, focus, enthusiasm, and spiritual courage.</p>
          </div>
        </div>

        {/* Earth Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-gradient-to-r from-green-50/80 to-white border border-green-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.earth} alt="Earth" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-green-900 text-base mb-1">Earth Element (Prithvi)</h4>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">Practical structures, patient foundations, stability, and dependability.</p>
          </div>
        </div>

        {/* Air Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-gradient-to-r from-amber-50/80 to-white border border-amber-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.air} alt="Air" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-[#A16207] text-base mb-1">Air Element (Vayu)</h4>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">Intellectual agility, speech, conceptual logic, and communication.</p>
          </div>
        </div>

        {/* Water Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-gradient-to-r from-blue-50/80 to-white border border-blue-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.water} alt="Water" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 text-base mb-1">Water Element (Jala)</h4>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">Deep intuitive fields, empathy, creative flow state, and memory.</p>
          </div>
        </div>

        {/* Ether Element */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-3xl bg-gradient-to-r from-purple-50/80 to-white border border-purple-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-purple-200 flex items-center justify-center shadow-inner border border-white overflow-hidden p-2 group-hover:scale-105 transition-transform duration-300">
            <img src={elementImages.ether} alt="Ether" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="font-bold text-purple-900 text-base mb-1">Ether Element (Akasha)</h4>
            <p className="text-[13px] text-slate-600 font-medium leading-relaxed">Universal spaciousness, higher wisdom, spiritual portals, and truth alignment.</p>
          </div>
        </div>
      </div>

      {/* --- INSERTED FROM ELEMENTAL BALANCE PAGE --- */}
      <div className="pt-8 mt-8 border-t border-slate-100">

        <div className="text-center space-y-2 mb-8">
          <p className="text-[12px] text-slate-500 font-medium uppercase tracking-widest">Yogi Metrology</p>
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight leading-tight">
            Dominant Element Assessment
          </h2>
        </div>

        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#FEF6E4] to-white border-l-4 border-l-[#FE7950] border border-[#FDE5A9] shadow-md mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transform transition-transform hover:scale-[1.01]">
          <div>
            <span className="text-[11px] font-bold text-amber-800/60 uppercase tracking-widest block mb-1">Your Dominant Elements</span>
            <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FE7950] to-orange-500">
              {data.elementAnalysis.dominant || 'Ether and Air'}
            </span>
          </div>
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-orange-100 flex-shrink-0 text-orange-400">
            <Sparkles className="w-7 h-7" />
          </div>
        </div>

        <div className="py-4 bg-slate-50/50 rounded-3xl border border-slate-100 mb-8 p-4">
          <PieChartComponent ratios={data.elementAnalysis.ratios} />
        </div>

        <div className="space-y-5">
          {data.elementAnalysis.ratios.slice(0, 2).map((element, idx) => {
            const ElementIcon = idx === 0 ? Star : Sparkles;

            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                {/* Subtle background glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40 ${idx === 0 ? 'bg-orange-400' : 'bg-blue-400'}`} />

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-3 mb-3 relative z-10 gap-2">
                  <span className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center">
                    <ElementIcon className={`w-5 h-5 mr-2 ${idx === 0 ? 'text-orange-500' : 'text-blue-500'}`} />
                    {element.name} Dominance
                  </span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-mono shadow-inner">
                    Ratio {element.percentage}%
                  </span>
                </div>
                <p className="text-[14px] text-slate-700 leading-relaxed font-medium relative z-10 pl-1">
                  As per your precise Vedic sidereal coordinates, you are highly <span className="font-bold text-slate-900">{element.name.toLowerCase()}</span> element dominated. This signifies that you {element.description.toLowerCase()}
                </p>
              </div>
            );
          })}
        </div>
      {/* Premium Insert Promo */}
      <div className="pt-6">
        {renderPromoBox(() => setPage(pageIdx + 1), 'element')}
      </div>
      </div>
    </div>
  );
};

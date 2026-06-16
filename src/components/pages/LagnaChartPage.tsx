import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const LagnaChartPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  const [chartType, setChartType] = useState<'south' | 'north'>('south');
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-900  tracking-tight">
              Your Lagna Kundli Chart
            </h2>
          </div>

          {/* Review birth details summary indicators inside booklet */}
          <div className="p-3 bg-indigo-50/30  rounded-2xl flex justify-between items-center text-xs font-normal border border-indigo-50">
            <div className="space-y-0.5 text-slate-600 ">
              <div>Birth: <span className="text-indigo-700 ">{data.birthDetails.name}</span> ({data.birthDetails.gender})</div>
              <div className="text-[11px] text-slate-400">Time: {data.birthDetails.day}/{data.birthDetails.month}/{data.birthDetails.year} {data.birthDetails.hour}:{data.birthDetails.minute}</div>
            </div>

            {/* Select Chart Style togglers */}
            <div className="flex bg-slate-200/50  p-1 rounded-xl">
              <button
                onClick={() => setChartType('north')}
                className={`px-3 py-1 rounded-lg text-[10px] font-normal transition-all ${chartType === 'north' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500'
                  }`}
              >
                NORTH
              </button>
              <button
                onClick={() => setChartType('south')}
                className={`px-3 py-1 rounded-lg text-[10px] font-normal transition-all ${chartType === 'south' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500'
                  }`}
              >
                SOUTH
              </button>
            </div>
          </div>

          {/* Interactive Graphic Kundli Chart Wrapper */}
          <div className="flex justify-center py-2 h-[320px] items-center">
            {chartType === 'north' ? (
              // High Fidelity North Indian Diamond Chart SVG representation
              <svg width="280" height="280" viewBox="0 0 300 300" className="text-slate-800 ">
                {/* Background Box */}
                <rect x="0" y="0" width="300" height="300" fill="none" stroke="currentColor" strokeWidth="2.5" />
                {/* Major Diagonals */}
                <line x1="0" y1="0" x2="300" y2="300" stroke="currentColor" strokeWidth="1.5" />
                <line x1="300" y1="0" x2="0" y2="300" stroke="currentColor" strokeWidth="1.5" />
                {/* Inner Diamonds lines */}
                <line x1="150" y1="0" x2="0" y2="150" stroke="currentColor" strokeWidth="1.5" />
                <line x1="150" y1="0" x2="300" y2="150" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="150" x2="150" y2="300" stroke="currentColor" strokeWidth="1.5" />
                <line x1="300" y1="150" x2="150" y2="300" stroke="currentColor" strokeWidth="1.5" />

                {/* Displaying house sign numbers with specific coordinate spacing */}
                {/* House 1: Lagna (Taurus-2) */}
                <text x="145" y="115" className="fill-indigo-600  font-normal text-xs">2</text>
                <text x="135" y="95" className="fill-orange-500 font-normal text-[9px] uppercase">Lagna (Asc)</text>

                {/* House 2: Gemini-3 */}
                <text x="95" y="65" className="fill-slate-400 font-normal text-xs">3</text>

                {/* House 3: Cancer-4 Rahu */}
                <text x="35" y="65" className="fill-slate-405 text-slate-400 font-normal text-xs">4</text>
                <text x="30" y="85" className="fill-rose-500 font-normal text-[9px]">Ra</text>

                {/* House 4: Leo-5 */}
                <text x="65" y="145" className="fill-slate-405 text-slate-400 font-normal text-xs">5</text>

                {/* House 5: Virgo-6 */}
                <text x="35" y="225" className="fill-slate-405 text-slate-400 font-normal text-xs">6</text>

                {/* House 6: Libra-7 */}
                <text x="95" y="245" className="fill-slate-405 text-slate-400 font-normal text-xs">7</text>

                {/* House 7: Scorpio-8 */}
                <text x="145" y="195" className="fill-slate-405 text-slate-400 font-normal text-xs">8</text>

                {/* House 8: Sag-9 */}
                <text x="195" y="245" className="fill-slate-405 text-slate-400 font-normal text-xs">9</text>

                {/* House 9: Cap-10 Moon, Venus, Ketu */}
                <text x="255" y="225" className="fill-slate-500 text-slate-500 text-slate-400 font-normal text-xs">10</text>
                <text x="235" y="195" className="fill-blue-500 font-normal text-[9px]">Mo Ve Ke</text>

                {/* House 10: Aqu-11  Sun, Mercury */}
                <text x="225" y="145" className="fill-slate-500 text-slate-500 text-slate-400 font-normal text-xs">11</text>
                <text x="225" y="125" className="fill-orange-500 font-normal text-[9px]">Su Me</text>

                {/* House 11: Pisces-12 Mars */}
                <text x="255" y="65" className="fill-slate-500 text-slate-500 text-slate-400 font-normal text-xs">12</text>
                <text x="235" y="85" className="fill-red-500 font-normal text-[9px]">Ma</text>

                {/* House 12: Aries-1 Saturn, Ju */}
                <text x="195" y="65" className="fill-slate-400 font-normal text-xs">1</text>
                <text x="180" y="45" className="fill-purple-500 font-normal text-[9px]">Sa Ju</text>
              </svg>
            ) : (
              // High Fidelity South Indian Grid Style Chart SVG
              <svg width="280" height="280" viewBox="0 0 320 320" className="text-slate-800 ">
                {/* Outlines of 12 boxes layout */}
                <rect x="0" y="0" width="320" height="320" fill="none" stroke="currentColor" strokeWidth="2.5" />

                {/* Horizontal internal bounds grid */}
                <line x1="0" y1="80" x2="320" y2="80" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="160" x2="320" y2="160" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="240" x2="320" y2="240" stroke="currentColor" strokeWidth="1.5" />

                {/* Vertical internal bounds grid */}
                <line x1="80" y1="0" x2="80" y2="320" stroke="currentColor" strokeWidth="1.5" />
                <line x1="160" y1="0" x2="160" y2="320" stroke="currentColor" strokeWidth="1.5" />
                <line x1="240" y1="0" x2="240" y2="320" stroke="currentColor" strokeWidth="1.5" />

                {/* Center empty space box mask */}
                <rect x="80" y="80" width="160" height="160" fill="white" className=" font-normal" />
                <text x="100" y="165" className="fill-indigo-600  font-normal text-xs">LAGNA BLUEPRINT</text>

                {/* Sign allocations */}
                {/* Aries-1 (top center-left) */}
                <text x="90" y="30" className="fill-slate-400 text-[10px] font-normal">Aries (Sa, Ju)</text>
                {/* Taurus-2 (top center-right) */}
                <text x="170" y="30" className="fill-indigo-500 text-[10px] font-normal">Taurus (Asc)</text>
                {/* Gemini-3 (top-right) */}
                <text x="250" y="30" className="fill-slate-400 text-[10px] font-normal">Gemini</text>
                {/* Cancer-4 */}
                <text x="250" y="110" className="fill-slate-400 text-[10px] font-normal">Cancer (Ra)</text>
                {/* Leo-5 */}
                <text x="250" y="190" className="fill-slate-400 text-[10px] font-normal">Leo</text>
                {/* Virgo-6 */}
                <text x="250" y="270" className="fill-slate-400 text-[10px] font-normal">Virgo</text>
                {/* Libra-7 */}
                <text x="170" y="270" className="fill-slate-400 text-[10px] font-normal">Libra</text>
                {/* Scorpio-8 */}
                <text x="90" y="270" className="fill-slate-400 text-[10px] font-normal">Scorpio</text>
                {/* Sagittarius-9 */}
                <text x="10" y="270" className="fill-slate-400 text-[10px] font-normal">Sagittarius</text>
                {/* Capricorn-10 */}
                <text x="10" y="190" className="fill-slate-405 text-slate-400 text-[10px] font-normal font-normal">Capricorn (Mo,Ve,Ke)</text>
                {/* Aquarius-11 */}
                <text x="10" y="110" className="fill-slate-500 text-slate-500 text-slate-400 text-[10px] font-normal font-normal">Aquarius (Su,Me)</text>
                {/* Pisces-12 */}
                <text x="10" y="30" className="fill-slate-500 text-slate-500 text-slate-400 text-[10px] font-normal font-normal">Pisces (Ma)</text>
              </svg>
            )}
          </div>

          <div className="space-y-4 font-normal text-xs border border-indigo-50  bg-indigo-50/15 p-4 rounded-xl leading-relaxed">
            <h4 className="font-semibold text-indigo-950  text-xs tracking-wider uppercase">
              📖 How to Read the Houses Map:
            </h4>
            <p className="text-slate-600 ">
              Each numbered section inside your Kundli chart represents a specific house, starting from House 1 (central Lagna block) and moving anti-clockwise.
              The text inside each house maps the active planets parked there at your exact birth coordinate, shaping your biological focus areas.
            </p>
          </div>
        </div>
      );
};

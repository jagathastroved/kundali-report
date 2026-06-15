import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const FutureForecastsPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Future Predictions & specialized predictions
            </h2>
          </div>
          <p className="text-xs text-slate-500  pb-2">
            These represent cosmic forecasts mapped specifically for your active life area metrics.
          </p>

          <div className="space-y-4">
            {data.predictions.map((val, idx) => {
              const icons = { Career: '💼', Wealth: '💰', Health: '🍏', Relationships: '🤝', Spirituality: '🧘' };
              const categoryColors = {
                Career: 'border-l-indigo-500',
                Wealth: 'border-l-orange-500',
                Health: 'border-l-emerald-500',
                Relationships: 'border-l-pink-500',
                Spirituality: 'border-l-purple-500'
              };

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-slate-50  hover:bg-slate-100/50 border border-slate-200/50  border-l-4 ${categoryColors[val.category as keyof typeof categoryColors] || 'border-l-indigo-500'} space-y-3 shadow-sm transition`}
                >
                  <div className="flex justify-between items-center border-b border-indigo-50/60  pb-2">
                    <h4 className="font-extrabold text-sm text-slate-950  flex items-center">
                      <span className="text-base mr-2">{icons[val.category as keyof typeof icons] || '✦'}</span>
                      {val.category} Assessment
                    </h4>

                    {/* Visual Score rings/pills */}
                    <div className="px-3 py-1 bg-indigo-500/10 text-indigo-600  font-bold font-mono text-xs rounded-xl shadow-inner">
                      Score: {val.score}%
                    </div>
                  </div>

                  <p className="text-xs text-slate-700  leading-relaxed font-semibold">
                    "{val.text}"
                  </p>

                  <div className="pt-1.5 text-[11px] text-slate-500  leading-normal flex items-start space-x-1.5">
                    <span className="text-xs mt-0.5">💡</span>
                    <span className="font-semibold italic">Remedy: {val.remedy}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
};

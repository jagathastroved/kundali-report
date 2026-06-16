import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const ChakrasMapPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-900  tracking-tight">
              Your Chakras Map
            </h2>
          </div>
          <p className="text-slate-700  text-sm leading-relaxed">
            {data.chakraAnalysis.description}
          </p>

          {/* Chakra energetic map items list */}
          <div className="space-y-3.5">
            {data.chakraAnalysis.chakras.map((chakra, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50  border border-slate-200/50  rounded-2xl flex items-center justify-between"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600  font-normal text-sm flex items-center justify-center">
                    ☯️
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900  text-xs">
                      {chakra.name} ({chakra.sanskritName})
                    </h4>
                    <span className="text-[10px] text-slate-400 font-normal uppercase">{chakra.status}</span>
                  </div>
                </div>

                <div className="font-mono text-xs font-normal text-slate-600 ">
                  {chakra.percentage}% Energy Focus
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

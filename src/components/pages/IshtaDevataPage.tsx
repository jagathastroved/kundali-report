import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const IshtaDevataPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-slate-900  tracking-tight">
              Favorable Ishta Devata
            </h2>
          </div>
          <p className="text-xs text-slate-500  pb-2">
            The ruling protective divinity mapped from prior incarnations on earth.
          </p>

          <div className="bg-indigo-700  p-5 rounded-3xl text-white space-y-3 relative overflow-hidden shadow-xl">
            <div className="absolute right-0 bottom-0 opacity-10 font-normal select-none text-9xl">🕉️</div>
            <h3 className="font-semibold text-lg text-indigo-100">Favorable Archetypes:</h3>
            <div className="text-xl font-normal bg-white/10 p-2.5 rounded-xl border border-white/10 w-fit text-orange-200">
              {data.spiritualProfile.ishtaDevata.name}
            </div>
            <p className="text-xs text-indigo-200 leading-relaxed">
              {data.spiritualProfile.ishtaDevata.description}
            </p>
          </div>

          {/* Deity columns lists */}
          <div className="grid grid-cols-2 gap-4">
            {data.spiritualProfile.ishtaDevata.deities.map((deity, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50  hover:bg-slate-100/50 :bg-slate-800/40 border border-slate-200/50  text-center space-y-2.5 shadow-sm transition"
              >
                <div className="w-16 h-16 rounded-full bg-white  flex items-center justify-center text-3xl mx-auto shadow-md">
                  {deity.emoji}
                </div>
                <h4 className="font-semibold text-slate-900  text-xs">
                  {deity.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      );
};

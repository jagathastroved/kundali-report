import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReport } from '../../context/ReportContext';
import { 
  ArrowLeft, ArrowRight, BookOpen, Star, Compass, AlertCircle, Sparkles,
  Map, Moon, Sun, Layers, HelpCircle, Shield, Award, CheckCircle, Zap, Eye, Globe2,
  Clock, Flame, Wind, Droplets, RefreshCw, CreditCard, ChevronRight, Lock, Printer, Download
} from 'lucide-react';
import { PieChartComponent, BookletMockup, renderPromoBox } from '../SharedElements';

export const BirthCoordinatesPage: React.FC<{pageIdx: number, setPage: (idx: number) => void}> = ({pageIdx, setPage}) => {
  const { reportData: data } = useReport();
  if(!data) return null;

      return (
        <div className="space-y-6">
          <div className="space-y-1">

            <h2 className="text-2xl font-black text-slate-900  tracking-tight">
              Birth Coordinates Summary
            </h2>
          </div>
          <p className="text-xs text-slate-500 ">
            A precise record of the astrological timestamp mapped for your Jyotish calculation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600  flex items-center justify-center font-black">
                👤
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Full Name</span>
                <span className="font-extrabold text-slate-800  text-sm">{data.birthDetails.name}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600  flex items-center justify-center font-black">
                👥
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Gender Profile</span>
                <span className="font-extrabold text-slate-800  text-sm">{data.birthDetails.gender}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600  flex items-center justify-center font-black">
                📅
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Date of Birth</span>
                <span className="font-extrabold text-slate-800  text-sm">
                  {data.birthDetails.day}/{data.birthDetails.month}/{data.birthDetails.year}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600  flex items-center justify-center font-black">
                ⏰
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Time of Birth</span>
                <span className="font-extrabold text-slate-800  text-sm">
                  {String(data.birthDetails.hour).padStart(2, '0')}:{String(data.birthDetails.minute).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/30  border border-indigo-50  flex items-center col-span-2 space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600  flex items-center justify-center font-black">
                📍
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 text-slate-400 tracking-wider block">Place of Calculation</span>
                <span className="font-extrabold text-slate-800  text-sm">
                  {data.birthDetails.city}, {data.birthDetails.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
};

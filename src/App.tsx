import React, { useState, useEffect } from 'react';
import { ReportProvider, useReport } from './context/ReportContext';
import { BirthDetailsForm } from './components/BirthDetailsForm';
import { AstrologyBackground } from './components/AstrologyBackground';
import { KundliReportBook } from './components/KundliReportBook';
import { Star, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import * as Pages from './components/pages';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        // Jump by a random amount between 3 and 9
        const jump = Math.floor(Math.random() * 7) + 3;
        return Math.min(prev + jump, 99);
      });
    }, 2500); // Jumps every 2.5 seconds, reaches 99% in about 40-50 seconds
    return () => clearInterval(interval);
  }, []);

  const getMessage = (p: number) => {
    if (p < 15) return "Calculating your birth star...";
    if (p < 30) return "Analyzing core personality...";
    if (p < 45) return "Finding your dominant element...";
    if (p < 60) return "Creating your kundali report chart...";
    if (p < 75) return "Mapping karmic chakra & planetary strength...";
    if (p < 90) return "Generating planetary profiles & dasha...";
    if (p < 99) return "Finalizing cosmic alignments...";
    return "Generating your full report...";
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden select-none z-10">
      <div className="relative w-72 h-72 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-400/35"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-6 rounded-full border-2 border-dotted border-orange-400/35"
        />
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-800 to-indigo-650 flex flex-col items-center justify-center shadow-2xl shadow-indigo-500/20 border border-white/10"
        >
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-white">{progress}%</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10 space-y-3 min-h-[80px]"
      >
        <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-orange-200 via-white to-orange-200 bg-clip-text text-transparent">
          Crafting Your Cosmic Blueprint
        </h2>
        <AnimatePresence mode="wait">
          <motion.p
            key={getMessage(progress)}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-[13px] tracking-widest uppercase font-mono font-medium text-indigo-300"
          >
            {getMessage(progress)}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const LandingScreen: React.FC = () => {
  return (
    <div className="min-h-[100dvh] lg:h-screen w-full bg-transparent text-slate-200 flex items-center justify-center px-4 py-10 lg:py-4 md:px-12 relative overflow-y-auto overflow-x-hidden lg:overflow-hidden z-10">
      <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-20 pointer-events-none select-none text-indigo-500/10">
        <Sun size={480} strokeWidth={0.5} />
      </div>
      <div className="absolute top-1/3 right-10 -translate-y-1/2 opacity-20 pointer-events-none select-none text-orange-500/15">
        <Star size={320} strokeWidth={0.5} />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center z-10">

        {/* Left Side - Content */}
        <div className="space-y-4 text-left max-w-xl w-full mt-8 lg:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-[1.1]" style={{ whiteSpace: 'pre-line' }}>
            Discover Your True Path{'\n'}Through Kundali
          </h1>
          <p className="text-indigo-200/90 text-[15px] sm:text-base leading-relaxed max-w-md">
            Unlock the hidden meanings of your birth chart. Gain deep insights into your personality, destiny, and life's true purpose.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 pt-6">
            {[
              { title: "Personalized Kundali Chart", desc: "Access your detailed birth chart based on precise birth details." },
              { title: "Core Personality", desc: "Reveal your strengths, challenges, talents, and true life potential." },
              { title: "Dasha Timeline", desc: "Understand current and future planetary periods shaping your journey." },
              { title: "Karmic Chakra Analysis", desc: "Uncover karmic patterns and the spiritual lessons guiding your growth." },
              { title: "Planetary Profiles", desc: "Gain insights into how each planet influences different areas of life." },
              { title: "Influential Signs", desc: "Learn how key zodiac signs affect your personality and life path." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 bg-indigo-900/50 rounded-full p-1.5 border border-indigo-700/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-[15px]">{item.title}</h4>
                  <p className="text-indigo-200/80 text-[13px] mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full flex justify-center lg:justify-end">
          <BirthDetailsForm />
        </div>
      </div>
    </div>
  );
};

const PageWrapper: React.FC<{ component: React.ComponentType<{ pageIdx: number, setPage: (idx: number) => void }>, pageIdx: number }> = ({ component: Component, pageIdx }) => {
  const { reportData } = useReport();
  if (!reportData) return <Navigate to="/" replace />;
  return <Component pageIdx={pageIdx} setPage={() => { }} />;
};

import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ReportProvider>
          <main className="min-h-screen bg-indigo-950 text-slate-200 font-sans relative overflow-hidden">
            {/* Global Background from generating page */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl pointer-events-none" />

            <AstrologyBackground />

            <div className="relative z-10 h-full">
              <Routes>
                <Route path="/" element={<LandingScreen />} />
                <Route path="/generating" element={<LoadingScreen />} />
                <Route path="/report" element={<KundliReportBook />}>
                  <Route path="welcome" element={<PageWrapper component={Pages.WelcomePage} pageIdx={0} />} />
                  <Route path="birth-star" element={<PageWrapper component={Pages.BirthStarPage} pageIdx={1} />} />
                  <Route path="core-personality" element={<PageWrapper component={Pages.CorePersonalityPage} pageIdx={2} />} />
                  <Route path="influential-signs" element={<PageWrapper component={Pages.BigThreeSignsPage} pageIdx={3} />} />
                  <Route path="dominant-element" element={<PageWrapper component={Pages.FiveGreatElementsPage} pageIdx={4} />} />
                  <Route path="lagna-chart" element={<PageWrapper component={Pages.LagnaChartPage} pageIdx={5} />} />
                  <Route path="why-get-report" element={<PageWrapper component={Pages.ReportFeaturesPage} pageIdx={6} />} />
                  <Route path="karmic-chakra" element={<PageWrapper component={Pages.KarmicChakraPage} pageIdx={7} />} />
                  <Route path="planetary-strengths" element={<PageWrapper component={Pages.PlanetaryStrengthsPage} pageIdx={8} />} />
                  <Route path="planetary-profiles" element={<PageWrapper component={Pages.PlanetaryProfilesPage} pageIdx={9} />} />
                  <Route path="atmakaraka" element={<PageWrapper component={Pages.AtmakarakaPage} pageIdx={10} />} />
                  <Route path="dasha-timeline" element={<PageWrapper component={Pages.DashaWheelPage} pageIdx={11} />} />
                  <Route path="premium-deliverables" element={<PageWrapper component={Pages.PremiumDeliverablesPage} pageIdx={12} />} />
                  <Route index element={<Navigate to="welcome" replace />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>
        </ReportProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

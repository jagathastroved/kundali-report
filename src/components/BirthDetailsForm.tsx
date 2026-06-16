import React, { useState, useEffect, useMemo } from 'react';
import { BirthDetails } from '../types';
import { useReport } from '../context/ReportContext';
import { Sparkles, Calendar, Clock, MapPin, User, Globe2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Country, City } from 'country-state-city';

export const BirthDetailsForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kundli' | 'numerology'>('kundli');
  const { submitBirthDetails, isLoading } = useReport();
  const navigate = useNavigate();

  // Form local states
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(2000);
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [country, setCountry] = useState('India');
  const [city, setCity] = useState('');
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');

  const allCountries = useMemo(() => Country.getAllCountries(), []);
  const [cities, setCities] = useState<any[]>([]);
  const [cityInput, setCityInput] = useState('');
  const [debouncedCity, setDebouncedCity] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedCity(cityInput), 300);
    return () => clearTimeout(handler);
  }, [cityInput]);

  const filteredCities = useMemo(() => {
    if (!debouncedCity || debouncedCity.length < 1) return [];
    return cities.filter(c => c.name.toLowerCase().includes(debouncedCity.toLowerCase())).slice(0, 10);
  }, [debouncedCity, cities]);

  useEffect(() => {
    const countryObj = allCountries.find(c => c.name === country);
    if (countryObj) {
      const countryCities = City.getCitiesOfCountry(countryObj.isoCode) || [];
      setCities(countryCities.sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      setCities([]);
    }
  }, [country, allCountries]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Package into BirthDetails interface
    const birthData: BirthDetails = {
      name: name.trim(),
      gender,
      day: Number(day),
      month: Number(month),
      year: Number(year),
      hour: Number(hour),
      minute: Number(minute),
      country,
      city: city.trim() || 'New Delhi',
      language
    };

    navigate('/generating');
    
    const minLoadingTime = new Promise(resolve => setTimeout(resolve, 3000));
    await Promise.all([
      submitBirthDetails(birthData),
      minLoadingTime
    ]);

    navigate('/report/welcome');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-xl bg-white/95  backdrop-blur-xl border border-white/20  shadow-2xl rounded-3xl overflow-hidden self-center"
    >
      {/* Form Tabs */}
      <div className="flex border-b border-indigo-50 ">
        <button
          onClick={() => setActiveTab('kundli')}
          className={`flex-1 py-4.5 text-center font-normal transition-all duration-300 relative ${activeTab === 'kundli'
            ? 'text-indigo-600  bg-white '
            : 'text-slate-400  hover:text-slate-600 bg-indigo-50/20 '
            }`}
        >
          {activeTab === 'kundli' && (
            <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 " />
          )}
          Kundali
        </button>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800  tracking-tight">
              {activeTab === 'kundli' ? 'Enter Birth Details' : 'Enter Numerology Profile'}
            </h2>
            <p className="text-sm text-slate-500  mt-1">
              Provides highly precise astronomical coordinates & predictions.
            </p>
          </div>

          {/* Language Selector */}
          <div className="flex flex-col items-end">
            <label className="text-[10px] font-normal text-indigo-500 uppercase tracking-widest mb-1.5 flex items-center">
              <Globe2 size={11} className="mr-1" /> Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'english' | 'hindi')}
              className="bg-indigo-50/50  border-0 text-slate-700  text-xs rounded-xl px-3 py-1.5 font-normal focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            >
              <option value="english">English</option>
              <option value="hindi">हिन्दी (Hindi)</option>
            </select>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-normal text-slate-600  uppercase tracking-wider flex items-center">
              <User size={14} className="mr-1.5 text-indigo-500" /> Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Full Name"
                className="w-full bg-slate-50  border border-slate-200/85  focus:border-indigo-500 :border-indigo-400 rounded-2xl py-3.5 pl-4 pr-11 text-slate-800  placeholder:text-slate-400 focus:ring-0 transition-all font-medium"
              />
              <Sparkles size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-400 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Gender */}
            <div className="space-y-1.5 col-span-2 sm:col-span-1">
              <label className="text-xs font-normal text-slate-600  uppercase tracking-wider">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-slate-50  border border-slate-200/85  focus:border-indigo-500 :border-indigo-400 rounded-2xl py-3 px-4 text-slate-800  font-normal focus:ring-0 focus:outline-none transition-all"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other / Neutral</option>
              </select>
            </div>

          </div>

          {/* Date of Birth Grid */}
          <div className="space-y-2">
            <label className="text-xs font-normal text-slate-600  uppercase tracking-wider flex items-center">
              <Calendar size={14} className="mr-1.5 text-indigo-500" /> Date of Birth
            </label>
            <div className="grid grid-cols-3 gap-3">
              <select
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="bg-slate-50  border border-slate-200/85  rounded-xl py-3 px-3.5 text-center text-slate-800  font-normal focus:ring-0 focus:outline-none"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>

              <select
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                className="bg-slate-50  border border-slate-200/85  rounded-xl py-3 px-3 text-slate-800  font-normal focus:ring-0 focus:outline-none"
              >
                {[
                  'January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'
                ].map((m, idx) => (
                  <option key={m} value={idx + 1}>{m}</option>
                ))}
              </select>

              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="bg-slate-50  border border-slate-200/85  rounded-xl py-3 px-3 text-slate-800  font-normal focus:ring-0 focus:outline-none"
              >
                {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Time of Birth Grid */}
          <div className="space-y-2">
            <label className="text-xs font-normal text-slate-600  uppercase tracking-wider flex items-center">
              <Clock size={14} className="mr-1.5 text-indigo-500" /> Time of Birth (24hr clock format)
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 bg-slate-50  border border-slate-200/85  rounded-2xl px-3 py-1">
                <span className="text-xs font-normal text-slate-400">Hour</span>
                <select
                  value={hour}
                  onChange={(e) => setHour(Number(e.target.value))}
                  className="w-full bg-transparent border-0 text-slate-800  font-normal focus:ring-0 focus:outline-none py-2"
                >
                  {Array.from({ length: 24 }, (_, i) => i).map((h) => (
                    <option key={h} value={h}>{String(h).padStart(2, '0')}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2 bg-slate-50  border border-slate-200/85  rounded-2xl px-3 py-1">
                <span className="text-xs font-normal text-slate-400">Minute</span>
                <select
                  value={minute}
                  onChange={(e) => setMinute(Number(e.target.value))}
                  className="w-full bg-transparent border-0 text-slate-800  font-normal focus:ring-0 focus:outline-none py-2"
                >
                  {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                    <option key={m} value={m}>{String(m).padStart(2, '0')}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Place of Birth */}
          <div className="space-y-2">
            <label className="text-xs font-normal text-slate-600  uppercase tracking-wider flex items-center">
              <MapPin size={14} className="mr-1.5 text-indigo-500" /> Place of Birth
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-40">
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setCityInput('');
                  setCity('');
                }}
                className="w-full bg-slate-50  border border-slate-200/85  rounded-2xl py-3 px-4 text-slate-800  font-normal focus:ring-0 focus:outline-none"
              >
                <option value="">Select Country</option>
                {allCountries.map((c) => (
                  <option key={c.isoCode} value={c.name}>{c.name}</option>
                ))}
              </select>

              <div className="relative">
                <input
                  type="text"
                  required
                  value={cityInput}
                  onChange={(e) => {
                    setCityInput(e.target.value);
                    setCity(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Type your City..."
                  className="w-full bg-slate-50  border border-slate-200/85  focus:border-indigo-500 :border-indigo-400 rounded-2xl py-3 px-4 text-slate-800  placeholder:text-slate-450 focus:ring-0 transition-all font-normal"
                />
                <AnimatePresence>
                  {showSuggestions && filteredCities.length > 0 && (
                    <motion.ul
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute left-0 right-0 top-full z-50 mt-1 max-h-48 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl py-1 custom-scrollbar"
                    >
                      {filteredCities.map((c, idx) => (
                        <li
                          key={`${c.name}-${idx}`}
                          onClick={() => {
                            setCityInput(c.name);
                            setCity(c.name);
                            setShowSuggestions(false);
                          }}
                          className="px-4 py-2 text-sm text-slate-700 font-normal hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors"
                        >
                          {c.name}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="mt-4 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-4.5 rounded-2xl font-normal text-base tracking-wide flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-orange-500/25 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sychronizing Cosmic Grid...</span>
                </>
              ) : (
                <>
                  <span>Generate Kundali Now</span>
                  <Sparkles size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

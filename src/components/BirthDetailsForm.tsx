import React, { useState, useEffect, useMemo } from 'react';
import { BirthDetails } from '../types';
import { useReport } from '../context/ReportContext';

import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Country, City } from 'country-state-city';

export const BirthDetailsForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kundli' | 'numerology'>('kundli');
  const { submitBirthDetails, isLoading } = useReport();
  const navigate = useNavigate();

  // Form local states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [gender, setGender] = useState('Male');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2026);
  const [hour12, setHour12] = useState(12);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState<'AM' | 'PM'>('AM');
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

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');

    if (!city.trim() || !/^[A-Za-z\s]+$/.test(city.trim())) {
      alert("Please enter a valid city name (only alphabets and spaces are allowed).");
      return;
    }

    const isValidCity = cities.some(c => c.name.toLowerCase() === city.trim().toLowerCase());
    if (!isValidCity) {
      alert("The entered city is not found in the selected country. Please select a valid city from the suggestions.");
      return;
    }

    let finalHour = hour12;
    if (ampm === 'PM' && hour12 < 12) finalHour += 12;
    if (ampm === 'AM' && hour12 === 12) finalHour = 0;

    // Package into BirthDetails interface
    const birthData: BirthDetails = {
      name: name.trim(),
      email: email.trim(),
      gender,
      day: Number(day),
      month: Number(month),
      year: Number(year),
      hour: finalHour,
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
      className="w-full max-w-lg bg-white shadow-2xl rounded-[1.5rem] overflow-hidden flex flex-col max-h-full self-center"
    >
      <div className="bg-orange-500 py-3 text-center">
        <h3 className="text-white font-semibold text-[17px] tracking-wide uppercase">Kundali</h3>
      </div>

      <div className="p-4 md:p-6 space-y-4 relative flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-serif font-normal text-gray-800 tracking-tight leading-none">
              Enter Your Birth Details
            </h2>
            <p className="text-[13px] text-gray-500 mt-2 font-medium">
              Get your personalized Kundali report with accurate predictions.
            </p>
          </div>

          {/* Language Selector */}
          <div className="relative mt-1">
            <label className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
              Language
            </label>
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'english' | 'hindi')}
                className="pl-3 pr-8 py-2 text-sm font-normal text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none relative z-0"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-2 gap-4 pt-2">
            {/* Full Name */}
            <div className="relative mt-2">
              <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-2.5 text-sm text-gray-800 font-medium placeholder-gray-500 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
              />
            </div>

            {/* Gender */}
            <div className="relative mt-2">
              <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                Gender
              </label>
              <div className="relative">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full pl-4 pr-8 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none relative z-0"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Email Address */}
          <div className="grid grid-cols-1 gap-4 pt-2">
            <div className="relative mt-1">
              <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError('');
                }}
                placeholder="Your Email"
                className={`w-full px-4 py-2.5 text-sm text-gray-800 font-medium placeholder-gray-500 border ${emailError ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-indigo-400'} rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-400`}
              />
              {emailError && <p className="text-[10px] text-red-500 absolute -bottom-4 left-2">{emailError}</p>}
            </div>
          </div>

          {/* Date of Birth Grid */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="relative">
              <label className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                Day
              </label>
              <div className="relative">
                <select
                  value={day}
                  onChange={(e) => setDay(Number(e.target.value))}
                  className="w-full pl-3 pr-8 py-2.5 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none relative z-0"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                Month
              </label>
              <div className="relative">
                <select
                  value={month}
                  onChange={(e) => setMonth(Number(e.target.value))}
                  className="w-full pl-2 pr-8 py-2.5 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none relative z-0"
                >
                  {[
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                  ].map((m, idx) => (
                    <option key={m} value={idx + 1}>{m}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                Year
              </label>
              <div className="relative">
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full pl-3 pr-8 py-2.5 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none relative z-0"
                >
                  {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Time of Birth Grid */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="relative">
              <label className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                Hour
              </label>
              <div className="relative">
                <select
                  value={hour12}
                  onChange={(e) => setHour12(Number(e.target.value))}
                  className="w-full pl-3 pr-8 py-2.5 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none relative z-0"
                >
                  {Array.from({ length: 12 }, (_, i) => i === 0 ? 12 : i).map((h) => (
                    <option key={h} value={h}>{String(h).padStart(2, '0')}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                Minute
              </label>
              <div className="relative">
                <select
                  value={minute}
                  onChange={(e) => setMinute(Number(e.target.value))}
                  className="w-full pl-3 pr-8 py-2.5 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none relative z-0"
                >
                  {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                    <option key={m} value={m}>{String(m).padStart(2, '0')}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-2 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                AM / PM
              </label>
              <div className="relative">
                <select
                  value={ampm}
                  onChange={(e) => setAmpm(e.target.value as 'AM' | 'PM')}
                  className="w-full pl-3 pr-8 py-2.5 text-sm text-gray-700 font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none relative z-0"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500 z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Place of Birth Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 relative z-40">
            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                Country
              </label>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setCityInput('');
                    setCity('');
                  }}
                  className="w-full pl-4 pr-8 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 cursor-pointer appearance-none relative z-0"
                >
                  <option value="">Select Country</option>
                  {allCountries.map((c) => (
                    <option key={c.isoCode} value={c.name}>{c.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-indigo-600 font-normal tracking-wide z-10">
                City
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={cityInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^A-Za-z\s]/g, '');
                    setCityInput(val);
                    setCity(val);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Type your city"
                  className="w-full px-4 py-2.5 text-sm text-gray-800 font-medium placeholder-gray-500 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                />
                <AnimatePresence>
                  {showSuggestions && filteredCities.length > 0 && (
                    <motion.ul
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute left-0 right-0 top-full z-50 mt-1 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-xl py-1 custom-scrollbar"
                    >
                      {filteredCities.map((c, idx) => (
                        <li
                          key={`${c.name}-${idx}`}
                          onClick={() => {
                            setCityInput(c.name);
                            setCity(c.name);
                            setShowSuggestions(false);
                          }}
                          className="px-4 py-2 text-sm text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors"
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

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-medium text-[15px] tracking-wide rounded-xl shadow-lg transition-all duration-200 cursor-pointer text-center flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <span>Create Your Kundali Report Now</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

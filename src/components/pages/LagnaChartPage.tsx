import React, { useState } from 'react';
import { useReport } from '../../context/ReportContext';

const SouthChartCell = ({ icon, planets, isAsc = false, num }: { icon: React.ReactNode, planets: string[], isAsc?: boolean, num?: string }) => (
  <div className="border border-slate-200 p-1.5 sm:p-2 flex flex-col bg-white h-full w-full relative overflow-hidden group hover:bg-slate-50 transition-colors">
    {num && <span className="absolute top-1 right-1.5 text-[9px] text-slate-400 font-semibold">{num}</span>}
    <div className="flex items-start gap-1.5 mb-1">
      <span className="text-lg leading-none drop-shadow-sm">{icon}</span>
      {planets.length > 0 && (
        <span className="text-[10px] sm:text-[11px] font-medium text-slate-700 leading-tight pt-0.5">{planets[0]}</span>
      )}
    </div>
    <div className="flex flex-col ml-6 space-y-0.5">
      {planets.slice(1).map((p: string, i: number) => (
        <span key={i} className="text-[10px] sm:text-[11px] font-medium text-slate-700 leading-none">{p}</span>
      ))}
      {isAsc && (
        <span className="text-[10px] sm:text-[11px] font-medium text-indigo-600 mt-0.5">Lagna</span>
      )}
    </div>
  </div>
);

const NorthChartCell = ({ x, y, width, height, icon, num, planets, isAsc = false }: { x: number, y: number, width: number, height: number, icon: React.ReactNode, num: string, planets: string[], isAsc?: boolean }) => (
  <foreignObject x={x} y={y} width={width} height={height}>
    <div className="flex flex-col items-center justify-center w-full h-full text-center leading-none overflow-hidden">
      <div className="flex items-center gap-1 mb-0.5">
        <span className="text-sm drop-shadow-sm">{icon}</span>
        <span className="text-[10px] font-bold text-slate-700">{num}</span>
      </div>
      {planets.map((p: string, i: number) => (
        <span key={i} className="text-[9px] font-medium text-slate-800 leading-tight my-[1px]">{p}</span>
      ))}
      {isAsc && <span className="text-[8px] font-bold text-indigo-600 uppercase mt-0.5">Lagna</span>}
    </div>
  </foreignObject>
);

export const LagnaChartPage: React.FC<{ pageIdx: number, setPage: (idx: number) => void }> = ({ pageIdx, setPage }) => {
  const { reportData: data } = useReport();
  const [chartType, setChartType] = useState<'south' | 'north'>('north');
  if (!data) return null;

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
          <div className="text-[11px] text-slate-400">Date {data.birthDetails.day}/{data.birthDetails.month}/{data.birthDetails.year}
            <div>
              Time : {String(data.birthDetails.hour % 12 || 12).padStart(2, '0')}:{String(data.birthDetails.minute).padStart(2, '0')} {data.birthDetails.hour >= 12 ? 'PM' : 'AM'}
            </div>
          </div>
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

            {/* Displaying houses using foreignObject for perfect flexbox alignment */}
            <NorthChartCell x={110} y={30} width={80} height={90} icon={<span className="text-orange-500 font-serif">♉</span>} num="2" planets={[]} isAsc={true} />
            <NorthChartCell x={35} y={5} width={80} height={60} icon={<span className="text-blue-500 font-serif">♊</span>} num="3" planets={[]} />
            <NorthChartCell x={5} y={35} width={60} height={80} icon={<span className="text-blue-400 font-serif">♋</span>} num="4" planets={['Rahu']} />
            <NorthChartCell x={30} y={110} width={90} height={80} icon={<span className="text-red-500 font-serif">♌</span>} num="5" planets={[]} />
            <NorthChartCell x={5} y={185} width={60} height={80} icon={<span className="text-orange-600 font-serif">♍</span>} num="6" planets={[]} />
            <NorthChartCell x={35} y={235} width={80} height={60} icon={<span className="text-green-500 font-serif">♎</span>} num="7" planets={[]} />
            <NorthChartCell x={110} y={180} width={80} height={90} icon={<span className="text-red-600 font-serif">♏</span>} num="8" planets={[]} />
            <NorthChartCell x={185} y={235} width={80} height={60} icon={<span className="text-green-600 font-serif">♐</span>} num="9" planets={[]} />
            <NorthChartCell x={235} y={185} width={60} height={80} icon={<span className="text-blue-600 font-serif">♑</span>} num="10" planets={['Moon', 'Venus', 'Ketu']} />
            <NorthChartCell x={180} y={110} width={90} height={80} icon={<span className="text-orange-400 font-serif">♒</span>} num="11" planets={['Sun', 'Mercury']} />
            <NorthChartCell x={235} y={35} width={60} height={80} icon={<span className="text-blue-500 font-serif">♓</span>} num="12" planets={['Mars']} />
            <NorthChartCell x={185} y={5} width={80} height={60} icon={<span className="text-green-500 font-serif">♈</span>} num="1" planets={['Saturn', 'Jupiter']} />
          </svg>
        ) : (
          <div className="grid grid-cols-4 grid-rows-4 w-full aspect-square max-w-[340px] h-[340px] bg-slate-100 border border-slate-300 shadow-sm mx-auto overflow-hidden text-left font-sans">
            {/* Row 1 */}
            <SouthChartCell icon={<span className="text-blue-500 font-serif">♓</span>} planets={['Mars']} num="11" />
            <SouthChartCell icon={<span className="text-green-500 font-serif">♈</span>} planets={['Saturn', 'Jupiter']} num="12" />
            <SouthChartCell icon={<span className="text-orange-500 font-serif">♉</span>} planets={[]} isAsc={true} num="1" />
            <SouthChartCell icon={<span className="text-blue-500 font-serif">♊</span>} planets={[]} num="2" />

            {/* Row 2 */}
            <SouthChartCell icon={<span className="text-orange-400 font-serif">♒</span>} planets={['Sun', 'Mercury']} num="10" />
            <div className="col-span-2 row-span-2 bg-white flex flex-col items-center justify-center border border-slate-200">
              <h3 className="text-xl font-medium text-slate-800">Birth Chart</h3>
              <p className="text-base font-normal text-slate-600 mt-1">(Rasi Chart)</p>
            </div>
            <SouthChartCell icon={<span className="text-blue-400 font-serif">♋</span>} planets={['Rahu']} num="3" />

            {/* Row 3 */}
            <SouthChartCell icon={<span className="text-blue-600 font-serif">♑</span>} planets={['Moon', 'Venus', 'Ketu']} num="9" />
            <SouthChartCell icon={<span className="text-red-500 font-serif">♌</span>} planets={[]} num="4" />

            {/* Row 4 */}
            <SouthChartCell icon={<span className="text-green-600 font-serif">♐</span>} planets={[]} num="8" />
            <SouthChartCell icon={<span className="text-red-600 font-serif">♏</span>} planets={[]} num="7" />
            <SouthChartCell icon={<span className="text-green-500 font-serif">♎</span>} planets={[]} num="6" />
            <SouthChartCell icon={<span className="text-orange-600 font-serif">♍</span>} planets={[]} num="5" />
          </div>
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

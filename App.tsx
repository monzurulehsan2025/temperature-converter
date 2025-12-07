
import React, { useState, useCallback } from 'react';
import TemperatureInput from './components/TemperatureInput';

const App: React.FC = () => {
  const [celsius, setCelsius] = useState<string>('');
  const [fahrenheit, setFahrenheit] = useState<string>('');

  const handleCelsiusChange = useCallback((value: string) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
      return;
    }
    const c = parseFloat(value);
    if (!isNaN(c)) {
      const f = (c * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2).replace(/\.00$/, ''));
    } else {
      setFahrenheit('');
    }
  }, []);

  const handleFahrenheitChange = useCallback((value: string) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
      return;
    }
    const f = parseFloat(value);
    if (!isNaN(f)) {
      const c = ((f - 32) * 5) / 9;
      setCelsius(c.toFixed(2).replace(/\.00$/, ''));
    } else {
      setCelsius('');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900 font-sans">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-cyan-400">
                Temperature Converter
              </h1>
              <p className="text-slate-400 mt-2">
                Convert temperatures on the fly.
              </p>
            </div>
            <div className="space-y-6">
              <TemperatureInput
                label="Celsius"
                unit="°C"
                value={celsius}
                onChange={handleCelsiusChange}
              />
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h.01M12 7h.01M16 7h.01M9 17h6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    transform="rotate(90 12 12)"
                  />
                </svg>
              </div>
              <TemperatureInput
                label="Fahrenheit"
                unit="°F"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
              />
            </div>
          </div>
        </div>
        <footer className="text-center mt-8 text-slate-500 text-sm">
          <p>
            Built with React, TypeScript, and Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;

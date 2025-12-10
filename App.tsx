import React, { useState, useCallback } from 'react';
import TemperatureInput from './components/TemperatureInput';

const App: React.FC = () => {
  const [celsius, setCelsius] = useState<string>('');
  const [fahrenheit, setFahrenheit] = useState<string>('');
  const [kelvin, setKelvin] = useState<string>('');

  const formatTemperature = (value: number): string => {
    return value.toFixed(2).replace(/\.00$/, '');
  };

  const handleCelsiusChange = useCallback((value: string) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
      setKelvin('');
      return;
    }
    const c = parseFloat(value);
    if (!isNaN(c)) {
      const f = (c * 9) / 5 + 32;
      const k = c + 273.15;
      setFahrenheit(formatTemperature(f));
      setKelvin(formatTemperature(k));
    } else {
      setFahrenheit('');
      setKelvin('');
    }
  }, []);

  const handleFahrenheitChange = useCallback((value: string) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
      setKelvin('');
      return;
    }
    const f = parseFloat(value);
    if (!isNaN(f)) {
      const c = ((f - 32) * 5) / 9;
      const k = c + 273.15;
      setCelsius(formatTemperature(c));
      setKelvin(formatTemperature(k));
    } else {
      setCelsius('');
      setKelvin('');
    }
  }, []);

  const handleKelvinChange = useCallback((value: string) => {
    setKelvin(value);
    if (value === '') {
      setCelsius('');
      setFahrenheit('');
      return;
    }
    const k = parseFloat(value);
    if (!isNaN(k)) {
      const c = k - 273.15;
      const f = (c * 9) / 5 + 32;
      setCelsius(formatTemperature(c));
      setFahrenheit(formatTemperature(f));
    } else {
      setCelsius('');
      setFahrenheit('');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-green-950 font-sans">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-green-900/60 backdrop-blur-sm border border-green-800 rounded-2xl shadow-2xl shadow-green-900/50 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-emerald-400">
                Temperature Converter
              </h1>
              <p className="text-green-200/70 mt-2">
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
                  className="h-6 w-6 text-green-700/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              <TemperatureInput
                label="Fahrenheit"
                unit="°F"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
              />

              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-700/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              <TemperatureInput
                label="Kelvin"
                unit="K"
                value={kelvin}
                onChange={handleKelvinChange}
              />
            </div>
          </div>
        </div>
        <footer className="text-center mt-8 text-green-800 text-sm">
          <p>
            Built with React, TypeScript, and Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
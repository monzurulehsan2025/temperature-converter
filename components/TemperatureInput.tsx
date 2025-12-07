
import React from 'react';

interface TemperatureInputProps {
  label: string;
  unit: string;
  value: string;
  onChange: (value: string) => void;
}

const TemperatureInput: React.FC<TemperatureInputProps> = ({
  label,
  unit,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow numbers, decimal point, and negative sign
    const sanitizedValue = e.target.value.replace(/[^0-9.-]/g, '');
    onChange(sanitizedValue);
  };

  return (
    <div className="relative">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-slate-400 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={label}
          type="text" // Use text to allow for empty string and better control
          inputMode="decimal" // Hint for numeric keyboard on mobile
          value={value}
          onChange={handleChange}
          placeholder="0"
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 pl-4 pr-12 text-white text-xl placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
          autoComplete="off"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <span className="text-slate-400 text-xl">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureInput;

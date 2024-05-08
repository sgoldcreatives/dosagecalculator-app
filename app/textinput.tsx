import React, { useState } from "react";

interface TextInputProps {
  label: string;
  initialValue?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  initialValue = "",
  placeholder = "",
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="flex items-center mt-1 mb-1">
      <label className="mr-4 font-semibold">{label}:</label>
      <input
        className="input input-bordered w-full max-w-xs text-end text-lg bg-violet-100 rounded-md px-3 pt-2 border-violet-300 border-2 text-slate-950"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;

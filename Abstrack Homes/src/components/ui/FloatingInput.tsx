import { useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FloatingInput = ({ label, id, ...props }: FloatingInputProps) => {
  const [focused, setFocused] = useState(false);
  const hasValue = props.value !== undefined && String(props.value).length > 0;

  return (
    <div className="relative group">
      <input
        id={id}
        {...props}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className={`peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 ${props.className ?? ''}`}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          focused || hasValue
            ? 'top-2 text-xs text-gold-400'
            : 'top-1/2 -translate-y-1/2 text-sm text-gray-400'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

interface FloatingTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const FloatingTextarea = ({ label, id, ...props }: FloatingTextareaProps) => {
  const [focused, setFocused] = useState(false);
  const hasValue = props.value !== undefined && String(props.value).length > 0;

  return (
    <div className="relative group">
      <textarea
        id={id}
        {...props}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className={`peer w-full px-4 pt-6 pb-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 resize-none ${props.className ?? ''}`}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          focused || hasValue
            ? 'top-2 text-xs text-gold-400'
            : 'top-4 text-sm text-gray-400'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

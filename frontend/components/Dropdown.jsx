'use client';

import { useState, useRef, useEffect } from 'react';

export default function Dropdown({ value, onChange, options, placeholder, icon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = options.find(o => o.value === value);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className={`custom-dd${open ? ' custom-dd--open' : ''}`} ref={ref}>
      <button
        type="button"
        className="custom-dd__trigger"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {icon && <span className="custom-dd__icon">{icon}</span>}
        <span className={`custom-dd__label${!selected ? ' custom-dd__label--placeholder' : ''}`}>
          {selected ? selected.label : placeholder}
        </span>
        <span className="custom-dd__arrow">▾</span>
      </button>
      <div className="custom-dd__menu" role="listbox">
        {options.map(opt => (
          <button
            key={opt.value}
            type="button"
            role="option"
            aria-selected={value === opt.value}
            className={`custom-dd__option${value === opt.value ? ' custom-dd__option--selected' : ''}`}
            onClick={() => { onChange(opt.value); setOpen(false); }}
          >
            {opt.emoji && <span>{opt.emoji}</span>}
            {opt.label}
            {value === opt.value && <span className="custom-dd__tick">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

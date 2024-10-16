// components/Input/Input.tsx

import React from 'react';
import './input.css';

interface InputProps {
  className?: string; // Permite classes personalizadas
  label?: string;
  iconSrc?: string;
  placeholder?: string;
  type?: string;
  options?: { value: string; label: string }[]; 
  selectClassName?: string; // Classe específica para o select
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({ 
  className, 
  iconSrc, 
  placeholder, 
  type = 'text', 
  options, 
  selectClassName,
  
  ...props 
}) => {
  return (
    <div className={`input-wrapper ${className}`}> 
      <div className="input-container">
        {iconSrc && (
          <img src={iconSrc} alt="icon" className="input-icon" />
        )}
        {options ? (
           <select className={`custom-select ${selectClassName}`}>
           <option value="" disabled selected>{placeholder}</option>
           {options.map((option) => (
             <option key={option.value} value={option.value}>
               {option.label}
             </option>
           ))}
         </select>
        ) : (
          <input
            type={type}
            className="custom-input"
            placeholder={placeholder}
            {...props}
          />
        )}
      </div>
    </div>
  );
};

export default Input;

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  // Implement input logic here
  return (
    <div>
      {label && <label>{label}</label>}
      <input className={className} {...props} />
      {error && <p>{error}</p>}
    </div>
  );
};

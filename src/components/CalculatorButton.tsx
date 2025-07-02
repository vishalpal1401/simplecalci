
import React from 'react';
import { cn } from '../lib/utils';

interface CalculatorButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  wide?: boolean;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  wide = false 
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-12 rounded-lg font-medium text-lg transition-all duration-150 active:scale-95",
        "bg-gray-600 hover:bg-gray-500 text-white",
        "flex items-center justify-center",
        wide && "col-span-2",
        className
      )}
    >
      {children}
    </button>
  );
};

export default CalculatorButton;

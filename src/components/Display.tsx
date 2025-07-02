
import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 mb-4">
      <div className="text-right">
        <div className="text-4xl font-light text-white font-mono tracking-wider">
          {value}
        </div>
      </div>
    </div>
  );
};

export default Display;

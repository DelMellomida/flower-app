import React from 'react';

const Smiley = ({ mood }) => {
  return (
    <div className="smiley flex justify-center items-center text-6xl text-yellow-500 h-full">
      {mood === 'happy' ? '😊' : '😐'}
    </div>
  );
};

export default Smiley;

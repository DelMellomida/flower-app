import React, { useState } from 'react';
import Flower from './components/Flower';
import Smiley from './components/Smiley';
import './App.css';
import grass from './components/images/grass.png';

const App = () => {
  const [mood, setMood] = useState('happy');

  const toggleMood = () => {
    setMood(mood === 'happy' ? 'neutral' : 'happy');
  };

  const headingText = mood === 'neutral' ? "Bat kasi sa tuesday pa? :<": "I can't wait to see you!";

  return (
    <><h1 className="text-center text-3xl font-bold mt-8">{headingText}</h1><p className="text-center text-xl mt-2">For now, here's a flower and a smile for you Margaret F. :</p><Flower /><Smiley mood={mood} /><div className="button-box mt-4">
      <button onClick={toggleMood} className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
        Toggle Mood
      </button>
    </div><img src={grass} alt="Grass" id="grass" className="absolute bottom-0" /></>
  );
};

export default App;

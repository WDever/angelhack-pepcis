import React from 'react';
import './App.scss';
import VictimUploader from './VictimUploader';
import VictimFinder from './VictimFinder';

const App: React.FC = () => {
  return (
    <div className='App'>
      <VictimUploader />
      <hr />
      <VictimFinder />
    </div>
  );
};

export default App;

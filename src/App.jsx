import React from 'react';
import AppRoutes from './AppRoutes';
import { RecoilRoot } from 'recoil';
import Main from './components/Main';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <AppRoutes />
      </RecoilRoot>
    </div>
  );
}

export default App;

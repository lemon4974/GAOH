import React from "react";
import AppRoutes from "./AppRoutes";
import { RecoilRoot, useRecoilValue } from "recoil";

import { ThemeProvider } from "./ThemeContext";
import { modeState } from "./state/theme";
// import Main from './components/Main';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const theme = useRecoilValue(modeState);

  return (
    <div className="App">
      <RecoilRoot>
        <ThemeProviderComponent>
          <AppRoutes />
        </ThemeProviderComponent>
      </RecoilRoot>
    </div>
  );
}

function ThemeProviderComponent({ children }) {
  const theme = useRecoilValue(modeState);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default App;

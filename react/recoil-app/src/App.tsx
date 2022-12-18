import React from 'react';
import './App.css';
import {HashRouter, useRoutes} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Home from "./pages/Home";
import HookForm from "./pages/HookForm";

const Routes: React.FC = () =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/form',
      element: <HookForm />
    }
  ]);

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <HashRouter>
        <Routes />
      </HashRouter>
    </RecoilRoot>
  );
};

export default App;

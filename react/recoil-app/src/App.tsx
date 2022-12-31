import React from 'react';
import {HashRouter, useRoutes} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Home from "./pages/Home";
import HookForm from "./pages/HookForm";
import CommentState from "./pages/CommentState";
import SingleComment from "./pages/SingleComment";

const Routes: React.FC = () =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/form',
      element: <HookForm />
    },
    {
      path: '/state',
      element: <CommentState />
    },
    {
      path: '/state/:commentId',
      element: <SingleComment />
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

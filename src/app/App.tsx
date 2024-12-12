import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ConfigProvider, Layout } from 'antd';

import WelcomePage from '@/modules/WelcomePage/WelcomePage';
import Login from '@/modules/Auth/Login';
import Register from '@/modules/Auth/Register';
import Verification from '@/modules/Auth/Verification';
import Main from '@/modules/Main/Main';
import Menu from './Menu/Menu';
import './App.css';

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Open Sans',
          colorBgBase: '#fff',
        },
      }}
    >
      <Layout>
        <Content>
          <Outlet />
        </Content>
        {isAuthenticated && <Menu />}
      </Layout>
    </ConfigProvider>
  );
};

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Main />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';

import WelcomePage from '../modules/Home/WelcomePage';
// import Header from '../shared/components/Layout/Header/Header';
import './App.css';

const { Content } = Layout;

const MainLayout: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: 'Open Sans',
                }
            }}
        >
            <Layout>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
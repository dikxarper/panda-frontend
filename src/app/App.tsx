import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import Home from '../modules/Home/Home';
import Header from '../shared/components/Layout/Header/Header';
import './App.css';

const { Content } = Layout;

const MainLayout: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
import React from "react";
import { Layout as AntdLayout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const { Content } = AntdLayout;

const Layout: React.FC = () => {
    return (
        <AntdLayout>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </AntdLayout>
    );
};

export default Layout;
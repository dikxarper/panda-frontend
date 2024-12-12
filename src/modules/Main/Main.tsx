import { useEffect } from "react";
import { useSelector } from "react-redux";

import Upload from "./Upload/Upload";
import Profile from './Profile/Profile';

const componentMap: { [key: number]: React.FC } = {
    3: Upload,
    4: Profile,
};

const Main: React.FC = () => {
    const menuKey = useSelector((state: any) => state.menu.key);

    useEffect(() => {
        console.log(menuKey);
    }, [menuKey]);

    const ComponentToRender = componentMap[menuKey] || null;

    return ComponentToRender ? <ComponentToRender /> : null;
};

export default Main;
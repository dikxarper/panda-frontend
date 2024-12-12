import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu as AntdMenu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './Menu.module.scss';

import fireDepartmentIcon from '/icons/local_fire_department.png';
import autoAwesomeMotionIcon from '/icons/auto_awesome_motion.png';
import deployedCodeAccountIcon from '/icons/deployed_code_account.png';
import accountCircleIcon from '/icons/account_circle.png';
import { changeMenuKey } from '@/redux/slices/menuSlice';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: '1',
        label: <img src={fireDepartmentIcon} alt="Fire Department" className={styles.menuIcon} />
    },
    {
        key: '2',
        label: <img src={autoAwesomeMotionIcon} alt="Auto Awesome Motion" className={styles.menuIcon} />
    },
    {
        key: '3',
        label: <img src={deployedCodeAccountIcon} alt="Deployed Code Account" className={styles.menuIcon} />
    },
    {
        key: '4',
        label: <img src={accountCircleIcon} alt='Account Circle' className={styles.menuIcon} />
    }
];

const Menu: React.FC = () => {
    const dispatch = useDispatch();
    const menuKey = useSelector((state: any) => state.menu.key);
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>([String(menuKey)]);

    const onSelect: MenuProps['onSelect'] = ({ selectedKeys }) => {
        setSelectedKeys(selectedKeys);
        dispatch(changeMenuKey(Number(selectedKeys[0])));
    };

    useEffect(() => {
        setSelectedKeys([String(menuKey)]);
    }, [menuKey]); 

    return (
        <div style={{
            margin: '0 auto',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 32,
        }}>
            <AntdMenu
                className={styles.menu}
                mode="horizontal"
                theme="dark"
                selectedKeys={selectedKeys}
                onSelect={onSelect}
                items={items}
            />
        </div>
    );
};

export default Menu;
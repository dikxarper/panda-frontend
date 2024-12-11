import React from 'react';
import type { MenuProps } from 'antd';
import { Menu as AntdMenu } from 'antd';
import styles from './Menu.module.scss';

import fireDepartmentIcon from '/icons/local_fire_department.png';
import autoAwesomeMotionIcon from '/icons/auto_awesome_motion.png';
import deployedCodeAccountIcon from '/icons/deployed_code_account.png';
import accountCircleIcon from '/icons/account_circle.png';

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
                defaultSelectedKeys={['1']}
                mode="horizontal"
                theme='dark'
                items={items}
            />
        </div>
    );
};

export default Menu;
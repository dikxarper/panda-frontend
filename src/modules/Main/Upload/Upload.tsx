import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu as AntdMenu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './Upload.module.scss';

import guardianIcon from '/icons/guardian.png';
import faceIcon from '/icons/face_shake.png';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: '1',
        label: <img src={guardianIcon} alt="Guardian" className={styles.menuIcon} />
    },
    {
        key: '2',
        label: <img src={faceIcon} alt="Face Shake" className={styles.menuIcon} />
    },
];

const Upload: React.FC = () => {

    return (
        <div className={styles.container}>
            <div style={{
                margin: '0 auto',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: 32,
            }}>
                <AntdMenu
                    className={styles.menu}
                    defaultSelectedKeys={['1']}
                    mode="horizontal"
                    theme="dark"
                    items={items}
                />
            </div>
        </div>
    );
};

export default Upload;
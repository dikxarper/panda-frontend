import { useDispatch } from "react-redux";
import { Flex, Image, Typography, Space, ThemeConfig, ConfigProvider } from "antd";

import Button from "@/shared/components/ui/Button/Button";
import { clearAuthenticated } from "@/redux/slices/authSlice";
import styles from './Profile.module.scss';

import DiversityIconSvg from '/icons/diversity.svg';
import SettingsIconSvg from '/icons/settings.svg';
import loadingCube from '/icons/mingcute_cube-3d-fill.png';

const { Text } = Typography;

const Profile: React.FC = () => {
    const dispatch = useDispatch();

    const onExit = () => {
        dispatch(clearAuthenticated());
    }

    return (
        <>
            <Flex
                className={styles.banner}
                justify="center"
                align="center"
            >
                <Image
                    src="/icons/empty.png"
                    preview={false}
                    width={32}
                />
            </Flex>
            <div className={styles['profile-info']}>
                <Image
                    className={styles['profile-img']}
                    src="/images/profile_img.png"
                    width={100}
                />
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: 'Secular One',
                            colorBgBase: '#fff',
                        },
                    }}
                >
                    <Space direction="vertical" size='middle'>
                        <Flex justify="space-between" style={{ marginTop: 15 }}>
                            <Text className={styles['profile-username']}>Username</Text>
                            <Space size='large'>
                                <Image
                                    src={DiversityIconSvg}
                                    preview={false}
                                />
                                <Image
                                    src={SettingsIconSvg}
                                    preview={false}
                                />
                            </Space>
                        </Flex>
                        <Text className={styles['profile-text']}>
                            Pandas can eat up to 14 kilograms of bamboo a day, but their bodies only absorb about 17% of what they eat!
                        </Text>
                    </Space>
                </ConfigProvider>
                
                <div className={styles['profile-model-container']}>
                    <Image
                        className={styles['profile-model']}
                        width={200}
                        height={200}
                        src="error"
                        fallback={loadingCube}
                        preview={false}
                    />
                </div>
            </div>
        </>
    )
}

export default Profile;
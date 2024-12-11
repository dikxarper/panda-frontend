import { Button, Flex, Image, Input, Typography } from 'antd';

import logo from '/images/logo.png';
import styles from './Auth.module.scss';
import { ArrowLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

const { Title, Link } = Typography;

const Verification: React.FC = () => {

    const onChange = () => {
        // do smth when all flelds are filled
    }

    const onSubmit = () => {
        // do smth when submit the
    }

    return (
        <div className={styles.container}>
            <Flex
                align='center'
                gap='middle'
                vertical
            >
                <Image
                    src={logo}
                    preview={false}
                    width={64}
                    style={{ marginTop: 24 }}
                />
                <Title level={2}>
                    We sent the code to Email
                </Title>

                <Input.OTP 
                    length={6}
                    size='large'
                    onChange={onChange}
                />

                <Button
                    className={styles['verify-button']}
                    color='default'
                    variant='solid'
                    size='large'
                    icon={<DoubleRightOutlined />} 
                    iconPosition='end'
                    htmlType='submit'
                    onSubmit={onSubmit}
                >
                    Continue
                </Button>

                <Link 
                    href='/register'
                    style={{marginTop: 12}}
                >
                    <ArrowLeftOutlined /> 
                    <span style={{marginLeft: 8}}>
                        Correct login details
                    </span>
                </Link>
            </Flex>
        </div>
    )
}

export default Verification;
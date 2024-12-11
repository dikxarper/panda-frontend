import { Form, Flex, Image, Input, Typography, Checkbox } from 'antd';
import type { FormProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import Button from '@/shared/components/ui/Button/Button';

import logo from '/images/logo.png';
import styles from './Auth.module.scss';

const { Title, Text, Link } = Typography;

type FieldType = {
    name?: string;
    username?: string;
    email?: string;
    password?: string;
};

const Register: React.FC = () => {
    const navigate = useNavigate();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        navigate('/verification');
    };
    
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
                    Welcome to Panda
                </Title>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    requiredMark={false}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: "Please input your password!" },
                            { min: 6, message: "Password must be at least 6 characters!" },
                        ]}
                        help="Password must be at least 6 characters"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                    >
                        <Checkbox>
                            I have read the <a href="#">agreement</a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button
                            className={styles['submit-button']}
                            color='black'
                            htmlType='submit'
                        >
                            Sign up
                        </Button>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Text>Already has an account? <Link className='' href='/login'>Click me</Link></Text>
                    </Form.Item>
                </Form>
            </Flex>
        </div>
    )
}

export default Register;
import { Form, Flex, Image, Input, Typography } from "antd";
import Button from "@/shared/components/ui/Button/Button";
import type { FormProps } from "antd";
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '@/redux/slices/authSlice';

import logo from "/images/logo.png";
import styles from "./Auth.module.scss";

const { Title, Text, Link } = Typography;

type FieldType = {
    username?: string;
    password?: string;
};

const Login: React.FC = () => {
    const dispatch = useDispatch();

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
    };
    
    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    
    const demoOnClick = () => {
        dispatch(setAuthenticated())
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
                <Title level={2}>Welcome Back</Title>
                <div>
                    <Button 
                        className={styles["demo-button"]}
                        onClick={demoOnClick}
                    >
                        Guest Mode
                    </Button>
                    <div>
                        <Text style={{ color: "#595959" }}>For guests, DevStaff :</Text>
                    </div>
                </div>

                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    requiredMark={false}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}
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
                    <Form.Item label={null}>
                        <Button
                            bgcolor="black"
                            className={styles["submit-button"]}
                            htmlType="submit"
                        >
                            Sign in
                        </Button>
                    </Form.Item>
                    <div>
                        <Text>
                            First time here? <Link href="/register">Click me</Link>
                        </Text>
                    </div>
                </Form>
            </Flex>
        </div>
    );
};

export default Login;

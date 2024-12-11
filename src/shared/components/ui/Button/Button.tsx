import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends AntdButtonProps {
    bgcolor?: string;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    color,
    className,
    children,
    ...rest
}) => {
    const colorClass = color ? styles[`${color}-bg`] : '';
    
    return (
        <AntdButton
            className={clsx(styles.button, colorClass, className)}
            {...rest}
        >
            {children}
        </AntdButton>
    );
};

export default Button;
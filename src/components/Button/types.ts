export interface IButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    children?: React.ReactNode;
}
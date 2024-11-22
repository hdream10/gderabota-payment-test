import { ButtonHTMLAttributes, FC } from "react";

interface ButtonPropsTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: FC<ButtonPropsTypes> = ({
  isLoading,
  className,
  children,
  disabled,
  ...other
}) => {
  const isDisabledButton = disabled || isLoading;

  return (
    <button
      className={`rounded-[10px] py-[14px] px-6 text-button transition-all ${
        isDisabledButton
          ? "text-grey-400 bg-grey-100"
          : "text-white bg-primary hover:bg-primary-hover"
      } ${className}`}
      disabled={isDisabledButton}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;

import { ButtonHTMLAttributes, FC } from "react";
import Loader from "../Loader/Loader";

interface ButtonPropsTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: FC<ButtonPropsTypes> = ({
  isLoading = false,
  className,
  children,
  disabled,
  ...other
}) => {
  const isDisabledButton = disabled || isLoading;

  return (
    <button
      className={`relative rounded-[10px] py-[14px] px-6 text-button transition-all ${
        isDisabledButton
          ? "text-grey-400 bg-grey-100"
          : "text-white bg-primary hover:bg-primary-hover"
      } ${isLoading ? "min-h-[48px]" : ""} ${className}`}
      disabled={isDisabledButton}
      {...other}
    >
      {isLoading ? <Loader className="center-absolute" /> : <> {children}</>}
    </button>
  );
};

export default Button;

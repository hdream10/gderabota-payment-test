import { forwardRef, InputHTMLAttributes } from "react";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ label, error, className = "", type = "text", ...other }, ref) => {
    return (
      <div className={`w-full ${className} ${error ? "pb-0" : "pb-[22px]"}`}>
        <label className="block text-grey-800 text-body-2 ml-[1px] mb-1">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          {...other}
          className={`w-full px-[13px] py-[9px] text-body-1 text-grey-1000 placeholder:text-grey-600 border rounded-[10px] ${
            error
              ? "border-error"
              : "border-grey-200 hover:border-grey-800 focus:border-primary"
          }`}
        />
        {error && (
          <span className="block text-error text-body-2 mt-1 ml-[1px]">
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default InputGroup;

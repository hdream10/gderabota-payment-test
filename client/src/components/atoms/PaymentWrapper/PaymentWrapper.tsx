import { FC, ReactNode } from "react";

interface PropsTypes {
  children: ReactNode;
  className?: string;
}

const PaymentWrapper: FC<PropsTypes> = ({ children, className = "" }) => {
  return (
    <div
      className={`relative shadow-shadowWidget bg-white rounded-[10px] w-full max-w-[457px] min-w-[464px] ${className}`}
    >
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 rounded-[10px] border border-strokeGrey
      "
      ></div>
      {children}
    </div>
  );
};

export default PaymentWrapper;

import { Outlet } from "react-router-dom";

const PaymentTemplate = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <Outlet />
    </div>
  );
};

export default PaymentTemplate;

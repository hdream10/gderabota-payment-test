import { PaymentWrapper } from "@/components/atoms";
import { StatusBlock } from "@/components/molecules";
import { StatusPayment } from "@/enums/StatusPayment";
import { FC } from "react";

interface PropsTypes {
  status: StatusPayment;
}

const StatusWidget: FC<PropsTypes> = ({ status }) => {
  return (
    <PaymentWrapper className="p-5 flex items-center justify-center">
      <StatusBlock status={status} />
    </PaymentWrapper>
  );
};

export default StatusWidget;

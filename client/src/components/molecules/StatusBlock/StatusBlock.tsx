import { ErrorIcon, SuccessIcon } from "@/components/atoms/icons";
import { StatusPayment } from "@/enums/StatusPayment";
import { FC } from "react";

interface PropsTypes {
  status: StatusPayment;
}

const StatusBlock: FC<PropsTypes> = ({ status }) => {
  return (
    <div className="flex flex-col items-center">
      {status === StatusPayment.ok ? <SuccessIcon /> : <ErrorIcon />}
      <h5 className="text-center text-title mt-5 text-grey-1000">
        {status === StatusPayment.ok
          ? "Оплата прошла успешно"
          : "Произошла ошибка"}
      </h5>
      
    </div>
  );
};

export default StatusBlock;

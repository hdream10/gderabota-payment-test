import { PaymentWrapper } from "@/components/atoms";
import { PaymentFormFields } from "@/components/molecules";
import { useParams } from "react-router-dom";
import { usePaymentStatusPolling } from "../model/usePaymentStatusPolling";

const PaymentWidget = () => {
  const { pid } = useParams();
  usePaymentStatusPolling(pid);

  return (
    <PaymentWrapper>
      <div className="p-5 pt-8">
        <h5 className="text-title text-grey-1000">Оплата банковской картой</h5>
        <div className="mt-5">
          <PaymentFormFields isProcessing={!!pid} />
        </div>
      </div>
    </PaymentWrapper>
  );
};

export default PaymentWidget;

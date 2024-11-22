import { PaymentWrapper } from "@/components/atoms";
import { PaymentFormFields } from "@/components/molecules";

const PaymentWidget = () => {
  return (
    <PaymentWrapper>
      <div className="p-5 pt-8">
        <h5 className="text-title text-grey-1000">Оплата банковской картой</h5>
        <div className="mt-5">
          <PaymentFormFields />
        </div>
      </div>
    </PaymentWrapper>
  );
};

export default PaymentWidget;

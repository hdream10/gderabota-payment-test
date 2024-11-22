import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendPaymentData } from "@/api/services/payment";
import { IPayment } from "@/types/IPayment";
import { RouterPath } from "@/constants/router";

export const useQueryPayment = (isProcessing?: boolean) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isDisabled = isProcessing || isLoading;

  const submitPayment = async (data: IPayment) => {
    if (isDisabled) return;

    setIsLoading(true);

    try {
      const res = await sendPaymentData(data);
      navigate(`/${RouterPath.check}/${res.pid}`);
    } catch (error) {
      console.error(error);
      navigate(`/${RouterPath.error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitPayment,
    isDisabled,
  };
};
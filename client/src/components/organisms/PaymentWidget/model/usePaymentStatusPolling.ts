import { checkPaymentStatus } from "@/api/services/payment";
import { RouterPath } from "@/constants/router";
import { StatusPayment } from "@/enums/StatusPayment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { check: checkPath, success: successPath, error: errorPath } = RouterPath;

export const usePaymentStatusPolling = (pid?: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!pid) return;
    const baseUrl = `/${checkPath}/${pid}/`;
    const navigateInErrorPage = () => navigate(baseUrl + errorPath);
    const navigateInSuccessPage = () => navigate(baseUrl + successPath);

    const intervalId = setInterval(async () => {
      try {
        const res = await checkPaymentStatus(pid);

        switch (res.status) {
          case StatusPayment.ok:
            clearInterval(intervalId);
            navigateInSuccessPage();
            break;
          case StatusPayment.fail:
            clearInterval(intervalId);
            navigateInErrorPage();
            break;
          case StatusPayment.process:
            break;
          default:
            clearInterval(intervalId);
            navigateInErrorPage();
        }
      } catch (error) {
        clearInterval(intervalId);
        navigate("/" + errorPath);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [pid, navigate]);
};

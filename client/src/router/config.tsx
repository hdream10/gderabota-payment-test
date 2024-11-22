import { PaymentWidget, StatusWidget } from "@/components/organisms";
import { PaymentTemplate } from "@/components/templates";
import { RouterPath } from "@/constants/router";
import { StatusPayment } from "@/enums/StatusPayment";
import { createBrowserRouter } from "react-router-dom";
import { paymentLoader } from "./payment.loader";

const { check, success, error } = RouterPath;

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaymentTemplate />,
    children: [
      {
        index: true,
        element: <PaymentWidget />,
      },
      {
        path: check + "/:pid",
        loader: paymentLoader,
        children: [
          {
            index: true,
            element: <PaymentWidget />,
          },
          {
            path: success,
            element: <StatusWidget status={StatusPayment.ok} />,
          },
          {
            path: error,
            element: <StatusWidget status={StatusPayment.fail} />,
          },
        ],
      },
      { path: "*", element: <StatusWidget status={StatusPayment.fail} /> },
    ],
  },
]);

export default router;

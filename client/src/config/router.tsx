import { PaymentWidget } from "@/components/organisms";
import { PaymentTemplate } from "@/components/templates";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaymentTemplate />,
    children: [
      {
        index: true,
        element: <PaymentWidget />,
      },
    ],
  },
]);

export default router;

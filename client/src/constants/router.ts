import { StatusPayment } from "@/enums/StatusPayment";

export const RouterPath = {
  check: "check",
  success: StatusPayment.ok,
  error: StatusPayment.fail,
};

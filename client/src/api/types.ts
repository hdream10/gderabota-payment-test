import { StatusPayment } from "@/enums/StatusPayment";

export interface PaymentIdentifier {
  pid: string;
}

export interface PaymentStatusResponse extends PaymentIdentifier {
  status: StatusPayment;
  message?: string;
}

export interface PaymentResponse {
  jsonrpc: string;
  id: string;
  result: PaymentIdentifier;
}

import { IPayment } from "@/types/IPayment";
import { PaymentIdentifier, PaymentResponse, PaymentStatusResponse } from "../types";
import { axiosInstance } from "../axiosInstance";
import { v4 as uuidv4 } from "uuid";
import { API_CHECK_PAYMENT, API_SEND_PAYMENT } from "../const";

export async function sendPaymentData(
  paymentData: IPayment
): Promise<PaymentIdentifier> {
  const requestId = uuidv4();

  const payload = {
    jsonrpc: "2.0",
    method: "pay",
    id: requestId,
    params: paymentData,
  };

  const { data } = await axiosInstance.post<PaymentResponse>(
    API_SEND_PAYMENT,
    payload
  );
  return data.result;
}

export async function checkPaymentStatus(pid: string): Promise<PaymentStatusResponse> {
  const { data } = await axiosInstance.get(API_CHECK_PAYMENT + pid);
  return data;
}

import { checkPaymentStatus } from "@/api/services/payment";
import { RouterPath } from "@/constants/router";
import { StatusPayment } from "@/enums/StatusPayment";
import { LoaderFunctionArgs, Params, redirect } from "react-router-dom";

interface RouteParams extends Params {
  pid?: string;
}

const { check: checkPath, success: successPath, error: errorPath } = RouterPath;

export async function paymentLoader({
  params,
  request,
}: LoaderFunctionArgs<RouteParams>) {
  const pid = params?.pid;

  if (!pid) {
    return redirect(`/${errorPath}`);
  }

  const url = new URL(request.url);
  const currentPath = url.pathname;
  const baseUrl = `/${checkPath}/${pid}/`;

  try {
    if (currentPath === baseUrl) return null;
    const res = await checkPaymentStatus(pid);
    let statusPayment = res.status;

    if (res.message) statusPayment = StatusPayment.fail;

    switch (statusPayment) {
      case StatusPayment.ok:
        const fullSuccessPath = baseUrl + successPath;

        if (currentPath === fullSuccessPath) return null;
        return redirect(fullSuccessPath);

      case StatusPayment.fail:
        const fullErrorPath = baseUrl + errorPath;

        if (currentPath === fullErrorPath) return null;
        return redirect(fullErrorPath);

      case StatusPayment.process:
        return redirect(baseUrl);

      default:
        return redirect("/" + errorPath);
    }
  } catch (error) {
    console.error(error);
    return redirect("/" + errorPath);
  }
}

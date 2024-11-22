import * as Yup from "yup";

const defaultError = "Ошибка валидации";

export const paymentValidationSchema = Yup.object().shape({
  pan: Yup.string()
    .transform((value) => value.replace(/\s+/g, ""))
    .matches(/^\d{13,19}$/, defaultError)
    .required(defaultError),

  expire: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/(2[1-6])$/, defaultError)
    .required(defaultError),

  cvc: Yup.string()
    .matches(/^\d{3}$/, defaultError)
    .required(defaultError),

  cardholder: Yup.string()
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, defaultError)
    .required(defaultError),
});

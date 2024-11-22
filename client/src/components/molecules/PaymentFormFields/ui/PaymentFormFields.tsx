import { Button, InputGroup } from "@/components/atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { paymentValidationSchema } from "../model/validationSchema";
import { initialPaymentData } from "../model/const";
import { IPayment } from "../model/types";
import useMaskPan from "@/hooks/useMaskPan";
import {
  formattedCVC,
  formattedCardholder,
  formattedExpire,
} from "../model/utils";

const PaymentFormFields = () => {
  const panRef = useMaskPan();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(paymentValidationSchema),
    defaultValues: initialPaymentData,
  });

  const onSubmit = (data: IPayment) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Controller
        control={control}
        name="pan"
        render={({ field }) => (
          <InputGroup
            {...field}
            ref={panRef}
            label="Номер карты"
            placeholder="0000 0000 0000 0000"
            error={errors.pan?.message}
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur}
          />
        )}
      />
      <div className="flex justify-between">
        <Controller
          control={control}
          name="expire"
          render={({ field }) => (
            <InputGroup
              {...field}
              className="flex-1 max-w-[170px]"
              label="Месяц/Год"
              placeholder="Default"
              error={errors.expire?.message}
              onChange={(e) => {
                const value = formattedExpire(e.target.value);
                field.onChange(value);
              }}
              onBlur={field.onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="cvc"
          render={({ field }) => (
            <InputGroup
              {...field}
              className="flex-1 max-w-[170px]"
              label="Код"
              placeholder="***"
              type="password"
              error={errors.cvc?.message}
              onChange={(e) => {
                const value = formattedCVC(e.target.value);
                field.onChange(value);
              }}
              onBlur={field.onBlur}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="cardholder"
        render={({ field }) => (
          <InputGroup
            {...field}
            label="Владелец карты"
            placeholder="IVAN IVANOV"
            error={errors.cardholder?.message}
            onChange={(e) => {
              const cleanedValue = formattedCardholder(e.target.value);
              field.onChange(cleanedValue);
            }}
            onBlur={field.onBlur}
          />
        )}
      />
      <Button className="ml-auto w-fit" type="submit" disabled={!isValid}>
        Оплатить
      </Button>
    </form>
  );
};

export default PaymentFormFields;

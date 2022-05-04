import * as yup from "yup";

export const validationSchema = yup.object({
  cardNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Card Number can't be blank")
    .test(
      "len",
      "Must be exactly 16 characters",
      (val) => val !== undefined && val.length === 16
    )
    .typeError("Card Number must be number"),

  expirationDate: yup
    .string()
    .matches(
      /(0[1-9]|10|11|12)\/202[2-9]{1}$/,
      "Incorrect Format / Expired Card"
    )
    .typeError("Invalid Date")
    .required(),
  cvv: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Required")
    .test(
      "len",
      "3 characters exact",
      (val) => val !== undefined && val.length === 3
    )
    .typeError("Card Number must be number"),
  amount: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Required"),
});

export const ruValidationSchema = yup.object({
  cardNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Номер карты должен быть числом")
    .required("Необходимо указать номер карты.")
    .test(
      "len",
      "Должно быть ровно 16 символов",
      (val) => val !== undefined && val.length === 16
    )
    .typeError("Номер карты должен быть числом"),

  expirationDate: yup
    .string()
    .matches(
      /(0[1-9]|10|11|12)\/202[2-9]{1}$/,
      "Неверный формат/карта с истекшим сроком действия"
    )
    .typeError("Неверный формат/карта с истекшим сроком действия")
    .required(),
  cvv: yup
    .string()
    .matches(/^[0-9]+$/, "Номер карты должен быть числом")
    .required("Необходимый")
    .test(
      "len",
      "Должно быть ровно 3 символов",
      (val) => val !== undefined && val.length === 3
    )
    .typeError("CVV должен быть числом"),
  amount: yup
    .string()
    .matches(/^[0-9]+$/, "Номер карты должен быть числом")
    .required("Необходимый"),
});

export const isEmptyObject = (obj) => {
  if (typeof obj === "object" && obj != null) {
    return Object.keys(obj).length >= 1 ? false : true;
  }
  return true;
};

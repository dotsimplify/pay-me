import React from "react";
import axios from "axios";
import styles from "./FormPay.module.css";
import {
  isEmptyObject,
  validationSchema,
  ruValidationSchema,
} from "../utils/validation";
import { MdWarningAmber } from "react-icons/md";
import CustomInput from "./InputForm";
import { Formik, Form } from "formik";
import Spinner from "./Spinner";

const FormPay = (props) => {
  const [loading, setLoading] = React.useState(false);
  const onSubmit = (values) => {
    setLoading(true);
    axios.post(process.env.NEXT_PUBLIC_REQUEST_URL, values).then((response) => {
      props.setMessage(response.data.data);
    });
  };
  return (
    <div className=" w-full items-start pl-16">
      <h1 className="text-base mb-4 font-medium text-cardColor dark:text-gray-200 ">
        {props.language ? "Payment Details" : "Детали оплаты"}
      </h1>
      <div>
        <Formik
          initialValues={{
            cardNumber: "",
            expirationDate: "",
            cvv: "",
            amount: "",
          }}
          validationSchema={
            props.language ? validationSchema : ruValidationSchema
          }
          onSubmit={onSubmit}
        >
          {({ errors, touched, values }) => (
            <Form>
              <div
                className={`${
                  errors.cardNumber && touched.cardNumber ? "" : "mb-6"
                } `}
              >
                <div className="w-3/5">
                  <CustomInput
                    title={props.language ? "Card Number" : "Номер карты"}
                    name="cardNumber"
                    placeholder={
                      props.language
                        ? "Enter Card Number"
                        : "Введите номер карты"
                    }
                    errors={errors.cardNumber}
                    touched={touched.cardNumber}
                    maxChar="16"
                    text="text-2xl"
                  />
                </div>
                {errors.cardNumber && touched.cardNumber && (
                  <div className="text-red-500 text-xs flex items-center mt-1 ml-1">
                    <MdWarningAmber className="mr-1 text-sm" />
                    <div> {errors.cardNumber}</div>
                  </div>
                )}
              </div>
              <div
                className={`${
                  errors.expirationDate && touched.expirationDate ? "" : "mb-6"
                } my-1`}
              >
                <div className="w-3/5">
                  <CustomInput
                    title={props.language ? "Expiration Date" : "Срок действия"}
                    name="expirationDate"
                    placeholder="MM/YYYY"
                    errors={errors.expirationDate}
                    touched={touched.expirationDate}
                    maxChar="7"
                  />
                </div>
                {errors.expirationDate && touched.expirationDate && (
                  <div className="text-red-500 text-xs flex items-center mt-1 ml-1">
                    <MdWarningAmber className="mr-1 text-sm" />
                    <div> {errors.expirationDate}</div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 w-3/5">
                <div className={`${errors.cvv && touched.cvv ? "" : "mb-6"}`}>
                  <div className="w-4/5">
                    <CustomInput
                      title="CVV"
                      name="cvv"
                      placeholder="CVV"
                      errors={errors.cvv}
                      touched={touched.cvv}
                      maxChar="3"
                    />
                  </div>
                  {errors.cvv && touched.cvv && (
                    <div className="text-red-500 text-xs flex items-center mt-1 ml-1">
                      <MdWarningAmber className="mr-1 text-sm" />
                      <div> {errors.cvv}</div>
                    </div>
                  )}
                </div>
                <div
                  className={`${errors.amount && touched.amount ? "" : "mb-6"}`}
                >
                  <div className="w-full">
                    <CustomInput
                      title={props.language ? "Amount" : "Деньги"}
                      name="amount"
                      placeholder={props.language ? "Enter Amount" : "Деньги"}
                      errors={errors.amount}
                      touched={touched.amount}
                    />
                  </div>
                  {errors.amount && touched.amount && (
                    <div className="text-red-500 text-xs flex items-center mt-1 ml-1 ">
                      <MdWarningAmber className="mr-1 text-sm" />
                      <div> {errors.amount}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-4">
                {loading ? (
                  <button
                    type="submit"
                    disabled
                    className="block w-3/5 disabled:bg-gray-400 disabled:hover:cursor-not-allowed disabled:hover:text-white disabled:border-transparent outline-none hover:bg-transparent hover:text-cardColor border border-transparent hover:border-cardColor rounded-md text-center font-medium text-white bg-cardColor py-3"
                  >
                    <span className="mr-3">
                      {props.language ? "Processing" : "В процессе"}
                    </span>{" "}
                    <Spinner />
                  </button>
                ) : props.language ? (
                  <button
                    type="submit"
                    disabled={
                      !isEmptyObject(errors) ||
                      !values.cardNumber ||
                      !values.expirationDate ||
                      !values.cvv ||
                      !values.amount
                    }
                    className="block w-3/5 disabled:bg-gray-500 disabled:hover:cursor-not-allowed disabled:hover:text-white outline-none hover:bg-transparent hover:text-cardColor border border-transparent hover:border-cardColor rounded-md text-center font-medium text-white bg-cardColor py-3"
                  >
                    Proceed {values.amount ? `to pay $ ${values.amount}` : ""}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={
                      !isEmptyObject(errors) ||
                      !values.cardNumber ||
                      !values.expirationDate ||
                      !values.cvv ||
                      !values.amount
                    }
                    className={`${styles.linearBg} block w-3/5 disabled:bg-gray-500 disabled:hover:cursor-not-allowed disabled:hover:text-white outline-none rounded-md text-center font-medium text-white  py-3`}
                  >
                    Перейти {values.amount ? `к оплате ₽ ${values.amount}` : ""}
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormPay;

import Portal from "./Portal";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

export default function MessageModal(props) {
  return (
    <>
      {props.open && (
        <Portal selector="#modal">
          <div
            onClick={() => props.setOpen()}
            className="fixed  z-50 top-0 left-0 right-0 bottom-0 bg-slate-800 bg-opacity-80 overflow-hidden"
          >
            <div
              style={{ top: "15%", bottom: "20%", left: "30%", right: "30%" }}
              className="bg-white bg-opacity-100 absolute rounded-md dark:bg-black"
            >
              <div className="flex justify-between items-center border-b  dark:border-gray-600 px-8 py-4 border-slate-300">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-200">
                  {props.language ? "Notification" : "Уведомление"}
                </p>
                <AiOutlineCloseCircle
                  onClick={() => props.setOpen()}
                  className=" text-indigo-500 text-2xl hover:text-red-500 dark:text-gray-200 cursor-pointer"
                />
              </div>
              <div className="flex py-4 ">
                <div className="flex items-center mx-auto pb-2 border-b dark:border-gray-600 border-gray-200 ">
                  <AiOutlineCheckCircle className="text-5xl text-green-600" />
                  <div>
                    <h1 className="ml-3 text-green-500 font-semibold text-2xl">
                      {props.language
                        ? "Payment Successful"
                        : "Оплата прошла успешно"}
                    </h1>

                    <h2 className="ml-3 text-gray-400 text-sm dark:text-gray-200">
                      {props.language
                        ? "Your payment has been processed ! Details are below"
                        : "Ваш платеж обработан! Подробности ниже"}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="text-gray-600 font-medium mx-4">
                <div className="flex justify-start items-center  py-0.5">
                  <h1 className="py-1 mx-4 ml-12 dark:text-gray-200">
                    {props.language ? "Transaction ID" : "ID транзакции"} :{" "}
                  </h1>
                  <h1 className="py-1 dark:text-gray-200">
                    {props.message && props.message._id}
                  </h1>
                </div>
                <div className="flex justify-start items-center  py-0.5">
                  <h1 className="py-1 mx-4 ml-12 dark:text-gray-200">
                    {props.language ? "Card Number" : "Номер карты"} :{" "}
                  </h1>
                  <h1 className="py-1 dark:text-gray-200">
                    {props.message && props.message.cardNumber}
                  </h1>
                </div>
                <div className="flex justify-start items-center  py-0.5">
                  <h1 className="py-1 mx-4 ml-12 dark:text-gray-200">
                    {props.language ? "Expiration Date" : "Срок действия"} :{" "}
                  </h1>
                  <h1 className="py-1 dark:text-gray-200">
                    {props.message && props.message.expirationDate}
                  </h1>
                </div>
                <div className="flex justify-start items-center  py-0.5">
                  <h1 className="py-1 mx-4 ml-12 dark:text-gray-200">CVV :</h1>
                  <h1 className="py-1 dark:text-gray-200">
                    {props.message && props.message.cvv}
                  </h1>
                </div>
                <div className="flex justify-start items-center  py-0.5">
                  <h1 className="py-1 mx-4 ml-12 dark:text-gray-200">
                    {props.language ? "Amount" : "Деньги"} 💸 :{" "}
                  </h1>
                  <h1 className="py-1 dark:text-gray-200">
                    {props.message && props.message.amount}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

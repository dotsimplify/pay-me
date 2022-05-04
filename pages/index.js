import React, { useState } from "react";
import Card from "../components/Card";
import FormPay from "../components/FormPay";
import MessageModal from "../components/MessageModal";
import { isEmptyObject } from "../utils/validation";

const index = (props) => {
  const [message, setMessage] = useState({});
  return (
    <div
      style={{
        minHeight: "90.5vh",
      }}
      className="dark:bg-gray-800"
    >
      {isEmptyObject(message) ? (
        <div className=" pt-20 dark:bg-gray-800">
          <div className="grid grid-cols-2 grid-flow-row items-center">
            <Card language={props.language} />
            <FormPay language={props.language} setMessage={setMessage} />
          </div>
        </div>
      ) : (
        <MessageModal
          language={props.language}
          open={message}
          message={message}
          setOpen={() => setMessage("")}
        />
      )}
    </div>
  );
};

export default index;

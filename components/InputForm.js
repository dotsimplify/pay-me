import { Field } from "formik";

const CustomInput = (props) => {
  return (
    <div>
      <div className=" text-gray-500 text-sm mb-1 dark:text-gray-300">
        {props.title}
      </div>
      <div>
        <Field
          placeholder={props.placeholder}
          maxLength={props.maxChar}
          name={props.name}
          className={`${
            props.errors && props.touched ? "border-red-500" : "border-gray-300"
          } outline-none border rounded leading-relaxed tracking-widest  py-2 focus:pl-4 font-normal transition-all duration-300 ${
            props.text ? props.text : "text-base"
          } focus:border-indigo-500 w-full dark:bg-gray-500 dark:text-gray-100 dark:border-gray-500 px-3 text-gray-700 caret-indigo-600 dark:bg-darkmodeSecoundry `}
        />
      </div>
    </div>
  );
};

export default CustomInput;

import React from "react";
import { MdWifi } from "react-icons/md";

const Card = (props) => {
  return (
    <div className=" border-full">
      <div className="bg-cardColor dark:bg-gray-600 h-[13rem] w-[22rem] mx-auto rounded-md p-2 px-3.5 shadow-2xl">
        <h1 className="text-right font-semibold text-white pt-2">
          {props.language ? "ROSBANK" : "РОСБАНК"}
        </h1>
        <div className="flex justify-between items-center">
          <div>
            <img src="/chip.png" className="w-1/3 " alt="" />
          </div>
          <MdWifi className="text-3xl text-white rotate-90" />
        </div>
        <h1 className="text-xl text-white ml-8 pt-2 text-justify">
          1234 5678 9034 7854
        </h1>
        <div className="text-right">
          <h3 className="text-white">12/24</h3>
        </div>
        <h2 className="text-base font-medium text-white ml-4">
          {props.language ? "CARD HOLDER NAME" : "Имя владельца карты"}
        </h2>
      </div>
    </div>
  );
};

export default Card;

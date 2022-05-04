import React from "react";
import Link from "next/link";
import { BiSun } from "react-icons/bi";
import { HiMoon } from "react-icons/hi";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className="p-2 text-gray-800 dark:bg-gray-800">
      <div className="container flex justify-between mx-auto px-2">
        <Link href="/">
          <a
            aria-label="Homepage"
            className="flex items-center p-2 dark:text-gray-200"
          >
            {props.language ? "Best Pay" : "Амба Пей"}
          </a>
        </Link>

        <div className="rounded-lg pl-2 flex items-center mx-4 lg:mr-0">
          <HiMoon
            title="Dark Mode"
            className=" text-2xl mr-2 cursor-default dark:text-gray-200"
          />
          <label>
            <input type="checkbox" className={styles.checkkbox} />
            <span
              onClick={props.darkModeHandler}
              className={styles.checkboxSpan}
            ></span>
          </label>
          <BiSun
            title="Light Mode"
            className="text-2xl ml-2 mr-2 cursor-default dark:text-gray-200 "
          />
        </div>
        <ul className="items-stretch hidden space-x-2 md:flex md:items-center">
          {props.language ? (
            <li
              onClick={() => props.setLanguage(false)}
              className="flex cursor-pointer"
            >
              <h4 className="text-cardColor dark:text-gray-200 px-4 -mb-1">
                Русский
              </h4>
            </li>
          ) : (
            <li
              onClick={() => props.setLanguage(true)}
              className="flex cursor-pointer"
            >
              <h4 className="text-cardColor px-4 -mb-1 dark:text-gray-200">
                English
              </h4>
            </li>
          )}
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

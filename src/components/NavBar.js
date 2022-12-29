import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          Add Task
        </Link>
      </li>
      <li>
        <Link className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          My Task
        </Link>
      </li>
      <li>
        <Link className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
          Complete Task
        </Link>
      </li>
      <li>
        <div className="lg:flex items-center mt-4 lg:mt-0">
          <button
            className="ml-4 mb-4 lg:mb-0  text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
            aria-label="show notifications"
          >
            <ThemeToggle />
          </button>

          <button
            type="button"
            className="flex items-center focus:outline-none ml-4"
            aria-label="toggle profile dropdown"
          >
            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </div>

            <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
              Khatab wedaa
            </h3>
          </button>
        </div>
      </li>
    </>
  );
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <a
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="/"
              >
                TaskQuery
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* 
            Desk tom Menu 
            */}
          <div className="hidden w-full px-6 py-4 bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            <ul className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              {menuItems}
            </ul>
          </div>

          {/*Mobile tom Menu*/}
          <div className="lg:hidden">
            <div
              className={
                isOpen
                  ? "absolute w-full inset-x-0 z-20 px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800"
                  : "hidden"
              }
            >
              <ul className="flex flex-col ml-10 lg:ml-0 lg:flex-row lg:items-center lg:mx-8">
                {menuItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

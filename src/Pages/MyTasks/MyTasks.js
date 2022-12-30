import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
const MyTasks = () => {
  const { task, imgURL, detail } = useLoaderData();
  console.log(task);
  return (
    <div className="container min-h-screen mt-6 mx-auto">
      <div className="pb-6 md:py-0 md:w-1/2 mx-auto">
        <details className="w-full border rounded-lg outline-none">
          <summary className="px-4 py-6 text-gray-600 dark:text-gray-200">
            Task1
          </summary>
          <div className="px-4 py-6 pt-0 ml-4 -mt-4 ">
            <p className="text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet.
            </p>
            <div className="flex items-center pt-6">
              <FaEdit className="text-2xl text-gray-800 dark:text-gray-100 cursor-pointer" />
              <FaTrash className="text-2xl text-red-500 ml-2 cursor-pointer" />
              <button className="border-0 outline-none text-base font-medium text-white bg-green-400 px-2 py-1 rounded-md ml-2">
                Completed
              </button>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default MyTasks;

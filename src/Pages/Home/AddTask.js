import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  const [details, setDetails] = useState("");
  const AddTasksToDB = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.image.files[0];

    const task = {
      task: name,
      detail: details,
      imgURL: "",
    };

    fetch(`http://localhost:3001/tasks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div className="h-[100vh]">
      <section className="flex flex-col max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row py-20 my-10 justify-center">
        <div className="pb-6 md:py-0 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-100 pb-3">
            Add Task
          </h2>
          <form onSubmit={AddTasksToDB}>
            <div className="flex flex-row justify-between p-1.5 overflow-hidden border-0 border-b-2 border-gray-800 dark:border-gray-600 ">
              <input
                className="flex-1 px-2 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                type="text"
                name="name"
                placeholder="Task Name"
                aria-label="Task Name"
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="dropzone-file"
                className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 rounded-md dark:bg-gray-800 dark:text-gray-300 border-gray-800 dark:border-gray-600  cursor-pointer"
              >
                <input id="dropzone-file" type="file" name="image" />
              </label>
            </div>
            <div className="w-full mt-4">
              <label className="block mb-2 text-xl font-medium text-gray-600 dark:text-gray-200">
                Details
              </label>

              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border-2 rounded-md dark:bg-gray-800 dark:text-gray-300 border-gray-800 dark:border-gray-600  "
                placeholder="Details"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-3 mt-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              <FaPlus />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddTask;

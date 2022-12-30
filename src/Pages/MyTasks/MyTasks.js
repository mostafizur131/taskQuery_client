import React from "react";

const MyTasks = () => {
  return (
    <div className="container min-h-screen mt-6 mx-auto">
      <div className="pb-6 md:py-0 md:w-1/2 mx-auto">
        <details className="w-full border rounded-lg outline-none">
          <summary className="px-4 py-6 text-gray-600 dark:text-gray-200">
            Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 dark:text-gray-200">
            Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
            porttitor egestas tincidunt neque vehicula potenti.{" "}
          </p>
        </details>
      </div>
    </div>
  );
};

export default MyTasks;

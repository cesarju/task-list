import React from "react";
import { useState, useEffect } from "react";

import { GrFormClose } from "react-icons/gr";

export const Task = ({ nameTask, status }) => {
  const [statusTask, setStatusTask] = useState(status);
  const [text, setText] = useState("");
  const [styleTask, setStyleTask] = useState(
    "text-2xl font-medium text-gray-900 truncate dark:text-white"
  );
  const [style, setStyle] = useState(
    "bg-green-100 text-green-800 text-xs font-semibold mr-10 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
  );

  const handleStatus = (s) => {
    if (s) {
      setStatusTask(false);
      setText("Completado");
      setStyle(
        "w-24 bg-green-100 text-green-800 text-xs font-semibold mr-10 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
      );
      setStyleTask(
        "text-2xl font-medium text-gray-900 truncate dark:text-white line-through"
      );
    } else {
      setStatusTask(true);
      setText("Pendite");
      setStyle(
        "w-20 bg-red-100 text-red-800 text-xs font-semibold mr-10 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
      );
      setStyleTask(
        "text-2xl font-medium text-gray-900 truncate dark:text-white "
      );
    }
  };
  useEffect(() => {
    handleStatus();
  }, []);

  return (
    <div className="flex flex-row justify-between">
      <div class="p-10 w-1/3 bg-white rounded-lg border shadow-md sm:p-4 dark:bg-gray-800 dark:border-gray-700">
        <div class="flow-root">
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="sm:pt-1">
              <div class="flex justify-center items-center space-x-6">
                <input
                  type={"checkbox"}
                  className="w-6 h-6"
                  onClick={() => handleStatus(statusTask)}
                />

                <div class="flex-1 min-w-0">
                  <p class={styleTask}>{nameTask}</p>
                  <p class="">{status}</p>
                  <p class={style}>{text}</p>
                </div>

                <GrFormClose className="w-9 h-9" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

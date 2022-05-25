import React from "react";
import { useState, useEffect } from "react";
export const Task = ({ nameTask, status }) => {
  const [statusTask, setStatusTask] = useState(status);
  const [text, setText] = useState("");
  const [style, setStyle] = useState(
    "bg-green-100 text-green-800 text-xs font-semibold mr-10 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
  );

  const handleStatus = (s) => {
    if (s) {
      setStatusTask(false);
      setText("Completado");
      setStyle(
        "bg-green-100 text-green-800 text-xs font-semibold mr-10 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
      );
    } else {
      setStatusTask(true);
      setText("Pendite");
      setStyle(
        "bg-red-100 text-red-800 text-xs font-semibold mr-10 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
      );
    }
  };
  useEffect(() => {
    handleStatus();
  }, []);

  return (
    <div className="flex flex-row">
      <div className="flex flex-row items-center w-96 gap-8 pl-10 justify-start m-1 text-white bg-gradient-to-r from-cyan-500 to-blue-500 :bg-gradient-to-bl    rounded-lg text-2xl">
        <p>📚</p>
        <div className="flex flex-col">
          <li>{nameTask}</li>
          <button onClick={() => handleStatus(statusTask)} class={style}>
            {text}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between m-2 gap-2  ">
        <p className="w-28">{status}</p>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </button>

        <button
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

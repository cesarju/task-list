import React from "react";
import { useState } from "react";

export const Task = ({ item, onDelete }) => {
  const [statusTask, setStatusTask] = useState(item.status);
  const [text, setText] = useState("Pendiente");
  const [styleTask, setStyleTask] = useState(
    "text-2xl font-medium text-gray-900 truncate dark:text-white"
  );
  const [style, setStyle] = useState(
    "w-20 bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
  );

  const handleStatus = (event) => {
    if (!statusTask) {
      setStatusTask(!statusTask);
      setText("Completado");
      setStyle(
        "w-21 bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
      );
      setStyleTask(
        "text-2xl font-medium text-gray-900 truncate dark:text-white line-through"
      );
    } else {
      setStatusTask(!statusTask);
      setText("Pendiente");
      setStyle(
        "w-20 bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
      );
      setStyleTask(
        "text-2xl font-medium text-gray-900 truncate dark:text-white "
      );
    }
  };

  return (
    <li className="w-full">
      <div className="flex justify-between bg-white border-2 rounded-lg px-4 py-2 gap-3 mt-2 w-100%">
        <div className="grid">
          <p className={styleTask}>{item.name}</p>
        </div>
        <div>
          <button className={style} onClick={handleStatus}>
            {text}
          </button>
          <button className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-xl mr-1 ">
            Edit
          </button>
          <button
            className="bg-red-800 text-white text-sm leading-6 font-medium py-2 px-3 rounded-xl"
            onClick={(event) => onDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

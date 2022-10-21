import React from "react";

import { useState } from "react";

const NewTask = ({ addNewTask }) => {
  const [valueInput, setValueInput] = useState("");

  const handleOnchange = (event) => {
    const eventOnChange = event.target.value;
    setValueInput(eventOnChange);
  };

  const handleNewTask = (e) => {
    e.preventDefault();
    console.log(valueInput);
    alert(addNewTask);
  };

  return (
    <form className="">
      <div className="relative">
        <input
          type="text"
          className="outline-none block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
          placeholder="Create new task..."
          onChange={handleOnchange}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleNewTask}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default NewTask;

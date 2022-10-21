import React, { useState } from "react";
import { Task } from "./Task";

export const TaskList = () => {
  /*  const tasks = [
    {
      id: 1,
      name: "Desayunar",
      status: false,
    },
    {
      id: 2,
      name: "Deportes",
      status: true,
    },
    {
      id: 3,
      name: "Estudiar matematicas",
      status: false,
    },
    {
      id: 4,
      name: "Hacer la tara de react",
      status: false,
    },
    {
      id: 5,
      name: "Leer un libro",
      status: false,
    },
  ]; */
  const [todoTask, setTodoTask] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleOnchange = (event) => {
    const eventOnChange = event.target.value;
    setValueInput(eventOnChange);
  };

  const handleNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: valueInput,
      status: false,
    };
    setTodoTask([...todoTask, newTask]);
    setValueInput("");
  };

  const handleDelete = (id) => {
    const temporal = todoTask.filter((item) => item.id !== id);
    setTodoTask(temporal);
  };

  const handleEditTask = (id) => {
    setIsEdit(!isEdit);
  };

  function handleClickEdit(event) {
    event.preventDefault();
  }

  const InpuEdit = () => {
    const [editText, setEditText] = useState();
    return (
      <form>
        <input
          className="outline-none block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Edit"
        />
        <button onClick={handleClickEdit}>Actualizar</button>
      </form>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center relative -top-44">
      <div className="p-10 w-1/3 ">
        <form>
          <div className="relative">
            <input
              type="text"
              className="outline-none block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
              placeholder="Create new task..."
              onChange={handleOnchange}
              value={valueInput}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleNewTask}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <ul className="">
          {todoTask.map((e) => {
            return (
              <Task
                key={e.id}
                item={e}
                onDelete={handleDelete}
                onEdit={handleEditTask}
              />
            );
          })}
          {isEdit ? <InpuEdit /> : "mostrar tareas"}
        </ul>
      </div>
    </div>
  );
};

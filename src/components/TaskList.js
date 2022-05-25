import React from "react";
import { Task } from "./Task";

export const TaskList = () => {
  const tasks = ["desayunar", "deportes", "estudiar", "almorzar", "cenar"];

  return (
    <ul className="flex justify-around  border-8 border-indigo-600">
      <div className="w-96">
        <h1 className="text-4xl">Lista de tareas</h1>
        {tasks.map((e) => {
          return <Task key={e} nameTask={e} />;
        })}
      </div>
      <div className="">
        <h1 className="flex text-4xl justify-center">
          Lista de tareas para compretar
        </h1>
        {tasks.map((e) => {
          return (
            <div className="flex flex-row items-center ">
              <Task key={e} nameTask={e}></Task>
              <input type="checkbox" />
            </div>
          );
        })}
      </div>
    </ul>
  );
};

import React from "react";
import { Task } from "./Task";
import NewTask from "./NewTask";

export const TaskList = () => {
  const tasks = [
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
  ];

  return (
    <div className="relative -top-64  -right-1/3  ">
      <ul className=" flex flex-col ">
        <div class="p-10 w-1/3 ">
          <NewTask />
        </div>
        <div className="flex flex-col">
          {tasks.map((e) => {
            return <Task key={e.id} nameTask={e.name} status={e.status} />;
          })}
        </div>
      </ul>
    </div>
  );
};

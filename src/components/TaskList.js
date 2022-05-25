import React from "react";
import { Task } from "./Task";

export const TaskList = () => {
  const tasks = [
    {
      id: 1,
      name: "desayunar",
      status: false,
    },
    {
      id: 2,
      name: "deportes",
      status: true,
    },
    {
      id: 3,
      name: "estudiar",
      status: false,
    },
    {
      id: 4,
      name: "almorzar",
      status: false,
    },
    {
      id: 5,
      name: "cenar",
      status: false,
    },
  ];

  return (
    <ul className="flex justify-center ">
      <div className="">
        {tasks.map((e) => {
          return <Task key={e.id} nameTask={e.name} status={e.status} />;
        })}
      </div>
    </ul>
  );
};

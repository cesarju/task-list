import React from "react";

export const Task = ({ nameTask }) => {
  return (
    <div className=" m-1 w-40 text-xl bg-slate-300 ">
      <li>{nameTask}</li>
    </div>
  );
};

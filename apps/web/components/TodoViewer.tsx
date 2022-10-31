import React from "react";

type Props = {
  todo: string[];
};

export const TodoViewer = ({ todo }: Props) => {
  return (
    <>
      <ul>
        {todo.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

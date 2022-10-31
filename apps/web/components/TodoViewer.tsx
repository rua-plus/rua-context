import React from "react";

type Props = {
  todo: string[];
};

const TodoViewer = ({ todo }: Props) => {
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

export default TodoViewer;

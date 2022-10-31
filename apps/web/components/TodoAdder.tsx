import React, { ChangeEventHandler } from "react";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  handleSet: () => void;
};

const TodoAdder = ({ value, onChange, handleSet }: Props) => {
  return (
    <>
      <input value={value} onChange={onChange} />
      <button onClick={handleSet}>Add</button>
    </>
  );
};

export default TodoAdder;

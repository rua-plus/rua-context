import { Button } from "ui";
import useTodoStore from "store/todo";
import { useState } from "react";
import TodoViewer from "components/TodoViewer";
import TodoAdder from "components/TodoAdder";

const TodoComponent = () => {
  const [todo, setTodo] = useTodoStore();

  const [tempTodo, setTempTodo] = useState("");
  const handleSet = () => {
    if (!tempTodo) return;
    setTodo((d) => {
      d.push(tempTodo);
    });
    setTempTodo("");
  };

  return (
    <div>
      <TodoViewer todo={todo} />

      <div>
        <TodoAdder
          value={tempTodo}
          onChange={(e) => setTempTodo(e.target.value)}
          handleSet={handleSet}
        />
      </div>
    </div>
  );
};

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />

      <TodoComponent />
      <hr />
      <TodoComponent />
      <hr />
      <TodoComponent />
    </div>
  );
}

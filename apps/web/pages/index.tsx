import { Button } from "ui";
import useTodoStore from "store/todo";
import { useState } from "react";

export default function Web() {
  const [todo, setTodo] = useTodoStore();
  const [tempTodo, setTempTodo] = useState("");

  return (
    <div>
      <h1>Web</h1>
      <Button />

      <div>
        <ul>
          {todo.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>

        <div>
          <input
            value={tempTodo}
            onChange={(e) => setTempTodo(e.target.value)}
          />
          <button
            onClick={() =>
              setTodo((d) => {
                d.push({ id: 1, value: tempTodo });
              })
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

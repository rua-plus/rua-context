import { createStore } from "rua-context";

const initialTodo = [
  {
    id: 0,
    value: "React",
  },
  {
    id: 1,
    value: "Vue",
  },
];

const { useStore: useTodoStore } = createStore(initialTodo);

export default useTodoStore;

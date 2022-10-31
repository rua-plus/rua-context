import { createStore } from "rua-context";

const initialTodo = ["React", "Vue"];
const { useStore: useTodoStore } = createStore(initialTodo);

export default useTodoStore;

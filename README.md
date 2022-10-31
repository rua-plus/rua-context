# RUA Context

A global store for React.

## Usage

```typescript
// todoStore.ts
import { createStore } from "rua-context";

const initialTodo = ["React", "Vue"];
const { useStore: useTodoStore } = createStore(initialTodo);

export default useTodoStore;
```

```tsx
// Component.tsx
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
```

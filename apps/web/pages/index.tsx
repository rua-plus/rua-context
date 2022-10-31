import { Button } from "ui";
import counter from "../app/counterSlice";

console.log(counter.actions);

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}

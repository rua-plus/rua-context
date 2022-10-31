import { createSlice } from "rua-context";

const counterState = {
  value: 0,
};

const counter = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {},
});

export default counter;
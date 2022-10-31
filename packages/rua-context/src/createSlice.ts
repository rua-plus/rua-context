import {} from "./index";
import { RUAAction, RUAState } from "./store";

export type CreateSliceProps<S extends RUAState> = {
  name: string;
  initialState: S;
  reducers: Record<string, (state: S, action?: RUAAction) => void | S>;
};

const createSlice = <S extends RUAState>({
  name,
  initialState,
  reducers,
}: CreateSliceProps<S>) => {
  const caseReducers = reducers;
  const _reducers = () => {};
  const actions = Object.keys(reducers).reduce((prev, cur) => {
    return { ...prev, [cur]: () => {} };
  }, {});

  return {
    name,
    actions,
  };
};

export default createSlice;

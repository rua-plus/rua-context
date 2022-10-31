import createAction from "./createAction";
import { CaseReducer } from "./createReducer";
import { RUAAction, RUAState } from "./store";

const getType = (slice: string, actionKey: string) => {
  return `${slice}/${actionKey}`;
};

export type CreateSliceProps<S extends RUAState> = {
  name: string;
  initialState: S;
  reducers: Record<string, (state: S, action?: RUAAction) => void | S>;
};

const createSlice = <S extends RUAState>(option: CreateSliceProps<S>) => {
  const reducers = option.reducers ?? {};

  const actionCreators: Record<string, Function> = {};
  const sliceCaseReducersByName: Record<string, CaseReducer> = {};
  const sliceCaseReducersByType: Record<string, CaseReducer> = {};

  const actions = Object.keys(option.reducers).forEach((reducerName) => {
    const type = getType(option.name, reducerName);
    const caseReducers = reducers[reducerName];
    actionCreators[reducerName] = createAction(type);
  });

  return {
    name,
    actions,
  };
};

export default createSlice;

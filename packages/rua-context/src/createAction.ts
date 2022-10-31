import { Action } from "./types/actions";

export type PayloadAction<
  P = void,
  T extends string = string,
  M = never,
  E = never
> = {
  payload: P;
  type: T;
} & ([M] extends [never]
  ? {}
  : {
      meta: M;
    }) &
  ([E] extends [never]
    ? {}
    : {
        error: E;
      });

const createAction = (type: string) => {
  const actionCreator = (...args: unknown[]) => {
    return {
      type,
      playload: args[0],
    };
  };

  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = (action: Action<unknown>): action is PayloadAction =>
    action.type === type;

  return actionCreator;
};

export default createAction;

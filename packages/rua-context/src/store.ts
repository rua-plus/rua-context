import { useSyncExternalStore } from "react";

export type RUAState = Record<string, unknown> | unknown[];
export type RUAAction<P = unknown, T extends string = string> = {
  payload: P;
  type: T;
};
export type RUAReducer<S extends RUAState, A extends RUAAction> = (
  state: S,
  action: A
) => S;
export type RUADispatch<A extends RUAAction> = (action: A) => void;
export type GetSnapshot<S> = () => S;
export type Subscribe = (listener: () => void) => () => void;

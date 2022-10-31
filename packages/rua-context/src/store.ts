import produce, { Draft } from "immer";
import { useSyncExternalStore } from "react";

export type RUAState = Record<string, unknown> | unknown[];
export type SetState<S extends RUAState> = (
  stateOrFn: S | ((state: Draft<S>) => void)
) => void;
export type GetSnapshot<S extends RUAState> = () => S;
export type Subscribe = (listener: () => void) => () => void;
export type UseStore<S extends RUAState> = () => [S, SetState<S>];
export type CreateStore = <S extends RUAState>(
  initialState: S
) => {
  getSnapshot: GetSnapshot<S>;
  setState: SetState<S>;
  subscribe: Subscribe;
  useStore: UseStore<S>;
};

const createStore = <S extends RUAState>(initialState: S) => {
  let state = initialState;

  const listeners = new Set<() => void>();
  const getSnapshot = () => state;
  const setState: SetState<S> = (stateOrFn) => {
    if (typeof stateOrFn === "function") {
      const newState = produce(state, (draft) => {
        stateOrFn(draft);
      });
      state = newState;
    } else {
      state = stateOrFn;
    }
    // state =
    //   typeof stateOrFn === "function"
    //     ? produce(state, (draft) => {
    //         stateOrFn(draft);
    //       })
    //     : stateOrFn;
    listeners.forEach((listener) => listener());
  };
  const subscribe = (listener: () => void) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  const useStore: UseStore<S> = () => [
    useSyncExternalStore(subscribe, getSnapshot, getSnapshot),
    setState,
  ];

  return {
    getSnapshot,
    setState,
    subscribe,
    useStore,
  };
};

export default createStore;

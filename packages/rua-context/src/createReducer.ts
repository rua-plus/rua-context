import type { Draft } from "immer";
import { Action, AnyAction } from "./types/actions";

export type CaseReducer<S = any, A extends Action = AnyAction> = (
  state: Draft<S>,
  action: A
) => S | void | Draft<S>;

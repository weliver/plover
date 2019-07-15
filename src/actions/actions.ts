import { action } from "typesafe-actions";

// use typescript enum rather than action constants
export enum actionTypes {
  ADD = "ADD",
  DELETE = "DELETE"
}

export const listActions = {
  add: (item: string) => action(actionTypes.ADD, item),
  delete: (idx: number) => action(actionTypes.DELETE, idx)
};
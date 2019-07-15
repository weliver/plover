import { action } from "typesafe-actions";

// use typescript enum rather than action constants
export enum listActionTypes {
  ADD = "ADD",
  DELETE = "DELETE"
};

export const listActions = {
  add: (item: string) => action(listActionTypes.ADD, item),
  delete: (idx: number) => action(listActionTypes.DELETE, idx)
};
import { createStandardAction } from "typesafe-actions";
import { ListItem } from "../models/listItem"
// use typescript enum rather than action constants
// export enum listActionTypes {
//   ADD = "ADD",
//   DELETE = "DELETE"
// };

const ADD = "list/ADD";
const DELETE = "list/DELETE";

export const add = createStandardAction(ADD).map(
  (payload: { item: string }) => ({
      payload: {
        ...payload
      } as ListItem
    })
);
export const remove = createStandardAction(DELETE)<{ idx: number }>();


// export const listActions = {
//   add: (item: string) => action(listActionTypes.ADD, item),
//   delete: (idx: number) => action(listActionTypes.DELETE, idx)
// };

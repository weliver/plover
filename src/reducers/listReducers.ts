import * as ListTypes from "ListTypes";
import { listActionTypes } from "../actions";

interface IListModel {
  count: number;
  list: string[];
}

export const initialState: IListModel = {
  count: 2,
  list: ["Do the laundry", "Do the dishes"]
};

export const listReducer = (state: IListModel = initialState, action: ListTypes.RootAction) => {
  switch (action.type) {
    case listActionTypes.ADD: {
      return {
        ...state,
        count: state.count + 1,
        list: [...state.list, action.payload]
      };
    }
    case listActionTypes.DELETE: {
      const oldList = [...state.list];
      oldList.splice(action.payload, 1);
      const newList = oldList;

      return {
        ...state,
        count: state.count - 1,
        list: newList
      };
    }
    default:
      return state;
  }
};
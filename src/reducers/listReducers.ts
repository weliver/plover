import { ActionType, getType } from "typesafe-actions";

import * as listActions from "../actions/listActions";

interface IListModel {
  count: number;
  list: string[];
}

export const initialState: IListModel = {
  count: 2,
  list: ["Do the laundry", "Do the dishes"]
};

export type ListAction = ActionType<typeof listActions>
export const listReducer = (state: IListModel = initialState, action: ListAction) => {
  switch (action.type) {
    case getType(listActions.add): {
      return {
        ...state,
        count: state.count + 1,
        list: [...state.list, action.payload]
      };
    }
    case getType(listActions.remove): {
      const oldList = [...state.list];
      oldList.splice(action.payload, 1);
      const newList = oldList;
      return {
        ...state,
        count: state.count - 1,
        list: newList
      }
    }
    default:
      return state;
  }
};
  //   case listActionTypes.ADD: {
  //     return {
  //       ...state,
  //       count: state.count + 1,
  //       list: [...state.list, action.payload]
  //     };
  //   }
  //   case listActionTypes.DELETE: {
  //     const oldList = [...state.list];
  //     oldList.splice(action.payload, 1);
  //     const newList = oldList;
  //
  //     return {
  //       ...state,
  //       count: state.count - 1,
  //       list: newList
  //     };
  //   }
  //   default:
  //     return state;
  // }

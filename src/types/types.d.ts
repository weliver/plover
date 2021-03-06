declare module "ListTypes" {
  import { StateType, ActionType } from "typesafe-actions";
  // export type Store = StateType<typeof import('./index').default>;
  export type RootAction = ActionType<typeof import("../actions/index")>;
  export type RootState = StateType<typeof import("../reducers").default>;
}
import { Action_Type } from "./../action_types";

interface AddNewTodo {
  type: Action_Type.ADD_NEW_TODO;
  payload: Todo;
}
interface UpdateTodo {
  type: Action_Type.UPDATE_TODO;
  payload: Todo;
}
interface DeleteTodo {
  type: Action_Type.DELETE_TODO;
  payload: number;
}

interface SearchTodo {
  type: Action_Type.SEARCH_TODO;
  payload: string;
}

interface DeleteListCheckTodo {
  type: Action_Type.DELETE_LIST_CHECK_TODO;
  payload: number[];
}
interface UpdateActiveID {
  type: Action_Type.UPDATE_ACTIVE_ID;
  payload: number;
}
interface AddCheckTodo {
  type: Action_Type.ADD_CHECK_TODO;
  payload: number;
}

interface DeleteCheckTodo {
  type: Action_Type.DELETE_CHECK_TODO;
  payload: number;
}
export type Action_Model =
  | AddNewTodo
  | UpdateTodo
  | DeleteTodo
  | SearchTodo
  | DeleteListCheckTodo
  | UpdateActiveID
  | AddCheckTodo
  | DeleteCheckTodo;

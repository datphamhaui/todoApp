import { Action_Type } from "./../action_types";
import { Action_Model } from "./../action_models";

export const addTodo = (todo: Todo): Action_Model => ({
  type: Action_Type.ADD_NEW_TODO,
  payload: todo,
});

export const updateTodo = (todo: Todo): Action_Model => ({
  type: Action_Type.UPDATE_TODO,
  payload: todo,
});
export const deleteTodo = (id: number): Action_Model => ({
  type: Action_Type.DELETE_TODO,
  payload: id,
});

export const searchTodo = (key: string): Action_Model => ({
  type: Action_Type.SEARCH_TODO,
  payload: key,
});

export const deleteListCheckTodo = (list: number[]): Action_Model => ({
  type: Action_Type.DELETE_LIST_CHECK_TODO,
  payload: list,
});

export const updateActiveID = (id: number): Action_Model => ({
  type: Action_Type.UPDATE_ACTIVE_ID,
  payload: id,
});

export const addCheckTodo = (id: number): Action_Model => ({
  type: Action_Type.ADD_CHECK_TODO,
  payload: id,
});

export const deleteCheckTodo = (id: number): Action_Model => ({
  type: Action_Type.DELETE_CHECK_TODO,
  payload: id,
});

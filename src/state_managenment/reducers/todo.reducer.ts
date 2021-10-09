import { Action_Model } from "../actions/action_models";
import { Action_Type } from "../actions/action_types";
import { updateTodo } from "../../share/todo";

interface InitialValues {
  todoList: Todo[];
  activeID: number;
  checkTodo: number[];
}

const initialValues = {
  todoList: [
    {
      id: 1,
      name: "Code",
      description: "Testing clean code",
      duedate: "2021-10-20",
      piority: "Normal",
    },
    {
      id: 2,
      name: "not",
      description: "Testing clean code",
      duedate: "2021-10-20",
      piority: "Normal",
    },
  ],
  activeID: -1,
  checkTodo: [],
};

const todoReducer = (
  state: InitialValues = initialValues,
  action: Action_Model
) => {
  switch (action.type) {
    //add todo
    case Action_Type.ADD_NEW_TODO:
      const newTodo = action.payload;

      console.log(newTodo);

      return { ...state, todoList: [newTodo, ...state.todoList] };

    //update todo
    case Action_Type.UPDATE_TODO:
      console.log(action.payload);
      return {
        ...state,
        todoList: updateTodo(action.payload, state.todoList),
      };

    //delete todo
    case Action_Type.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };

    //search todo
    case Action_Type.SEARCH_TODO:
      state = Object.assign({}, state);
      const todoList = state.todoList.filter((item) =>
        item.name
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      );
      return {
        ...state,
        todoList: todoList,
      };

    //delete list todo
    case Action_Type.DELETE_LIST_CHECK_TODO:
      return {
        ...state,
        checkTodo: [],
        todoList: state.todoList.filter(
          (item) => !action.payload.includes(item.id)
        ),
      };

    case Action_Type.ADD_CHECK_TODO:
      const id = action.payload;
      return { ...state, checkTodo: [...state.checkTodo, id] };

    case Action_Type.DELETE_CHECK_TODO:
      const itemDelete = action.payload;
      let newCheckTodo = state.checkTodo.filter((item) => item !== itemDelete);
      return { ...state, checkTodo: [...newCheckTodo] };

    case Action_Type.UPDATE_ACTIVE_ID:
      return { ...state, activeID: action.payload };

    default:
      return state;
  }
};

export default todoReducer;

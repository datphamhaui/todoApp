import { combineReducers } from "redux";
import todoReducer from "./todo.reducer";

const rootReducer = combineReducers({
  todoReducer,
});

// console.log(rootReducer);

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

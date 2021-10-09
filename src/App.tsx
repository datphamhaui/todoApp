import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList/TodoList";
import FormTodo from "./components/FormTodo/FormTodo";
// import { deleteListCheckTodo } from "./state_managenment/actions/action_creators";
import { useSelector } from "react-redux";
import { RootState } from "./state_managenment/reducers";
import BulkAction from "./components/BulkAction/BulkAction";
// import { useState } from "react";

function App() {
  const { checkTodo } = useSelector((state: RootState) => state.todoReducer);
  return (
    <div className="row ">
      <div className="col-5 border">
        <h1>New Task</h1>
        <FormTodo value="Add" />
      </div>
      <div className="col-7 border">
        <h1>To Do List</h1>
        <TodoList />
        {checkTodo.length > 0 && (
          <div>
            <BulkAction />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

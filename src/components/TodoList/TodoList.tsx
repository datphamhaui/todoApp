import { useState } from "react";

import FormTodo from "../FormTodo/FormTodo";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import { useSelector } from "react-redux";
import { RootState } from "../../state_managenment/reducers";

// import { deleteListCheckTodo } from "./../../state_managenment/actions/action_creators/index";

const TodoList = () => {
  const { todoList, activeID } = useSelector(
    (state: RootState) => state.todoReducer
  );

  const [filteText, setFilteText] = useState("");

  return (
    <div className="m-3">
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={filteText}
          onChange={(e) => {
            setFilteText(e.target.value);
          }}
          autoComplete="off"
        />
      </div>
      {todoList
        .filter((item) =>
          item.name.toLocaleLowerCase().includes(filteText.toLocaleLowerCase())
        )
        .map((todoItem) => {
          return (
            <div key={todoItem.id} className="border mt-5 ">
              <TodoItem todo={todoItem} check={false} />
              <div className={`hide ${activeID === todoItem.id ? "show" : ""}`}>
                <FormTodo value="Update" todoItem={todoItem} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;

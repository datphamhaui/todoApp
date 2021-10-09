import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCheckTodo,
  deleteCheckTodo,
  deleteTodo,
  updateActiveID,
} from "../../state_managenment/actions/action_creators";
import "./TodoItem.css";

// import { RootState } from "../../state_managenment/reducers";

const TodoItem = (props: any) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };
  // const { checkTodo } = useSelector((state: RootState) => state.todoReducer);
  const [check, setCheck] = useState(props.check);
  const handleClickDetail = (id: number) => {
    dispatch(updateActiveID(id));
  };
  return (
    <div className="d-flex item justify-content-around align-items-center p-2">
      <input
        type="checkbox"
        name="check"
        id="check"
        defaultChecked={check}
        onClick={(e) => {
          setCheck(!check);
          if (!check) {
            dispatch(addCheckTodo(props.todo.id));
          } else {
            dispatch(deleteCheckTodo(props.todo.id));
          }
        }}
      />

      <p>{props.todo.name}</p>

      <button
        className="btn btn-primary"
        onClick={() => {
          handleClickDetail(props.todo.id);
        }}
      >
        Detail
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          handleDeleteTodo(props.todo.id);
        }}
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;

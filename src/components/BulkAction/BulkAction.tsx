import { useDispatch, useSelector } from "react-redux";
import { deleteListCheckTodo } from "../../state_managenment/actions/action_creators";
import { RootState } from "../../state_managenment/reducers";

const BulkAction = () => {
  const { checkTodo } = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-secondary d-flex align-items-center justify-content-between p-3 `}
    >
      <div>Bulk Action</div>
      <div>
        <button type="button" className="btn btn-primary m-1">
          Done
        </button>
        <button
          onClick={() => {
            dispatch(deleteListCheckTodo(checkTodo));
          }}
          type="button"
          className="btn btn-danger"
        >
          Delete list
        </button>
      </div>
    </div>
  );
};

export default BulkAction;

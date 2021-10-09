import "./FormTodo.css";
import { Formik, Form, FastField, Field } from "formik";
import * as Yup from "yup";
import {
  addTodo,
  updateActiveID,
  updateTodo,
} from "../../state_managenment/actions/action_creators";
import { useDispatch } from "react-redux";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  duedate: Yup.date()
    .min(new Date(), "Do not accept days in the past as due date")
    .required("Required"),
  piority: Yup.string().required("Required"),
});

const initialValues: Todo = {
  id: 0,
  name: "",
  description: "",
  duedate: "",
  piority: "normal",
};

const FormTodo = (props: any) => {
  const dispatch = useDispatch();
  let value = initialValues;
  if (props.todoItem) {
    value = props.todoItem;
  }

  return (
    <div className="m-3">
      <Formik
        initialValues={value}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          if (props.value === "Add") {
            dispatch(
              addTodo({ ...values, id: Math.floor(Math.random() * 1000) })
            );
            dispatch(updateActiveID(-1));
            resetForm();
          } else {
            dispatch(updateTodo({ ...values, id: props.todoItem.id }));
            dispatch(updateActiveID(-1));
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <FastField
                name="name"
                className="form-control"
                placeholder="Add new task ..."
                id="name"
                autoComplete="off"
              />
              {errors.name && touched.name ? (
                <div className="text-danger">{errors.name}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <FastField
                name="description"
                id="description"
                as="textarea"
                rows="8"
                className="form-control"
              />
              {errors.description && touched.description ? (
                <div className="text-danger">{errors.description}</div>
              ) : null}
            </div>
            <div className="d-flex row">
              <div className="form-group col-6">
                <label htmlFor="duedate">Due date</label>
                <Field name="duedate" type="date" className="form-control" />
                {errors.duedate && touched.duedate ? (
                  <div className="text-danger">{errors.duedate}</div>
                ) : null}
              </div>
              <div className="form-group col-6">
                <label htmlFor="piority">Piority</label>
                <Field name="piority" as="select" className="form-control">
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="hight">Hight</option>
                </Field>
                {errors.piority && touched.piority ? (
                  <div className="text-danger">{errors.piority}</div>
                ) : null}
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              {props.value}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormTodo;

import { Field, Form, Formik } from 'formik';
import { loginThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };
  const handelSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handelSubmit}>
        <Form>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field
              type="password"
              name="password"
              autoComplete="true"
              suggested="current-password"
            />
          </label>
          <button type="submit">SingUp</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

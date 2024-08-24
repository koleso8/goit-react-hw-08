import { Field, Form, Formik } from 'formik';
import { registerThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = { name: '', email: '', password: '' };
  const handelSubmit = (values, actions) => {
    dispatch(registerThunk(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handelSubmit}>
        <Form>
          <label>
            Name
            <Field type="text" name="name" />
          </label>
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

export default RegistrationForm;

import { Field, Form, Formik } from 'formik';
import React from 'react';

const RegistrationForm = () => {
const    initialState = {''}
  return (
    <div>
      <Formik>
        <Form>
          <label>
            Mane
            <Field type="text" />
          </label>
          <label>
            Email
            <Field type="email" />
          </label>
          <label>
            Password
            <Field type="password" />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

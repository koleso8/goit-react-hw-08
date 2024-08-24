import clsx from 'clsx';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';

import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { onEdit } from '../../redux/editSlice';
import { deleteContactsThunk } from '../../redux/contacts/operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const card = { id, name, number };

  return (
    <>
      <button
        className={clsx(s.edit)}
        onClick={() => {
          dispatch(onEdit(card));
        }}
      >
        <a href="#chengeForm">
          <FaPencilAlt />
        </a>
      </button>

      <p className={clsx(s.card__title)}>
        <FaUser className={clsx(s.iconUser)} />
        {name}
      </p>
      <p className={clsx(s.card__subtitle)}>
        <FaPhoneAlt className={clsx(s.iconNumber)} />
        {number}
      </p>
      <button
        className={clsx(s.signUp)}
        type="button"
        onClick={() => {
          dispatch(deleteContactsThunk(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;

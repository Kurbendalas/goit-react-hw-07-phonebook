import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contact}>
      <p className={css.contactInfo}>
        {contact.name}: {contact.phone}
      </p>
      <button
        type="button"
        onClick={handleDelete}
        id={contact.id}
        className={css.delete}
      >
        Delete
      </button>
    </div>
  );
};

export { Contact };

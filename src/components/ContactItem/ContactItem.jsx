import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

//import { deleteContact } from 'redux/contacts/contactsSlice';
import { fetchDeleteContact } from 'redux/contacts/contacts-operation';

import Button from 'shared/Button/Button';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <li className={styles.listItem}>
      {name}: {number}
      <Button
        title="Delete"
        type="button"
        onClick={() => {
          handleDeleteContact(id);
        }}
      />
    </li>
  );
};

export default ContactItem;

ContactItem.prototypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/contacts/contactsOperations';
import Button from 'shared/Button/Button';
import styles from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.contactInfo}>
        <span className={styles.name}>{name}:</span>
        <span className={styles.number}>{number}</span>
      </div>
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

ContactListItem.propTypes = {
  nameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

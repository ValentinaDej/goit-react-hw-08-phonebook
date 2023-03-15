import { useSelector, useDispatch } from 'react-redux';

import { fetchAddContact } from 'redux/contacts/contactsOperations';
import { selectLoadingContacts } from 'redux/contacts/contactsSelectors';

import Button from 'shared/Button/Button';
import LabelInput from 'shared/LabelInput/LabelInput';
import Loader from 'components/Loader/Loader';
import initialState from './initialState';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingContacts);

  const handleAddContact = data => {
    const name = data.name;
    const number = data.number;
    dispatch(fetchAddContact({ name, number }));
  };

  const onChangingInput = e => {
    const objectKey = e.target.name;
    initialState[objectKey] = e.target.value;
    return;
  };

  const clearForm = e => {
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault();
        handleAddContact(initialState);
        clearForm(e);
      }}
    >
      <h2 className={styles.title}>Contacts</h2>
      <LabelInput
        caption="Name"
        onChange={onChangingInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required="required"
      />
      <LabelInput
        caption="Number"
        onChange={onChangingInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with + "
        required="required"
      />
      <Button title="Add contact" type="submit" />
      {loading && <Loader />}
    </form>
  );
};

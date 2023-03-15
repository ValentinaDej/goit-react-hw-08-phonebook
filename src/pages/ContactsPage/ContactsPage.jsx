import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;

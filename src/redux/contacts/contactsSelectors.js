export const selectAllContacts = ({ contacts }) => contacts.items;

export const selectFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return result;
};

export const selectLoadingContacts = ({ contacts }) => contacts.isLoading;

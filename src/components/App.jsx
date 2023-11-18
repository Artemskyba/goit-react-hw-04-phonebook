import { ContactForm } from './phonebook/phonebook-form/phonebook-form';
import { nanoid } from 'nanoid';
import { ContactList } from './phonebook/contacts/contacts';
import { Filter } from './phonebook/contacts/contacts-filter';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState(``);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    savedContacts && savedContacts.length > 0 && setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    contacts.length === 0 && localStorage.removeItem(STORAGE_KEY);
  }, [contacts]);

  const addContact = (contactName, contactNumber) => {
    const exsistContact = contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    exsistContact
      ? alert(`${contactName} is already in contacts`)
      : setContacts(prevContacts => {
          const newContacts = [
            ...prevContacts,
            { id: nanoid(), name: contactName, number: contactNumber },
          ];
          return newContacts;
        });
  };

  const updateFilter = filterName => setFilter(filterName);

  const deleteContact = id =>
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} updateFilter={updateFilter} />
      <ContactList contacts={filtredContacts} onDelete={deleteContact} />
    </>
  );
};

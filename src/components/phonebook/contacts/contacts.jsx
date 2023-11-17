import { ContactText, ContactsItem, ContactsList } from './contacts.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ContactsList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactText>
                {name}: {number}
              </ContactText>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};

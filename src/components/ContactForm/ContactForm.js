import { Input, Label, Button } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from "redux/selectors";
import Notiflix from "notiflix";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = e.target.elements;
    const isPresentOnList = items.find(
      (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
    );
    if (isPresentOnList) {
      Notiflix.Notify.failure(`${name.value} is already in your contacts.`);
    } else {
      Notiflix.Notify.success(`${name.value} ADDED to your contact list.`);
      dispatch(addContact({ name: name.value, phone: phone.value }));
    }

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    </div>
  );
};

export default ContactForm;
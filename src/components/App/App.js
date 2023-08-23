import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { Container, Phonebook, Contacts } from "components/App/App.styled";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm />
      </Phonebook>
      <Contacts>
        <h1>Contacts</h1>

        <Filter />
        <ContactList />
      </Contacts>
    </Container>
  );
};

export default App;
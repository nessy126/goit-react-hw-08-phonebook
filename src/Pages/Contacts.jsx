import { useSelector } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import Form from "../components/Form/Form";
import { getIsLoading } from "../redux/phoneBook/phoneBookSelector";

const Contacts = () => {
  const isLoading = useSelector(getIsLoading)
  console.log(isLoading);
  return (
    <>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? <p>...is Loading</p> : <ContactList />}
    </>
  )
}
 
export default Contacts;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getContacts } from "../../redux/phoneBook/phonebookOperations";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = () => {
  const { contacts, filter } = useSelector((state) => state.contacts)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getContacts())
  // }, [dispatch])

    const filterArray = () => {
      if (filter === "") return contacts
      return contacts.filter((el) => {
        return el.name.toLowerCase().includes(filter.toLowerCase())
      })
    }
  return (
    <>
      <ul>
        {filterArray().map(({ id, name, phone }) => (
          <ContactListItem name={name} phone={phone} key={id} id={id}/>
        ))}
      </ul>
    </>
  )
}
 
export default ContactList;


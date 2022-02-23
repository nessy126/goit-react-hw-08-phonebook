import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phoneBook/phonebookOperations"

const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch()
  return (
    <>
      <li>
        <p>
          {name}
          <span> {phone}</span>
        </p>
        <button onClick={() => dispatch(deleteContact(id))} type="button">
          Delete
        </button>
      </li>
    </>
  )
}
 
export default ContactListItem;
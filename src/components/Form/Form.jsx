import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addContact } from "../../redux/phoneBook/phonebookOperations"
import Notiflix  from "notiflix"
import { getContacts } from "../../redux/phoneBook/phoneBookSelector";


const Form = () => {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  console.log(contacts);

  const handleInputChange = (e) => {
    e.target.name === "name" && setName(e.target.value)
    e.target.name === "phone" && setPhone(e.target.value)
  }

  const reset = () => {
    setName("")
    setPhone("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("contacts: " + contacts)
    console.log("name: " + name)
    if (contacts.find((el) => el.name === name)) {
      Notiflix.Notify.warning(name + " is already exist")
      return
    }

    const newContact = {
      name,
      phone,
    }
    console.log(newContact);

    dispatch(addContact(newContact))
    Notiflix.Notify.success("Contact " + name + " successfully created")
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="">
        Phone number
        <input
          onChange={handleInputChange}
          value={phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  )
}
 
export default Form;
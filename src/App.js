// import "./App.css"
// import Form from "./components/Form/Form"
// import ContactList from "./components/ContactList/ContactList"
// import Filter from "./components/Filter/Filter"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getContacts } from "./redux/phoneBook/phonebookOperations"
import { Route } from "react-router-dom"
import Contacts from "./Pages/Contacts"
import UserMenu from "./components/UserMenu/UserMenu"


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]) 

  
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Route path="/register">
          <h2>Page of registration</h2>
          <UserMenu/>
        </Route>
        <Route path="/login">
          <h2>Page of login</h2>
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </div>
    )
  }

export default App;

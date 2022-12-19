import {useState,useEffect} from "react";
import { Phonebook } from "./Phonebook";
import { Contacts } from "./Contacts";

export function App() {
  
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const filteredTodos = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify( contacts));
  }, [contacts]);

  const formDataHendler = data => {
 
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contact`);
      return
    } else {
      setContacts(state => [data, ...state]);
    }
  };

  const onChangeFifter = e => {
    setFilter(e.currentTarget.value.toLowerCase())
  }

  const deleteContact = id => {
  
    setContacts(state => state.filter(contact => contact.id !== id))
  }

  return(<div
        style={{
        marginLeft:'20px'
        }}>
        
        <Phonebook props={formDataHendler} />
        
        <Contacts props={filteredTodos} filter={filter} change={onChangeFifter} onDelete={deleteContact} />
        
      </div>)
};
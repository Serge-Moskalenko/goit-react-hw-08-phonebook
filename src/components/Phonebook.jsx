import { useState } from 'react';
import { addContact } from "redax/contactSlice";
import { useDispatch } from "react-redux";

export const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      
      default: console.log(name)
    }
  };


  const handleSubmit = e => {
    e.preventDefault();
    
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
    
  };

  return (
    <>
      <h1>Phonebook</h1>
        
      <form onSubmit={handleSubmit} style={{
        border: '2px solid black',
        padding: '20px',
        width: "400px"
      }}>
        <label style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: "16px",
        }}>
          Name
          <input style={{
            width: "200px",
            height: "20px",
            marginTop: '10px'
          }}
            type="text"
            name="name"
            value={name}
            placeholder="Only text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            maxLength={20}
            onChange={handleChange}
          />
        </label>

        <label style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: "16px",
        }}>
          Number
          <input style={{
            width: "200px",
            height: "20px",
            marginTop: '10px'
          }}
            type="tel"
            name="number"
            value={number}
            placeholder="Only number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            maxLength={20}
            onChange={handleChange}
          />
        </label>

        <button type="submit" style={{
          marginTop: "20px"
        }}
        >Add contact</button>
      </form>
    </>

  )
};
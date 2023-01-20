import {useForm} from 'react-hook-form'
import { useAddContactMutation } from 'redux/contactSlice';

export const Phonebook = () => {

    const { register, handleSubmit,reset } = useForm();

    const [addContact] = useAddContactMutation();

    const handleClickSubmit = ({name,number}) =>{
      addContact({ name, number });
      reset();
        
  };

  return (
    <>
      <h1>Phonebook</h1>
        
      <form onSubmit={handleSubmit(handleClickSubmit)} style={{
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
                      {...register("name")}
         
            placeholder="Only text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            maxLength={20}
      
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
            {...register("number")}
           
            placeholder="Only number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            maxLength={20}
        
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
import { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { ItemContact } from "./ItemContact";
import {selectVisibleContacts,} from 'redux/Contacts/contactsSelectors';
import { Filter } from "components/Filter";
import { Phonebook } from "PhonebookOnReact-hook-form/Phonebook";
import { fetchContacts } from "redux/Contacts/contactsOperetions";

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
        <>
            <h2>Contacts</h2>
            <Phonebook />
            <br />
            <br />
            <Filter />

            <ul style={{ listStyle: 'none' }}>

                {contacts.map(({ id, name, number }) => (
                    <li style={{ display: 'flex', alignItems: 'center' }} key={id}>
                        <ItemContact id={id} name={name} number={number} />
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Contacts;
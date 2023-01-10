import React from "react";
import { useFetchQuery } from 'redux/contactSlice'
import { makeFilter } from "redux/filterSlise";
import { selectorFilter } from "redux/selectors";
import { useSelector,useDispatch } from "react-redux";
import { ItemContact } from "./ItemContact";


export const Contacts = () => {
    
    const filter = useSelector(selectorFilter);
    const dispatchFilter = useDispatch();
    const { data } = useFetchQuery();
    let filteredContacts = null;
    
    if (data !== undefined) {
     const normalizeFilter = filter.trim().toLowerCase();
    filteredContacts = data.filter(contact =>contact.name.trim().toLowerCase().includes(normalizeFilter));
    };
   
    return (
        <>
                
            <h2>Contacts</h2>
                
            <label style={{
                display: 'flex',
                flexDirection: 'column',
                width: "200px",
                fontSize: "20px",
            }} >

                Find contact by name
                    
                <input style={{ marginTop: '10px', }} type='text' value={filter}
                    onChange={e => dispatchFilter(makeFilter(e.target.value))} />
                    
            </label>

            <ul style={{ listStyle: 'none' }}>

                {filteredContacts && filteredContacts.map(({id,name,phone})=> (
                    <li style={{ display: 'flex', alignItems: 'center' }} key={id}>
                    <ItemContact id={id } name={name} number={phone} />

                    </li>
                ))}
            </ul>
        </>
    )
};

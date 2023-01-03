import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectorContacts ,selectorFilter} from "redax/selectors";
import { deleteContact } from "redax/contactSlice";
import { makeFilter } from "redax/filterSlise";


export const Contacts = () => {
    
    const contacts = useSelector(selectorContacts);
    const filter = useSelector(selectorFilter);

    const dispatch = useDispatch();
    const dispatchFilter = useDispatch();

    const normalizeFilter = filter.trim().toLowerCase();
    const filteredContacts = contacts.filter(contact =>contact.name.trim().toLowerCase().includes(normalizeFilter));

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

                {filteredContacts.map(i => (
                    <li style={{ display: 'flex', alignItems: 'center' }} key={i.id}>
                        <p>{i.name}    {i.number}</p>

                        <button style={{
                            width: '70px',
                            height: '30px',
                            marginLeft: '10px'
                        }}
                            type="botton"
                            onClick={() => dispatch(deleteContact(i.id))}>
                      
                            Delete
                  
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
};

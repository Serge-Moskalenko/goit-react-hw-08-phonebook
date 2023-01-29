import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { AiTwotoneEdit } from "react-icons/ai";
import { deleteContact } from 'redux/Contacts/contactsOperetions';
import { selectIsLoading } from 'redux/Contacts/contactsSelectors';
import { EditModal } from 'components/EditModal/EditModal';

export const ItemContact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)
    const [open, setOpen] = useState(false);
 
    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    }
    
    return (
        <>
            <p>{name}    {number}</p>
            
            <button style={{
                width: '70px',
                height: '30px',
                marginLeft: '10px'
            }}
                type="botton"
                onClick={() => handleDelete(id)}
                disabled={isLoading}
            >
                Delete
            </button>
                                    
            <AiTwotoneEdit size='2em' onClick={() => setOpen(true)} />
            
            {open && <EditModal isOpen={open} closeModal={() => setOpen(false)} id={id} nameD={name} numberD={number} />}
        </>
        
    )
};
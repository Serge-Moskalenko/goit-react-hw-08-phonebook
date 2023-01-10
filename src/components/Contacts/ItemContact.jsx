import { useDeleteContactMutation } from 'redux/contactSlice';

export const ItemContact = ({ id, name, number }) => {
       const [deleteContact, {isLoading}]=useDeleteContactMutation();

    const handleClick = id=>{
        deleteContact(id)  
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
                onClick={() => handleClick(id)}
                disabled={isLoading}
                           
                        >
                      
                            Delete
                  
                        </button></>
    )
}
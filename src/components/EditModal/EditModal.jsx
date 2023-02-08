import { Modal,Box } from "@mui/material"
import {useForm} from 'react-hook-form'
import { updateContact } from 'redux/Contacts/contactsOperetions';
import { useDispatch } from 'react-redux';

const styledModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '100%', sm: '400px' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const EditModal = ({isOpen,closeModal,nameD,numberD,id}) => {
    const dispatch = useDispatch();
     const { register, handleSubmit,reset } = useForm({
  defaultValues: {
    name:nameD,
    number:numberD,
  }
});

    const handleClickSubmit = ({ name, number }) => {
        dispatch(updateContact({id,name, number }));
        reset();
        closeModal();
    };
        return (
            <>
                <Modal open={isOpen} onClose={closeModal} >
                    <Box sx={styledModal}>
                <form onSubmit={handleSubmit(handleClickSubmit)} style={{
                    border: '2px solid black',
                    padding: '20px',
                    width: "300px"
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
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            required
                            maxLength={20}
                        />
                    </label>

                        <button type="submit" style={{ marginTop: "20px" }}>
                            edit
                        </button>
                        </form>
                        </Box>
                </Modal>
                </>
        )
    };
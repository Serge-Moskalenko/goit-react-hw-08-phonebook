import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { registers } from 'redux/Auth/authOperetions';

const Register = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const handleClickSubmit = ({ name, email, password }) => {
        dispatch(registers({ name, email, password }))
        reset();
    };
    
    return (
        <>
            <h1>Register</h1>
        
            <form onSubmit={handleSubmit(handleClickSubmit)} >
                <label >
                    Name
                    <input
                        type="text"
                        {...register("name")}
                        required
                        maxLength={20} />
                </label>

                <label >
                    e-mail
                    <input style={{
                        width: "200px",
                        height: "20px",
                        marginTop: '10px'
                    }}
                        type="email"
                        {...register("email")}
                        required
                        maxLength={30} />
                </label>
              
                <label > password
                    <input
                        type="text"
                        {...register("password")}
                        required
                        maxLength={20} />
                </label>

                <button type="submit" style={{ marginTop: "20px" }}>
                    registre
                </button>
            </form>
        </>
    )
};

export default Register;
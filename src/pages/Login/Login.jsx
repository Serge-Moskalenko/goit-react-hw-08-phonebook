import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/authOperetions';

const Login = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const handleClickSubmit = ({ email,password }) => {
        dispatch(logIn({  email, password }))
            .then(() => alert('создано'))
            .catch(() =>alert('ошибка')
      );
        reset();
        
    };
    return (<><h1>Login</h1>
    <form onSubmit={handleSubmit(handleClickSubmit)} >
            
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
                        maxLength={30}
        
                    />
                </label>
              
                <label > password
                    <input
                        type="text"
                        {...register("password")}
                        required
                        maxLength={20}
      
                    />
                </label>

                <button type="submit" style={{
                    marginTop: "20px"
                }}
                >registre</button>
        </form>
        </>)
}

export default Login;


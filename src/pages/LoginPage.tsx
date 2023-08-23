import {loginPageValidationSchema} from '../validations';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {LoginForm, User} from '../types';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {userList} from '../data/userList';
import {userLoginAction} from '../store/actions/userActions';
import Button from '../components/Button';
import {useState} from 'react';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<LoginForm>({resolver: zodResolver(loginPageValidationSchema), defaultValues: {username: '', password: ''}});
    const watchFields = watch();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);

    const isDisabled = !watchFields.username || !watchFields.password;

    const onSubmit = ({username, password}: LoginForm) => {
        const found = userList.find((user: User) => user.username === username && user.password === password);

        if (found) {
            dispatch(userLoginAction(found));
            navigate('/');
        }

        setError(true);
    };

    return (
        <div className="p-login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Username" {...register('username')} autoFocus />
                {errors.username && <span>{errors.username.message}</span>}

                <input type="password" placeholder="Password" {...register('password')} />
                {errors.password && <span>{errors.password?.message}</span>}

                {error && <strong>Wrong username or password!</strong>}

                <Button type="submit" disabled={isDisabled}>
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;

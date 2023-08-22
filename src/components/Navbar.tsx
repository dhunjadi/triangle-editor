import {useNavigate} from 'react-router-dom';
import KoncarLogo from '../assets/KoncarLogo.svg';
import Button from './Button';
import {useDispatch} from 'react-redux';
import {userLogoutAction} from '../store/actions/userActions';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userLogoutAction());
        navigate('/');
    };
    return (
        <nav className="c-navbar">
            <div className="c-navbar__logo">
                <img src={KoncarLogo} alt="koncar logo" />
            </div>

            <div className="c-navbar__logout">
                <Button danger onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;

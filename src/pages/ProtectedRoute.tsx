import {Outlet, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';

const ProtectedRoute = () => {
    const {loggedinUser} = useSelector((state: StoreState) => state.userReducer);

    return loggedinUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

import {StoreState} from '../store/reducers/rootReducer';
import {useSelector} from 'react-redux';
import Triangle from '../components/Triangle';
import {Link, useNavigate} from 'react-router-dom';

const HomePage = () => {
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);
    const navigate = useNavigate();

    return (
        <div className="p-home">
            <Link to={'/new'}>New</Link>
            <div className="p-home__triangles">
                <h2>List of triangles:</h2>
                {triangleList.map((triangle) => {
                    return (
                        <div key={triangle.id} className="p-home__triangles_triangle" onClick={() => navigate(`edit/${triangle.id}`)}>
                            <Triangle {...triangle} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage;

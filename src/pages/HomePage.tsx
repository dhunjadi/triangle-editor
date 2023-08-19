import {StoreState} from '../store/reducers/rootReducer';
import {useSelector} from 'react-redux';
import Triangle from '../components/Triangle';
import {Link} from 'react-router-dom';

const HomePage = () => {
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);

    return (
        <div className="p-home">
            <Link to={'/new'}>New</Link>
            <div className="p-home__triangles">
                <h2>List of triangles:</h2>
                {triangleList.map((triangle) => {
                    return <Triangle key={triangle.id} {...triangle} />;
                })}
            </div>
        </div>
    );
};

export default HomePage;

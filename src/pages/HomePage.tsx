import {StoreState} from '../store/reducers/rootReducer';
import {useSelector} from 'react-redux';
import TriangleForm from '../components/TriangleForm';
import Triangle from '../components/Triangle';

const HomePage = () => {
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);

    return (
        <div className="p-home">
            <TriangleForm />
            <div className="p-home__triangles">
                {triangleList.map((triangle) => {
                    return <Triangle key={triangle.id} {...triangle} />;
                })}
            </div>
        </div>
    );
};

export default HomePage;

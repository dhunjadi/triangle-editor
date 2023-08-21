import {StoreState} from '../store/reducers/rootReducer';
import {useSelector} from 'react-redux';
import Triangle from '../components/Triangle';
import {useNavigate} from 'react-router-dom';
import Button from '../components/Button';
import {getTriangleArea, getTrianglePerimeter, getTypeByAngles, getTypeBySides} from '../utils';

const HomePage = () => {
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);
    const navigate = useNavigate();
    const isTriangleListEmpty = triangleList.length === 0;

    const handleClickAdd = () => {
        navigate('new');
    };

    return (
        <div className="p-home">
            <h2>List of triangles</h2>

            {isTriangleListEmpty ? (
                <div>
                    <h3>List is empty!</h3>
                </div>
            ) : (
                <div>
                    <div className="p-home__triangles">
                        {triangleList.map((triangle) => (
                            <div key={triangle.id} className="p-home__triangles_triangle">
                                <Triangle {...triangle} showButtons />
                                <div className="p-home__triangles_details">
                                    <span>Perimeter: {getTrianglePerimeter(triangle)}</span>
                                    <span>Area: {getTriangleArea(triangle)}</span>
                                    <span>Angle Type: {getTypeByAngles(triangle)}</span>
                                    <span>Sides Relationship: {getTypeBySides(triangle)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="p-home__button">
                <Button onClick={handleClickAdd}>Add a triangle</Button>
            </div>
        </div>
    );
};

export default HomePage;

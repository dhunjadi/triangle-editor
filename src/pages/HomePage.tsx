import {StoreState} from '../store/reducers/rootReducer';
import {useSelector} from 'react-redux';
import Triangle from '../components/Triangle';
import {useNavigate} from 'react-router-dom';
import Button from '../components/Button';

const HomePage = () => {
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);
    const navigate = useNavigate();

    const handleClickAdd = () => {
        navigate('new');
    };

    return (
        <div className="p-home">
            <h2>List of triangles</h2>
            {triangleList.length > 0 ? (
                <>
                    <div className="p-home__triangles">
                        {triangleList.map((triangle) => {
                            return (
                                <div key={triangle.id} className="p-home__triangles_triangle">
                                    <Triangle {...triangle} showButtons />
                                </div>
                            );
                        })}
                    </div>
                    <div className="p-home__button">
                        <Button onClick={handleClickAdd}>Add a triangle</Button>
                    </div>
                </>
            ) : (
                <>
                    <h3>List is empty!</h3>
                    <div className="p-home__button">
                        <Button onClick={handleClickAdd}>Add a triangle</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomePage;

/*   */

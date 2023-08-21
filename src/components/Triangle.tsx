import {Triangle as TriangleType} from '../types';
import Button from './Button';
import {useNavigate} from 'react-router-dom';
import KonvaTriangle from './KonvaTriangle';
import {useDispatch} from 'react-redux';
import {deleteTriangleAction} from '../store/actions/triangleActions';

const Triangle = ({id, pointA, pointB, pointC, showButtons}: TriangleType) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="c-triangle">
            <KonvaTriangle points={[pointA, pointB, pointC]} />
            {showButtons && (
                <div className="c-triangle__buttons">
                    <Button onClick={() => navigate(`edit/${id}`)}>Edit</Button>
                    <Button danger onClick={() => dispatch(deleteTriangleAction(id))}>
                        Delete
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Triangle;

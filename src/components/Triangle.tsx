import {Triangle as TriangleType} from '../types';
import Button from './Button';
import {useNavigate} from 'react-router-dom';
import KonvaTriangle from './KonvaTriangle';

const Triangle = ({id, pointA, pointB, pointC, showButtons}: TriangleType) => {
    const navigate = useNavigate();

    return (
        <div className="c-triangle">
            <KonvaTriangle points={[pointA, pointB, pointC]} />
            {showButtons && (
                <div className="c-triangle__buttons">
                    <Button onClick={() => navigate(`edit/${id}`)}>Edit</Button>
                    <Button danger>Delete</Button>
                </div>
            )}
        </div>
    );
};

export default Triangle;

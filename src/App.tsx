import React, {useState} from 'react';
import {Point} from './types';
import Triangle from './Triangle';
import {useDispatch, useSelector} from 'react-redux';
import {addTriangleAction} from './store/actions/triangleActions';
import {StoreState} from './store/reducers/rootReducer';
import {v4 as uuidv4} from 'uuid';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);

    const [pointA, setPointA] = useState<Point>({x: 0, y: 0});
    const [pointB, setPointB] = useState<Point>({x: 100, y: 0});
    const [pointC, setPointC] = useState<Point>({x: 50, y: 100});

    const handlePointChange = (pointName: string, coordinate: string, value: number) => {
        if (pointName === 'pointA') {
            setPointA({...pointA, [coordinate]: value});
        } else if (pointName === 'pointB') {
            setPointB({...pointB, [coordinate]: value});
        } else if (pointName === 'pointC') {
            setPointC({...pointC, [coordinate]: value});
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newTriangle = {
            id: uuidv4(),
            pointA,
            pointB,
            pointC,
        };
        dispatch(addTriangleAction(newTriangle));
    };

    return (
        <div className="App">
            <div>
                <label>Point A:</label>
                X: <input type="number" value={pointA.x} onChange={(e) => handlePointChange('pointA', 'x', +e.target.value)} />
                Y: <input type="number" value={pointA.y} onChange={(e) => handlePointChange('pointA', 'y', +e.target.value)} />
            </div>
            <div>
                <label>Point B:</label>
                X: <input type="number" value={pointB.x} onChange={(e) => handlePointChange('pointB', 'x', +e.target.value)} />
                Y: <input type="number" value={pointB.y} onChange={(e) => handlePointChange('pointB', 'y', +e.target.value)} />
            </div>
            <div>
                <label>Point C:</label>
                X: <input type="number" value={pointC.x} onChange={(e) => handlePointChange('pointC', 'x', +e.target.value)} />
                Y: <input type="number" value={pointC.y} onChange={(e) => handlePointChange('pointC', 'y', +e.target.value)} />
            </div>

            <button onClick={handleSubmit}>Create a triangle</button>

            {triangleList.map((triangle) => {
                return <Triangle key={triangle.id} {...triangle} />;
            })}
        </div>
    );
};

export default App;

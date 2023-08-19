import React from 'react';
import {StoreState} from '../store/reducers/rootReducer';
import {useSelector} from 'react-redux';
import TriangleForm from '../components/TriangleForm';
import Triangle from '../Triangle';

const TrianglesPage = () => {
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);
    return (
        <div>
            <div className="p-triangles">
                <TriangleForm />
                {triangleList.map((triangle) => {
                    return <Triangle key={triangle.id} {...triangle} />;
                })}
            </div>
        </div>
    );
};

export default TrianglesPage;

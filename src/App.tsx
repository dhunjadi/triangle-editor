import React from 'react';
import Triangle from './Triangle';
import {useSelector} from 'react-redux';
import {StoreState} from './store/reducers/rootReducer';
import TriangleForm from './components/TriangleForm';

const App: React.FC = () => {
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);

    return (
        <div className="App">
            <TriangleForm />
            {triangleList.map((triangle) => {
                return <Triangle key={triangle.id} {...triangle} />;
            })}
        </div>
    );
};

export default App;

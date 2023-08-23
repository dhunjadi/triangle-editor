import {StoreState} from '../store/reducers/rootReducer';
import {useSelector} from 'react-redux';
import Triangle from '../components/Triangle';
import {useNavigate} from 'react-router-dom';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import {TrianglePoints} from '../types';
import {getTrianglePerimeter, getTriangleArea, getTypeByAngles, getTypeBySides} from '../utils';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const HomePage = () => {
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);
    const {loggedinUser} = useSelector((state: StoreState) => state.userReducer);
    const navigate = useNavigate();
    const isTriangleListEmpty = triangleList.length === 0;

    const handleClickAdd = () => {
        navigate('new');
    };

    const handleExportDetails = () => {
        const content = document.querySelector('.p-home__triangles_triangle') as HTMLElement;

        html2canvas(content, {logging: true, useCORS: true}).then((canvas) => {
            const imgWidth = 200;
            const imgHeight = 200;
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('Triangle Details.pdf');
        });
    };

    return (
        <div className="p-home">
            <Navbar />

            {isTriangleListEmpty ? (
                <div className="p-home__header">
                    <h3>List is empty!</h3>
                </div>
            ) : (
                <div>
                    <div className="p-home__triangles">
                        {triangleList
                            .filter((triangle) => triangle.userId === loggedinUser?.id)
                            .map((triangle) => {
                                const {pointA, pointB, pointC} = triangle;
                                const points: TrianglePoints = [pointA, pointB, pointC];

                                return (
                                    <div key={triangle.id} className="p-home__triangles_triangle">
                                        <Triangle {...triangle} showButtons />
                                        <div className="p-home__triangles_details">
                                            <span>Perimeter: {getTrianglePerimeter(points)}</span>
                                            <span>Area: {getTriangleArea(points)}</span>
                                            <span>Angle Type: {getTypeByAngles(points)}</span>
                                            <span>Sides Relationship: {getTypeBySides(points)}</span>
                                            <Button onClick={() => handleExportDetails()}>Download details</Button>
                                        </div>
                                    </div>
                                );
                            })}
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

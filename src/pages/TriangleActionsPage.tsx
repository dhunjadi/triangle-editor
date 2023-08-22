import {useDispatch, useSelector} from 'react-redux';
import {Triangle as TriangleType} from '../types';
import {v4 as uuidv4} from 'uuid';
import {addTriangleAction, editTriangleAction} from '../store/actions/triangleActions';
import {triangleFormValidationSchema} from '../validations';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Triangle from '../components/Triangle';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {StoreState} from '../store/reducers/rootReducer';
import Button from '../components/Button';
import {getTrianglePerimeter, getTriangleArea, getTypeByAngles, getTypeBySides} from '../utils';

const TriangleActionsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {triangleList} = useSelector((state: StoreState) => state.triangleReducer);
    const {loggedinUser} = useSelector((state: StoreState) => state.userReducer);
    const {id} = useParams();
    const triangleBeingEdited = triangleList.find((triangle) => triangle.id === id);
    const {pathname} = useLocation();
    const {register, handleSubmit, watch} = useForm<TriangleType>({
        resolver: zodResolver(triangleFormValidationSchema),
        defaultValues: {
            pointA: {x: triangleBeingEdited?.pointA.x || '0', y: triangleBeingEdited?.pointA.y || '100'},
            pointB: {x: triangleBeingEdited?.pointB.x || '50', y: triangleBeingEdited?.pointB.y || '0'},
            pointC: {x: triangleBeingEdited?.pointC.x || '100', y: triangleBeingEdited?.pointC.y || '100'},
        },
    });

    const watchFields = watch();

    const pointsParams = watch(['pointA', 'pointB', 'pointC']);

    const onSubmit = (formData: Omit<TriangleType, 'id'>) => {
        if (loggedinUser) {
            const newTriangle: TriangleType = {
                id: triangleBeingEdited?.id || uuidv4(),
                pointA: formData.pointA,
                pointB: formData.pointB,
                pointC: formData.pointC,
                userId: loggedinUser.id,
            };
            isEditing && id
                ? dispatch(editTriangleAction({...formData, id, userId: loggedinUser.id}))
                : dispatch(addTriangleAction(newTriangle));
            navigate(-1);
        }
    };

    const isEditing = pathname.includes('edit');

    return (
        <form className="p-triangleActions" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-triangleActions__inputs">
                <div className="p-triangleActions__inputs_pair">
                    <label>Point A</label>

                    <span>X:</span>
                    <input type="number" {...register('pointA.x')} min={0} max={100} />

                    <span>Y:</span>
                    <input type="number" {...register('pointA.y')} min={0} max={100} />
                </div>
                <div className="p-triangleActions__inputs_pair">
                    <label>Point B</label>

                    <span>X:</span>
                    <input type="number" {...register('pointB.x')} min={0} max={100} />

                    <span>Y:</span>
                    <input type="number" {...register('pointB.y')} min={0} max={100} />
                </div>
                <div className="p-triangleActions__inputs_pair">
                    <label>Point C</label>

                    <span>X:</span>
                    <input type="number" {...register('pointC.x')} min={0} max={100} />

                    <span>Y:</span>
                    <input type="number" {...register('pointC.y')} min={0} max={100} />
                </div>
            </div>
            <Triangle
                id={triangleBeingEdited?.id || uuidv4()}
                pointA={watchFields.pointA}
                pointB={watchFields.pointB}
                pointC={watchFields.pointC}
                userId={triangleBeingEdited?.userId || uuidv4()}
            />

            <div className="p-home__triangles_details">
                <span>Perimeter: {getTrianglePerimeter(pointsParams)}</span>
                <span>Area: {getTriangleArea(pointsParams)}</span>
                <span>Angle Type: {getTypeByAngles(pointsParams)}</span>
                <span>Sides Relationship: {getTypeBySides(pointsParams)}</span>
            </div>

            <div className="p-triangleActions__button">
                <Button secondary type="submit">
                    {isEditing ? 'Save' : 'Add to list'}
                </Button>
            </div>
        </form>
    );
};

export default TriangleActionsPage;

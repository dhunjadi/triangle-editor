import {useDispatch} from 'react-redux';
import {Triangle as TriangleType} from '../types';
import {v4 as uuidv4} from 'uuid';
import {addTriangleAction} from '../store/actions/triangleActions';
import {triangleFormValidationSchema} from '../validations';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Triangle from '../components/Triangle';
import {useNavigate} from 'react-router-dom';

const TriangleActionsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, watch} = useForm<TriangleType>({
        resolver: zodResolver(triangleFormValidationSchema),
        defaultValues: {pointA: {x: '0', y: '100'}, pointB: {x: '50', y: '0'}, pointC: {x: '100', y: '100'}},
    });

    const watchFields = watch();

    const onSubmit = (formData: Omit<TriangleType, 'id'>) => {
        const newTriangle: TriangleType = {
            id: uuidv4(),
            pointA: formData.pointA,
            pointB: formData.pointB,
            pointC: formData.pointC,
        };
        dispatch(addTriangleAction(newTriangle));
        navigate(-1);
    };

    return (
        <form className="p-triangleActions" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-triangleActions__inputs">
                <div className="p-triangleActions__inputs_pair">
                    <label>Point A</label>
                    X <input type="number" {...register('pointA.x')} />
                    Y <input type="number" {...register('pointA.y')} />
                </div>
                <div className="p-triangleActions__inputs_pair">
                    <label>Point B</label>
                    X <input type="number" {...register('pointB.x')} />
                    Y <input type="number" {...register('pointB.y')} />
                </div>
                <div className="p-triangleActions__inputs_pair">
                    <label>Point C</label>
                    X <input type="number" {...register('pointC.x')} />
                    Y <input type="number" {...register('pointC.y')} />
                </div>
            </div>
            <Triangle id={uuidv4()} pointA={watchFields.pointA} pointB={watchFields.pointB} pointC={watchFields.pointC} />
            <div className="p-triangleActions__button">
                <button type="submit">Add to list</button>
            </div>
        </form>
    );
};

export default TriangleActionsPage;

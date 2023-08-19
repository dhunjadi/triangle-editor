import {useDispatch} from 'react-redux';
import {Triangle} from '../types';
import {v4 as uuidv4} from 'uuid';
import {addTriangleAction} from '../store/actions/triangleActions';
import {triangleFormValidationSchema} from '../validations';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

const TriangleForm = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm<Triangle>({
        resolver: zodResolver(triangleFormValidationSchema),
        defaultValues: {pointA: {x: 0, y: 0}, pointB: {x: 100, y: 0}, pointC: {x: 50, y: 100}},
    });

    const onSubmit = (formData: Omit<Triangle, 'id'>) => {
        const newTriangle: Triangle = {
            id: uuidv4(),
            pointA: formData.pointA,
            pointB: formData.pointB,
            pointC: formData.pointC,
        };
        dispatch(addTriangleAction(newTriangle));
    };

    return (
        <form className="c-triangleForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="c-triangleForm__inputs">
                <div className="c-triangleForm__inputs_pair">
                    <label>Point A</label>
                    X <input type="number" {...register('pointA.x')} />
                    Y <input type="number" {...register('pointA.y')} />
                </div>
                <div className="c-triangleForm__inputs_pair">
                    <label>Point B</label>
                    X <input type="number" {...register('pointB.x')} />
                    Y <input type="number" {...register('pointB.y')} />
                </div>
                <div className="c-triangleForm__inputs_pair">
                    <label>Point C</label>
                    X <input type="number" {...register('pointC.x')} />
                    Y <input type="number" {...register('pointC.y')} />
                </div>
            </div>
            <div className="c-triangleForm__button">
                <button type="submit">Create a triangle</button>
            </div>
        </form>
    );
};

export default TriangleForm;

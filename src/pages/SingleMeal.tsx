import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchSingleMeal } from '../store/foodSlice'
import { Preloader } from '../components/Preloader'
import {Alert} from "../components/Alert/Alert";
import {SingleMealItem} from "../components/SingleMealItem/SingleMealItem";


export const SingleMeal: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const { goBack } = useHistory();
    const dispatch = useAppDispatch();
    const status = useAppSelector(state => state.food.status);
    const error = useAppSelector(state => state.food.error);

    useEffect(() => {
        dispatch( fetchSingleMeal( id ) );
    }, [id, dispatch]);


    return (
        <div className='center'>
            { status === 'loading' && <Preloader />  }
            { error ? <Alert /> : <SingleMealItem /> }
            <button className="btn" onClick={ goBack }>Go Back</button>
        </div>
    )
};


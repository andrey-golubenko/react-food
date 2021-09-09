import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchMeals } from '../store/foodSlice'
import { Preloader } from '../components/Preloader'
import { MealList } from '../components/MealList'
import { Alert } from '../components/Alert/Alert'

export const Category: React.FC = () => {

    const { name } = useParams<{name:string}>();
    const dispatch = useAppDispatch();
    const status = useAppSelector(state => state.food.status);
    const error = useAppSelector(state => state.food.error);

    useEffect(() => {
        dispatch( fetchMeals( name ) );
    }, [name, dispatch]);

    return (
        <>
            { status === 'loading' && <Preloader /> }
            { error && <Alert /> }
            <MealList />
        </>
    )
};
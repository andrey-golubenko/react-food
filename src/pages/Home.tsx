import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../hooks/hooks'
import { fetchCategories } from '../store/foodSlice'
import { CategoryList } from '../components/CategoryList'
import { Search } from '../components/Search'
import { Preloader } from '../components/Preloader'
import { Alert } from '../components/Alert/Alert'

export const Home: React.FC = () => {

    const dispatch = useAppDispatch();
    const status = useAppSelector(state => state.food.status);
    const error = useAppSelector(state => state.food.error);
    const { search } = useLocation();

    useEffect(() => {
        dispatch( fetchCategories( search ) )
    }, [search, dispatch]);

    return (
        <>
            <Search  />
            { status === 'loading' && <Preloader /> }
            { error && <Alert /> }
            <CategoryList />
        </>
    )
};
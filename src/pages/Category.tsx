import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFilteredCategory } from '../api'
import { Preloader } from '../components/Preloader'
import { MealList } from '../components/MealList'
import { IMealsItem } from '../interfaces'


export const Category: React.FC = () => {
    const { name } = useParams<{name:string}>();
    const [meals, setMeals] = useState<IMealsItem[]>([]);

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    }, [name]);

    return (
        <>
            { !meals.length ? <Preloader /> : <MealList meals={ meals}/> }
        </>
    )
};
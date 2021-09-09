import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { MealItem } from './MealItem'


export const MealList: React.FC = () => {

    const meals = useAppSelector(state => state.food.meals);

    return (
        <div className="list">
            { meals.map( elem => (
                <MealItem key={ elem.idMeal } { ...elem } />
            ) ) }
        </div>
    )
};
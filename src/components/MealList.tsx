import React from 'react'
import {IMealListProps} from '../interfaces'
import {MealItem} from './MealItem'


export const MealList: React.FC <IMealListProps>= ({ meals = [] }) => {

    return (
        <div className="list">
            { meals.map( elem => (
                <MealItem key={ elem.idMeal } { ...elem } />
            ) ) }
        </div>
    )
};
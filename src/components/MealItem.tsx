import React from 'react';
import { IMealsItem } from "../interfaces";
import { Link } from "react-router-dom";
import { LoadableImage } from './LoadableImage/LoadableImage'

export const MealItem: React.FC <IMealsItem> = (props) => {

    const {
        strMeal,
        strMealThumb,
        idMeal
    } = props;

    return (
        <div className="card" id={ idMeal }>
            <div className="card-image">
                <LoadableImage src={ strMealThumb }/>
            </div>
            <div className="card-content">
                <span className="card-title">{ strMeal }</span>
            </div>
            <div className="card-action">
                <Link to={ `/meal/${idMeal}` } className="btn">Watch recipe</Link>
            </div>
        </div>
    )
};
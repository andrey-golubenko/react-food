import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { CategoryItem } from './CategoryItem'

export const CategoryList: React.FC = () => {

    const categories = useAppSelector(state => state.food.categories);

    return (
        <div className="list">
            { categories.map( elem => (
               <CategoryItem key={ elem.idCategory } { ...elem } />
                ) ) }
        </div>
    )
};
import React from 'react'
import {ICategoryListProps} from '../interfaces';
import {CategoryItem} from './CategoryItem';

export const CategoryList: React.FC<ICategoryListProps> = ({catalog = []}) => {

    return (
        <div className="list">
            { catalog.map( elem => (
               <CategoryItem key={ elem.idCategory } { ...elem } />
                ) ) }

        </div>
    )
};
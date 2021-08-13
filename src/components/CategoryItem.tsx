import React from 'react'
import { Link } from 'react-router-dom';
import { LoadableImage } from './LoadableImage/LoadableImage'
import { ICatalogItem } from '../interfaces';


export const CategoryItem: React.FC<ICatalogItem> = (props) => {

    const {
        idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
    } = props;

    return (
        <div className="card" id={ idCategory }>
            <div className="card-image">
                <LoadableImage src={ strCategoryThumb }/>
            </div>
            <div className="card-content">
                <span className="card-title">{ strCategory }</span>
                <p>{ strCategoryDescription.slice(0, 70) }&nbsp;&nbsp;.&nbsp;.&nbsp;.</p>
            </div>
            <div className="card-action">
                <Link to={ `/category/${strCategory}` } className="btn">Watch category</Link>
            </div>
        </div>
    )
};
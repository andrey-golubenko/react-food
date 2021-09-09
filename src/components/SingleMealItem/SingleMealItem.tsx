import React from 'react'
import styles from './SingleMealItem.module.css'
import { useAppSelector } from '../../hooks/hooks'
import { LoadableImage } from '../LoadableImage/LoadableImage'


export const SingleMealItem: React.FC = () => {
    const singleMeal = useAppSelector(state => state.food.singleMeal);

    return (
        <>
            <div className="singleMeal">
                <div className={styles.mealMainDescription}>
                    <div className={styles.mealMainDescriptionImg}>
                        <LoadableImage src={ singleMeal.strMealThumb! }/>
                    </div>
                    <h4>{ singleMeal.strMeal }</h4>
                    <h5>Category : { singleMeal.strCategory }</h5>
                    { singleMeal.strArea ? <h5>Area from : { singleMeal.strArea }</h5> : null}
                    <h5>Cooking instructions :</h5>
                    <p className={styles.mealMainDescriptionInstruction}>{ singleMeal.strInstructions }</p>
                </div>
                <table className={styles.mealIngredients}>
                    <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                    </thead>
                    <tbody>
                    { Object.keys(singleMeal).map((key) => {
                        if(key.includes('Ingredient') && singleMeal[key] /*(key in singleMeal)*/) {
                            return (
                                <tr key={key}>
                                    <td>{ singleMeal[key] }</td>
                                    <td>{ singleMeal[
                                        `strMeasure${key.slice(13)}`
                                        ] }</td>
                                </tr>
                            )
                        }
                        return null
                    }) }
                    </tbody>
                </table>
                { singleMeal.strYoutube ? (
                        <div className="row">
                            <h5 className={ styles.videoHeading } >Recipe video : </h5>
                            <iframe
                                title={ singleMeal.idMeal }
                                src={`https://www.youtube.com/embed/${ singleMeal.strYoutube.slice(-11) }`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div> )
                    : null }
            </div>
        </>
    )
};

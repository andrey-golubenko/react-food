import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getMealById } from '../../api'
import { ISingleMeal } from '../../interfaces'
import { Preloader } from '../../components/Preloader'
import styles from './SingleMeal.module.css'
import { LoadableImage } from '../../components/LoadableImage/LoadableImage'


export const SingleMeal: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [singleMeal, setSingleMeal] = useState<Partial<ISingleMeal>>({});
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => setSingleMeal(data.meals[0]))
    }, [id]);


    return (
        <>
            { !singleMeal.idMeal ? <Preloader /> : (
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
                        <h5 style={{ margin: '2rem 0 1.5 rem' }}>Recipe video : </h5>
                            <iframe
                                title={ id }
                                src={`https://www.youtube.com/embed/${ singleMeal.strYoutube.slice(-11) }`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div> )
                        : null }

            </div>) }
            <button className="btn" onClick={ goBack }>Go Back</button>
        </>
    )
};


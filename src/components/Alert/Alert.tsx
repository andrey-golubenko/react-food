import React from 'react'
import styles from './Alert.module.css'
import { useAppSelector } from '../../hooks/hooks'


export const Alert: React.FC = () => {
    const error = useAppSelector(state => state.food.error);

    return (
        <div className={ styles.alertMessage } role="alert">
            An error occurred : { error }!
        </div>
    )
};
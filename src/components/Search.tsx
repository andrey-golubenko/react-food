import React, { useRef } from 'react'
import {useHistory, useLocation} from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setSearchVal } from '../store/foodSlice'

export const Search: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const searchVal = useAppSelector(state => state.food.searchVal);
    const { pathname } = useLocation();
    const { push } = useHistory();

    const handleKey = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        push({
            pathname,
            search: `?search=${ inputRef.current!.value }`
        });
        dispatch( setSearchVal('') )
    };

    return (
        <div className='row'>
            <div className="input-field search-field">
                <input
                    ref={ inputRef }
                    type="search"
                    placeholder="search category"
                    onKeyPress={ handleKey }
                    onChange={ (e) => { dispatch( setSearchVal( e.target.value ) ) } }
                    value={ searchVal }
                />
                <button
                    className="btn search-btn"
                    onClick={ handleSubmit }
                >Search</button>
            </div>
        </div>
    )
};

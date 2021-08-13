import React, { useState } from 'react'
import { ISearchProp } from '../interfaces'


export const Search: React.FC <ISearchProp> = ({ cb = () => {} }) => {
    const [searchVal, setSearchVal] = useState<string>('');

    const handleKey = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(searchVal);
        setSearchVal('');
    };

    return (
        <div className='row'>
            <div className="input-field search-field">
                <input
                    type="search"
                    placeholder="search category"
                    onKeyPress={ handleKey }
                    onChange={ (e) => {setSearchVal(e.target.value)}}
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

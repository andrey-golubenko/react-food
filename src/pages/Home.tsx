import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Preloader } from '../components/Preloader'
import { getAllCategories } from '../api'
import { CategoryList } from '../components/CategoryList'
import { Search } from '../components/Search'
import { ICatalogItem } from '../interfaces'

export const Home: React.FC = () => {
    const [catalog, setCatalog] = useState<ICatalogItem[]>([]);
    const [filteredCatalog, setFilteredCatalog] = useState<ICatalogItem[]>([]);
    const { pathname, search } = useLocation();
    const { push } = useHistory();

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog( search ?
                data.categories.filter(
                (elem: ICatalogItem) =>
                    elem.strCategory
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase() )
                ) : data.categories
            );
            } )
    }, [search]);

    const handleSearch = (searchStr: string ) => {
        setFilteredCatalog(
            catalog.filter(elem => elem.strCategory.toLowerCase().includes( searchStr.toLowerCase() ) )
        );
        push({
            pathname,
            search: `?search=${ searchStr }`
        })
    };

    return (
        <>
            <Search cb={ handleSearch } />
            {
                !catalog.length ? <Preloader /> :
                <CategoryList catalog={ filteredCatalog } />
            }
        </>
    )
};
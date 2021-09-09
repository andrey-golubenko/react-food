import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ICategoryItem, IInitFoodSliceState } from '../interfaces'
import { API_URL } from '../config'

const initialState: IInitFoodSliceState = {
    categories  : [],
    meals       : [],
    singleMeal  : {},
    status      : null,
    error       : null,
    searchVal   : ''
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async function (search: string | null = null, {rejectWithValue}) {
        try {
            const response = await fetch( API_URL + 'categories.php');
            if (!response.ok) {
                throw new Error('Server error')
            }
            const data = await response.json();

            if (search) {
               return data.categories.filter(
                    (elem: ICategoryItem) =>
                        elem.strCategory
                            .toLowerCase()
                            .includes(search.split('=')[1].toLowerCase() ) )
            } else {
                return data.categories;
            }
        }
        catch (error) {
           return rejectWithValue(error.message)
        }
    }
);

export const fetchMeals = createAsyncThunk(
    'meals/fetchMeals',
    async function (catName: string, {rejectWithValue }) {
        try {
            const response = await fetch(API_URL + 'filter.php?c=' + catName);
            if (!response.ok) {
                throw new Error ('Server error')
            }
            const data = await response.json();
            return data.meals
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const fetchSingleMeal = createAsyncThunk(
    'singleMeal/fetchSingleMeal',
    async function (mealId: string, {rejectWithValue} ) {
        try {
            const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
            if (!response.ok) {
                throw new Error ('Server error')
            }
            const data = await response.json();
            return data.meals[0];
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        setSearchVal(state, action) {
            state.searchVal = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
            state.status = 'loading';
            state.error = null
        })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string
            } )
            .addCase(fetchMeals.pending, (state, action) => {
                state.status = 'loading';
                state.error = null
            })
            .addCase(fetchMeals.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.meals = action.payload
            })
            .addCase(fetchMeals.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string
            } )
            .addCase(fetchSingleMeal.pending, (state, action) => {
                state.status = 'loading';
                state.error = null
            })
            .addCase(fetchSingleMeal.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.singleMeal = action.payload
            })
            .addCase(fetchSingleMeal.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string
            })
    }

});

export const { setSearchVal } = foodSlice.actions;

export const foodReducer = foodSlice.reducer;

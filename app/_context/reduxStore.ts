import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


/**
 * The initial state of the currency.
 *
 * @constant initialState { CounterState } The initial state of the counter.
 * @constant initialState.currency { number } The counter value.
 * @constant currencySlice { Slice } The currency slice.
 * @constant currencySlice.name { string } The name of the slice.
 * @constant currencySlice.initialState { CounterState } The initial state of the slice.
 * @constant currencySlice.reducers { ReducersMapObject } The reducers of the slice.
 * @constant currencySlice.reducers.setCurrency { Reducer } The set currency reducer.
 * @constant store { Store } The Redux store.
 * @constant store.reducer { Reducer } The reducer of the store.
 * @constant store.actions { Actions } The actions of the store.
 * @constant store.actions.setCurrency { ActionCreator } The set currency action creator.
 *
 * @since 3.0.0
 */
const initialState = {
	currency: 'bdt',
}

const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		setCurrency: (state, action) => {
			state.currency = action.payload
		},
	},
})

export const store = configureStore({
	reducer: currencySlice.reducer,
})

export const { setCurrency } = currencySlice.actions

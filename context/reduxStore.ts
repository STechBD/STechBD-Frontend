import type { State } from '@/data/type'
import config from '@/stech.config'
import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


/**
 * The initial state of the app.
 *
 * @constant { Object } initialState The initial state of the app.
 *
 * @property { boolean } lightMode The light mode of the app.
 * @property { string } theme The theme of the app.
 * @property { boolean } loader The loader of the app.
 * @property { boolean } sidebar The sidebar of the app.
 * @property { boolean } modal The modal of the app.
 * @property { JSX.Element | null } component The component of the app.
 * @property { boolean } app The app of the app.
 *
 * @since 3.0.0
 */
const initialState: State = {
	lightMode: true,
	theme: config.themes[0],
	currency: config.currencies[0].name,
	loader: true,
	header: true,
	footer: true,
	sidebar: false,
	modal: false,
	component: null,
	app: false,
}


/**
 * The state slice of the app.
 *
 * @constant { Object } stateSlice The state slice of the app.
 * @property { string } name The name of the state slice.
 * @property { Object } initialState The initial state of the state slice.
 * @property { Object } reducers The reducers of the state slice.
 *
 * @since 3.0.0
 */
const stateSlice = createSlice({
	name: 'state',
	initialState,
	reducers: {
		setMode: (state: State, action) => {
			state.lightMode = action.payload
		},
		toggleMode: (state: State) => {
			state.lightMode = !state.lightMode
		},
		setTheme: (state: State, action) => {
			state.theme = action.payload
		},
		setCurrency: (state: State, action) => {
			state.currency = action.payload
		},
		setLoader: (state: State, action) => {
			state.loader = action.payload
		},
		toggleLoader: (state: State) => {
			state.loader = !state.loader
		},
		setHeader: (state: State, action) => {
			state.header = action.payload
		},
		setFooter: (state: State, action) => {
			state.footer = action.payload
		},
		setSidebar: (state: State, action) => {
			state.sidebar = action.payload
		},
		toggleSidebar: (state: State) => {
			state.sidebar = !state.sidebar
		},
		setModal: (state: State, action) => {
			state.modal = action.payload
		},
		toggleModal: (state: State) => {
			state.modal = !state.modal
		},
		setComponent: (state: State, action) => {
			state.component = action.payload
		},
		setApp: (state: State, action) => {
			state.app = action.payload
		},
		toggleApp: (state: State) => {
			state.app = !state.app
		},
	},
})


/**
 * The store of the app.
 *
 * @constant { Object } store The store of the app.
 * @property { Object } reducer The reducer of the store.
 *
 * @since 3.0.0
 */
export const store = configureStore({
	reducer: stateSlice.reducer,
})


/**
 * The actions of the state slice.
 *
 * @since 1.0.0
 */
export const {
	setMode,
	toggleMode,
	setCurrency,
	setLoader,
	setHeader,
	setFooter,
	toggleLoader,
	setTheme,
	setSidebar,
	toggleSidebar,
	setModal,
	toggleModal,
	setComponent,
	setApp,
	toggleApp
} = stateSlice.actions


export default stateSlice.reducer

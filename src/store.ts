import {configureStore} from '@reduxjs/toolkit'
import { tasksReducer } from './features/tasks-slice'
import { usersReducer } from './features/users-slice';
import { itemApi } from './services/api-service';

const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		users: usersReducer,
		[itemApi.reducerPath]: itemApi.reducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(itemApi.middleware)
	},
})

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;
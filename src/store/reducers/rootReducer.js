import dashboardReducer from './dashboardReducer'
import tasksReducer from './currentTodo'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer,
    firestore: firestoreReducer
});

export default rootReducer
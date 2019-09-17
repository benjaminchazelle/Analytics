import {combineReducers} from 'redux'
import showDrawerReducer from './showDrawerReducer'
import visitFilterReducer from './visitFilterReducer'
import visitDataReducer from './visitDataReducer'

const rootReducer = combineReducers({
    showDrawer: showDrawerReducer,
    visitFilter: visitFilterReducer,
    visitData: visitDataReducer,
});

export default rootReducer
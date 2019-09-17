import {TOGGLE_DRAWER} from '../constants/DrawerActionTypes'

const showDrawerReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return !state;
        default:
            return state
    }
};

export default showDrawerReducer
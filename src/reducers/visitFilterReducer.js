import {RESET_FILTERS, SET_VISIT_PERIOD_FILTER, TOGGLE_VISIT_ORIGIN_FILTER} from '../constants/VisitFilterActionTypes'
import {subDays} from 'date-fns'

const getDefaultState = () => ({
    origins: {
        desktop: true,
        mobile: true,
        bot: true,
        owner: false,
    },
    period: {
        from: subDays(new Date(), 365),
        to: new Date(),
    }
});


const visitFilterReducer = (state = getDefaultState(), action) => {
    switch (action.type) {
        case TOGGLE_VISIT_ORIGIN_FILTER:
            if (Object.keys(getDefaultState().origins).includes(action.origin)) {
                let newState = Object.assign({}, state);
                newState.origins[action.origin] = !newState.origins[action.origin];
                return newState;
            }
            return state;

        case SET_VISIT_PERIOD_FILTER:
            if (Object.keys(getDefaultState().period).includes(action.bound)) {
                let newState = Object.assign({}, state);
                newState.period[action.bound] = action.date;
                return newState;
            }
            return state;

        case RESET_FILTERS:
            console.log(getDefaultState().origins.desktop);
            return getDefaultState();

        default:
            return state
    }
};

export default visitFilterReducer
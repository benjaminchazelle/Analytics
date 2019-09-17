import * as types from '../constants/VisitFilterActionTypes'

export const toggleVisitOriginFilter = (origin) => ({
    type: types.TOGGLE_VISIT_ORIGIN_FILTER,
    origin: origin
});

export const setVisitPeriodFilter = (bound, date) => ({
    type: types.SET_VISIT_PERIOD_FILTER,
    bound: bound,
    date: date
});

export const resetFilters = () => ({
    type: types.RESET_FILTERS
});

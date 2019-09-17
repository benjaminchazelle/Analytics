import {
    FETCH_VISIT_DATA_BEGIN,
    FETCH_VISIT_DATA_FAILURE,
    FETCH_VISIT_DATA_SUCCESS
} from '../constants/VisitDataActionTypes'

const initialState = {
    data: [],
    loading: false,
    error: null
};

const visitDataReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_VISIT_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_VISIT_DATA_SUCCESS:

            return {
                ...state,
                loading: false,
                data: action.payload.data
            };

        case FETCH_VISIT_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            };

        default:
            return state
    }
};

export default visitDataReducer
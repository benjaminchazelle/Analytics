import * as types from "../constants/VisitDataActionTypes";

export function fetchVisitData() {
    return dispatch => {
        dispatch(fetchVisitDataBegin());
        return fetch("https://www.chazelle.pro/activites.php")
            .then(handleErrors)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchVisitDataSuccess(data));
                return data;
            })
            .catch(error => dispatch(fetchVisitDataFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchVisitDataBegin = () => ({
    type: types.FETCH_VISIT_DATA_BEGIN
});

export const fetchVisitDataSuccess = (data) => ({
    type: types.FETCH_VISIT_DATA_SUCCESS,
    payload: {data}
});

export const fetchVisitDataFailure = (error) => ({
    type: types.FETCH_VISIT_DATA_FAILURE,
    payload: {error}
});
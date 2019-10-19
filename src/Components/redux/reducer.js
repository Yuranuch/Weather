export const GET_CITY_PARAMS = "GET_CITY_PARAMS"
export const GET_CITY_NAME = "GET_CITY_NAME"

const initialState = {
    params: {main:{}, sys: {}, wind: {}}
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {

        case GET_CITY_PARAMS:
            return {
                ...state,
                params: action.params
            }
        case GET_CITY_NAME:
            return {
                ...state,
                name: action.cityName
            }
    }
    return state
}

export const getCityParams = (params) => ({type: GET_CITY_PARAMS, params})
export const getCityName = (cityName) => ({type: GET_CITY_NAME, cityName})
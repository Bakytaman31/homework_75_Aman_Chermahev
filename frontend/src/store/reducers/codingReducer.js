import {ON_CHANGE, POST_TO_DECODE, POST_TO_ENCODE} from "../actions/actions";

const initialState = {
    encoded: '',
    decoded: '',
};

const  codingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE:
            return {
                ...state,
                [action.name]: action.value
            };
        case POST_TO_ENCODE:
            return {
                ...state,
                decoded: action.postData
            };
        case POST_TO_DECODE:
                return {
                    ...state,
                    encoded: action.postData
                };
        default:
            return state;
    }
};

export default codingReducer;
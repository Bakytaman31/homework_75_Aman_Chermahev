import {ON_CHANGE} from "../actions/actions";

const initialState = {
    encoded: '',
    decoded: '',
    password: ''
};

const  codingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE:
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state;
    }
};

export default codingReducer;
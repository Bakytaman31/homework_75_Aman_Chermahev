import {axiosApp} from "../../axiosApp";
import {ON_CHANGE} from "./actions";

export const onChange = (name, value) => ({type: ON_CHANGE, name, value});

export const postToDecode = postData => {
    return async () => {
        await axiosApp.post('/decode', postData);
    }
};

export const postToEncode = postData => {
    return async () => {
        await axiosApp.post('/encode', postData);
    }
};
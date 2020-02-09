import {axiosApp} from "../../axiosApp";
import {ON_CHANGE, POST_TO_DECODE, POST_TO_ENCODE} from "./actions";

export const onChange = (name, value) => ({type: ON_CHANGE, name, value});
export const postToDecodeSuccess = postData => ({type: POST_TO_DECODE, postData});
export const postToEncodeSuccess = postData => ({type: POST_TO_ENCODE, postData});

export const postToDecode = postData => {
    return async (dispatch) => {
        const response = await axiosApp.post('/decode', postData);
        dispatch(postToDecodeSuccess(response.data.encoded));
    }
};

export const postToEncode = postData => {
    return async (dispatch) => {
        const response = await axiosApp.post('/encode', postData);
        dispatch(postToEncodeSuccess(response.data.decoded));
    }
};
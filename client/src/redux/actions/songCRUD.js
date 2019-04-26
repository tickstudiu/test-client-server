import {
    FETCH_SONG, 
    FETCH_SONG_BY_ID, 
    FETCH_SONG_ERROR, 
    CREATE_SONG, 
    CREATE_SONG_ERROR,
    DELETE_SONG,
    DELETE_SONG_ERROR,
    UPDATE_SONG,
    UPDATE_SONG_ERROR
} from '../types/index';
import { RootUrl } from '../../config';
import * as tools from "../../utils";

export const getSongs = (callback) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/api/songs`);
    if (res.success) {
        await dispatch({
            type: FETCH_SONG,
            payload: res.data
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_SONG_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const getTripById = (callback, id) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/songs/${id}`);
    if (res.success) {
        await dispatch({
            type: FETCH_SONG_BY_ID,
            payload: res.data
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_SONG_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postSong = (callback, data) => async dispatch => {
    const res = await tools.postApi(`${RootUrl}/api/songs`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_SONG,
            payload: res.data,
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_SONG_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const putSong = (callback, id, data) => async dispatch => {
    const res = await tools.putApi(`${RootUrl}/api/songs/${id}`, data);
    if (res.success) {
        await dispatch({
            type: UPDATE_SONG,
            payload: res.data
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: UPDATE_SONG_ERROR,
            payload: res.error.data.messages,
        });
    }
};


export const delSong = (callback, id) => async dispatch => {
    const res = await tools.deleteApi(`${RootUrl}/api/songs/${id}`);
    if (res.success) {
        await dispatch({
            type: DELETE_SONG,
            payload: res.data
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: DELETE_SONG_ERROR,
            payload: res.error.data.messages,
        });
    }
};
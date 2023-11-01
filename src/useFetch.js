import React from "react";
import { useState, useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
    SET_LOADING,
    SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH,
  } from './actions'
const mainUrl = 'https://hn.algolia.com/api/v1/search?';
const initialState = {
    loading: false,
}
const useFetch = (paramsUrl) => {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    const {query, page} = paramsUrl;
    const [stateFetch, dispatch] = useReducer(reducer, initialState);
    // console.log(state);
    // console.log(paramsUrl);
    const fetchAPI = async() => {
        try {
            // setLoading(true);
            dispatch({type:SET_LOADING, arg: true})
            const res = await fetch(`${mainUrl}query=${query}&page=${page}`);
            const ret = await res.json();
            setData(ret);
        } catch (error) {
            console.log(error);
        }finally{
            // setLoading(false);
            dispatch({type:SET_LOADING, arg: false})
        }
    }
    useEffect(() =>{
        fetchAPI();
        // console.log('hi');
    },[page, query]);

    return {data, stateFetch}
}
export default useFetch;


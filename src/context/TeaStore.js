import React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

// this page is for fetching and storing teas fetched from api

const initialState = {
    categories: [],
    data: {}
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };

        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};


const TeaStore = (child) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.categories.length === 0 || Object.keys(state.data).length < 0) loadTeaData(dispatch);
        else {
            console.log(state.categories)
            console.log(state.data)
        }    
    })

    return (
        <TeaContext.Provider value={[state, dispatch]}>
            {child}
        </TeaContext.Provider>
    )
};

const loadTeaData = async (teaStoreDispatch) => {
    const instance = axios.create({
        baseURL: 'https://enigmatic-badlands-63270.herokuapp.com/',
        timeout: 1000,
      });

    
    let categories = []
    await instance('/api/category').then((res) => {
        categories = res.data.categories;
    })

    const data = {}
    await Promise.all(categories.map((name) => {
        return instance(`/api/category/${name}`).then((res) => {
            data[name] = res.data;
        });
    }));

    teaStoreDispatch({type: 'SET_CATEGORIES', payload: categories})
    teaStoreDispatch({type: 'SET_DATA', payload: data})
}

export default TeaStore;

export const TeaContext = createContext(initialState);

export function useTeaContext () {
    return useContext(TeaContext);
}

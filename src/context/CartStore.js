import React from "react";
import { createContext, useContext, useReducer } from "react";

// this page is for fetching and storing teas fetched from api

const initialState = {
    items: {}, // { <item id>: <item object> }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ITEM':
            // action.payload --> {id: <item id>, item: <item object>}
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload.item
                }
            };
        case 'REMOVE_ITEM':
            // action.payload --> <item id>
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: undefined
                }
            };
        default:
            return state;
    }
};


const CartStore = (child) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={[state, dispatch]}>
            {child}
        </CartContext.Provider>
    )
};

export default CartStore;

export const CartContext = createContext(initialState);

export function useCartContext () {
    return useContext(CartContext);
}

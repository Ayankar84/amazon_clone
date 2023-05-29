const initialState = {
    products: [],
    userId:"",
    cart: {
        data: [],
        totalQty: 0
    }
}

const reducer = (state = initialState, { type, payload }) => {
    if (type === "GET_DATA_SUCCESS") {
        return {
            ...state, products: payload
        }
    } 
    else if (type === "GET_CARTDATA") {
        return {
            ...state, cart: payload
        }
    }else if(type === "SET_ID"){
        return {
            ...state, userId: payload
        }
    }
    if(type === "RESET"){
        return {
            ...state, userId: "", cart: payload
        }
    }

    return state;
}

export default reducer;
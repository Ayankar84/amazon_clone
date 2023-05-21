const initialState = {
    products: [],
    cart:[]
}

const reducer = (state=initialState, {type, payload})=>{
    if(type === "GET_DATA_SUCCESS"){
        return {
            ...state, products: payload
        }
    }

    return state;
}

export default reducer;
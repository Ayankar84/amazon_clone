

export const saveData = (payload)=>{
    return(
        {
            type: "GET_DATA_SUCCESS",
            payload
        }
    )
}
export const changeCart = (payload)=>{
    return(
        {
            type: "GET_CARTDATA",
            payload
        }
    )
}
export const setId = (payload)=>{
    return(
        {
            type: "SET_ID",
            payload
        }
    )
}
export const reset = (payload)=>{
    return(
        {
            type: "RESET",
            payload
        }
    )
}

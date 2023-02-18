const initialState={
    cart:[],
    product:[],
    category:[],
}
export const ProductReducer = (state=initialState, action) => {
switch (action.type) {
    case "ADD_TO_CART":
        return{
            ...state,
            cart:action.payload
        }
        break;
    case "ADD_PRODUCTS":
        return{
            ...state,
            product:action.payload
        }
        break;
    case "ADD_TO_CATEGORY":
        return{
            ...state,
            category:action.payload
        }
        break;
}
return state
}
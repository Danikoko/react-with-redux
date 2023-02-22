import ActionTypes from "../constants/ActionTypes";

interface Products {
    products: any[]
}

const initialState: Products = {
    products: []
}

const productReducer = (state: Products = initialState, { type, payload }: any) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
}

export { productReducer };
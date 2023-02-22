import ActionTypes from "../constants/ActionTypes";

interface Products {
    products: any[]
}

const initialState: Products = {
    products: [
        {
            id: 1,
            title: 'Daniel',
            category: 'Programmer'
        }
    ]
}

const productReducer = (state: Products = initialState, {type}: any) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state;
    }
}

export { productReducer };
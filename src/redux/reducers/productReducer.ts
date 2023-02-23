import ActionTypes from "../constants/ActionTypes";

interface Rating {
    rate: number,
    count: number
}

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
}

const initialProductsState: Product[] = [];
const initialProductState: Product|any = {};

const productReducer = (state: Product[] = initialProductsState, { type, payload }: any) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return [
                ...state, 
                ...payload
            ];
        case ActionTypes.REMOVE_PRODUCTS:
            return [];
        default:
            return state;
    }
}

const selectedProductReducer = (state: Product = initialProductState, { type, payload }: any) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { 
                ...state, 
                ...payload
            };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export { 
    productReducer,
    selectedProductReducer 
};
import ActionTypes from "../constants/ActionTypes"
const setProducts = (products: any) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

const selectedProduct = (product: any) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

const removeSelectedProduct = (product: any) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product
    }
}

export { 
    setProducts, 
    selectedProduct, 
    removeSelectedProduct 
};
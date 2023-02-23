import ActionTypes from "../constants/ActionTypes";

const setProducts = (products: any) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

const removeProducts = () => {
    return {
        type: ActionTypes.REMOVE_PRODUCTS
    }
}

const selectedProduct = (product: any) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export { 
    setProducts, 
    selectedProduct, 
    removeProducts,
    removeSelectedProduct 
};
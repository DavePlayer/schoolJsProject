import { Iproducts } from './../reducers/products'

export const addProduct = (payload:Iproducts) => {
    return {
        type: "ADD_NEW_PRODUCT",
        payload
    }
}
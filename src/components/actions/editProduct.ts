import { Iproducts } from './../reducers/products'

export const editProducts = (index:number, payload:Iproducts) => {
    return {
        type: "EDIT_PRODUCT",
        index,
        payload,
    }
}
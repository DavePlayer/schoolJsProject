import { Iproducts } from './../reducers/products'

export const loadFromLocalStorage = () => {
    return {
        type: "LOAD_FROM_LOCALSTORAGE",
    }
}
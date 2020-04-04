import { Iproducts } from './../reducers/products'

export const moveToTrolley = (payload:Iproducts) => {
    return {
        type: "MOVE_TO_TROLLEY",
        payload,
    }
}
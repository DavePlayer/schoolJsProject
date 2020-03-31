import { Action } from "redux"

export const example = (state:boolean = false, action: Action) => {
    switch(action.type){
        case "NIE_DZIALA":
            return !state
        default:
            return state
    }
}

export const isAdding = (state:boolean = false, action:any) => {
    switch(action.type){
        case "CHANGE_STATE":
            return !state
        default:
            return state
    }
}
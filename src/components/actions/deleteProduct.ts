
export const deleteProduct = (id:number) => {
    return {
        type: "DELETE_PRODUCT",
        id,
    }
}
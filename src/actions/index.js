


export const addOne = () => {
    console.log("add one")
    return {type: "ADD_1"}
}


export const change = (num) => {
    console.log("change to", num)
    return {type: "CHANGE", payload: num}
}
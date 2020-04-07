

const initialState = {
    number: 0
}


const reducer = (state = initialState, action) => {
    console.log('made it to reducer', action)
    switch(action.type) {
        case "ADD_1":
            
            return{
                number: state.number + 1 
            }
        case "CHANGE":
            console.log("change")
            return{
                number: action.payload
            }
        default:
            return state;
    }

}

export default reducer;
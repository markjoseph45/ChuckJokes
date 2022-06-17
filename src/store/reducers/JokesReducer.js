const initState = {
    jokes: [],
    categories: [],
}

const JokesReducer = (state = initState, action) => {
    switch (action.type) {
        case "COLLECTION":
            let data = action.payload.map(item => {
                item.categories = item.categories.toString();
                item.likes = 0;
                item.dislikes = 0;
                return item;
            })
            return {
                ...state,
                jokes: data
            };
        default:
            return state;
    }
}

export default JokesReducer;
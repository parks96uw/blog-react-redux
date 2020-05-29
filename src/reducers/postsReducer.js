// Maintain a list of posts
// Initialize first call to be an empty array (when the state is undefined)
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}
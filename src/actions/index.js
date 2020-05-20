import jsonPlaceholder from '../apis/jsonplaceholder';

// Action creators can return an object or a function
// Manually dispatch an action in the future
// A function that returns a function
// Asynchronous action creators
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    // Call the dispatch with the object you want to return
    dispatch({type: 'FETCH_POSTS', payload: response})
};

// Can still make normal action creators
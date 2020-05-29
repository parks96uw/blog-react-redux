import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)))

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
};

// Action creators can return an object or a function
// Manually dispatch an action in the future
// A function that returns a function
// Asynchronous action creators
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    // Call the dispatch with the object you want to return
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

// This fetches users for every post, even if they have been called before
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
}

// Fetch user once -- memoization
// A function that returns a function that returns the dispatch
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });


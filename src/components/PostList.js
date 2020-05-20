import React from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

// We use a class component so we can utilize lifecycle methods
class PostList extends React.Component {
    
    // Once our component is rendered, we call our action creator which will fetch the posts
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>PostList</div>
        )
    }

}

export default connect(
    null,
    { fetchPosts }
)(PostList);
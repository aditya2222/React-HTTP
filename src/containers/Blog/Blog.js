import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map((el, index) => {
                    return {
                        ...el,
                        author: 'Max'
                    }
                })
                this.setState({
                    posts: updatedPosts
                })
            })
    }
    render() {
        const posts = this.state.posts.map((el, index) => {
            return <Post key={el.id} title={el.title} author={el.author} />
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
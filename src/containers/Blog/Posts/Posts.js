import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import { Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

class Posts extends Component {

    state = {
        posts: [],
    };


    componentDidMount() {
        console.log(this.props)
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((el, index) => {
                    return {
                        ...el,
                        author: 'Max'
                    }
                });
                this.setState({
                    posts: updatedPosts
                })
            })
            .catch(error => {
                console.log(error)
                // this.setState({
                //     error: true
                // })
            })
    }


    postSelectedHandler = (id) => {
        this.props.history.push({ pathname: '/posts/' + id })
    }



    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((el, index) => {
                return (
                    <Post key={el.id} title={el.title} author={el.author}
                        clicked={() => this.postSelectedHandler(el.id)} />
                )
                // <Link key={el.id} to={'/' + el.id}>

                // </Link>
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>

        )
    }
}

export default Posts
import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import { Route, NavLink, Switch } from 'react-router-dom'

class Blog extends Component {
    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/posts/" activeClassName="my-active" activeStyle={{ color: '#fa923f', textDecoration: 'underline' }}>Home</NavLink></li>
                            <li><NavLink exact to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>


            </div >
        );
    }
}

export default Blog;
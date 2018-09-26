import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts'
//import NewPost from './NewPost/NewPost'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent'


const AsyncNewPost = asyncComponent(()=>{

	return import('./NewPost/NewPost');

});



class Blog extends Component {
	state = {
		auth: true
	}
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
			{this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
			<Route path="/posts" component={Posts} />
			{/*The below route will catch all routes which are not taken care by any other routes thus acting as a 404 page*/}
			<Route render={()=><h1>Not Found</h1>} />
			{/*<Redirect from="/" to="/posts" />*/}			
			</Switch>


			</div >
		);
	}
}

export default Blog;

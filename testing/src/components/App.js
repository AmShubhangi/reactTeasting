import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './app.css';

class App extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)} className="glow-on-hover" type="button">Sign Out</button>
            )
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)} className="glow-on-hover" type="button">Sign In</button>
            )
        }
    }

    renderHeader() {
        return (
            <div style={{ marginTop: -14 }} className="animating">
                <ul style={{
                    display: 'flex',
                    listStyle: 'none'
                }}>
                    <li style={{ padding: 10 }}><Link style={{ color: 'black' }} to='/'>Home</Link></li>
                    <li style={{ padding: 10 }}><Link style={{ color: 'black' }} to='/post'>Post a comment</Link></li>
                    <li style={{ padding: 10 }}>{this.renderButton()}</li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.renderHeader()}
                <Route path='/post' component={CommentBox} />
                <Route path='/' exact component={CommentList} />
            </>
        )
    };
};

// passing data between the components
function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
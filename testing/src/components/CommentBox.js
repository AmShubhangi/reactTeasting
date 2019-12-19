import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment)
        this.setState({ comment: '' })
    };

    render() {
        return (
            <form className="ui form" style={{ marginLeft: 50, marginRight: 50, padding: '2%' }}
                onSubmit={this.handleSubmit}>
                <h4 style={{ textAlign: 'center' }}>Add Your Thoughts</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} placeholder="Tell us more" style={{ minHeight: 50, alignContent: 'center' }} rows="3" />
                <div style={{
                    paddingLeft: '46%',
                    paddingRight: '46%',
                    paddingTop: '3%',
                    paddingBottom: '3%'
                }}>
                    <button className="ui vertical animated button">
                        <div className="hidden content">Submit</div>
                        <div className="visible content">Click</div>
                    </button>
                </div>
            </form >
        );
    }
}

export default connect(null, actions)(CommentBox);
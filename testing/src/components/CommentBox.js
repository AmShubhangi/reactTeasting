import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
    state = { comment: '', error: '' };

    handleChange = (event) => {
        this.setState({ error: '' })
        this.setState({ comment: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.comment !== '') {
            this.props.saveComment(this.state.comment)
        } else {
            this.setState({ error: 'Empty field not allowed!' })
        }
        this.setState({ comment: '' })
    };

    handleClear = (event) => {
        event.preventDefault();
        this.setState({ comment: '' });
        this.setState({ error: '' });
    };

    render() {
        return (
            <>
                <form className="ui form" style={{ marginLeft: 50, marginRight: 50, padding: '2%' }}>
                    <h4 style={{ textAlign: 'center' }}>Add Your Thoughts</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} placeholder="Tell us more" style={{ minHeight: 50, alignContent: 'center' }} rows="3" />
                    <div style={{
                        paddingLeft: '37%',
                        paddingRight: '37%',
                        paddingTop: '3%',
                        paddingBottom: '3%'
                    }}>
                        <div style={{ display: 'flex' }}>
                            <button onClick={this.handleSubmit} className="ui vertical animated button">
                                <div className="hidden content">Submit</div>
                                <div className="visible content">Click</div>
                            </button>
                            <button onClick={this.handleClear} className="ui vertical animated button">
                                <div className="hidden content">Clear</div>
                                <div className="visible content">Click</div>
                            </button>
                            <button id="dd" onClick={(event) => {
                                event.preventDefault();
                                return this.props.fetchComments()
                            }} className="ui vertical animated button">
                                <div className="hidden content">Fetch</div>
                                <div className="visible content">Click</div>
                            </button>
                        </div>
                        <p style={{ color: 'red', marginTop: '3%' }}>{this.state.error}</p>
                    </div>
                </form>
            </>
        );
    }
}



export default connect(null, actions)(CommentBox);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

    renderComments() {
        return this.props.comments.map(comment => {
            return <li style={{
                wordWrap: 'break-word', lineHeight: 1.7, marginBottom: 20
            }} key={comment} > <span style={{
                fontfamily: 'sans-serif',
                fontWeight: 600
            }}>{comment}</span> </li >
        });
    }

    render() {
        return (
            <div style={{
                paddingLeft: '4.2%',
                paddingRight: '6.2%'
            }}>
                {this.props.comments.length > 0 ? <span style={{
                    paddingLeft: '2.8%',
                    fontSize: 20,
                    color: 'green',
                    fontWeight: 700
                }}>My Written Diary</span> : ''
                }
                <ul style={{ listStyle: 'decimal' }}>{this.renderComments()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { comments: state.comments } //state.comments came from combineReducer
    //comments :- As per your convenience & same for the map props.comments
}

export default connect(mapStateToProps)(CommentList);
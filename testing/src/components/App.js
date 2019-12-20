import React from 'react';
import { Route } from "react-router-dom";
import CommentList from './CommentList';
import CommentBox from './CommentBox';

export default () => {
    return (
        <>
            <Route path='/' component={CommentBox} />
            <Route path='/' component={CommentList} />
        </>
    );
};
/* @flow */
import React from 'react';
import handler from './handler';
import Comment from './comment';
import PostAuthor from './post-author';

export default handler(({ storeData: post }) => (
  <div styleName="content">
    <div styleName="author">
      <PostAuthor />
    </div>
    <div styleName="content-container">
      <h5>
        #{post.id} {post.title}
      </h5>
      <div styleName="content-body">{post.body}</div>
      <div styleName="content-comment">
        <h6>COMMENTS</h6>
        <Comment />
      </div>
    </div>
  </div>
));

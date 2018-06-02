/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import { listHandler } from './handler';
import { map } from 'ramda';

export default listHandler(({ storeData: post }) => (
  <div>
    {map(
      data => (
        <div styleName="post-item" key={`post-${data.id}`}>
          <span styleName="post-index"># {data.id}</span>
          <Link styleName="post-title" to={`/post/${data.id}`}>
            {data.title}
          </Link>
        </div>
      ),
      post
    )}
  </div>
));

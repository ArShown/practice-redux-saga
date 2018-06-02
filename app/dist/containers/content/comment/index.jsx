/* @flow */
import React from 'react';
import handler from './handler';
import { map } from 'ramda';

export default handler(({ storeData: comment }) => (
  <ul className="collection">
    {map(
      data => (
        <li className="collection-item" key={`comment-${data.id}`}>
          <div styleName="comment-email">{data.email}:</div>
          <div styleName="comment-body">{data.body}</div>
        </li>
      ),
      comment
    )}
  </ul>
));

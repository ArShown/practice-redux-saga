/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import handler from './handler';

export default handler(({ children, title, activePath }) => (
  <div>
    <div styleName="fixed">
      <h1 styleName="header">{title}</h1>
      <div styleName="nav">
        <Link
          styleName={`nav-item ${activePath === 'author' ? 'active' : ''}`}
          to="/author">
          AUTHOR
        </Link>
        <div styleName="nav-divide" />
        <Link
          styleName={`nav-item ${activePath === 'post' ? 'active' : ''}`}
          to="/post">
          POST
        </Link>
      </div>
    </div>
    <div className="container">{children}</div>
  </div>
));

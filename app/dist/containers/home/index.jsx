/* @flow */
import React from 'react';
import handler from './handler';
import UserGrid from '../user-grid';

export default handler(() => (
  <div className="container">
    <h1 className="center">Home</h1>
    <hr />
    <div>
      <UserGrid />
    </div>
  </div>
));

/* @flow */
import React from 'react';
import handler from './handler';

export default handler(({ name, src, setLoaded, loaded }) => (
  <div styleName={`member-box ${loaded ? 'in' : ''}`}>
    <div styleName="member-box-img" className="z-depth-3">
      <img src={src} onLoad={setLoaded} />
    </div>
    <div styleName="member-box-name">{name}</div>
  </div>
));

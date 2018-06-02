/* @flow */
import React from 'react';
import handler from './handler';
import { Link } from 'react-router-dom';
import Member from '~/components/member';
import { map } from 'ramda';

export default handler(({ storeData: user }) => (
  <div className="row">
    {map(
      item => (
        <div key={`user-${item.id}`} className="col s3">
          <Member name={item.name} />
        </div>
      ),
      user
    )}
  </div>
));

/* @flow */
import React from 'react';
import handler from './handler';
import Member from '~/components/member';

export default handler(({ storeData: name }) => <Member name={name} />);

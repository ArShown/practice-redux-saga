import React from 'react';
import { render } from 'react-dom';
import router from '~/core/router';
import Master from '~/containers/master';

render(
  router({
    routerIndex: '/home',
    masterComponent: Master
  }),
  document.getElementById('container')
);

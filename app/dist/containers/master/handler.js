/* @flow */
import { compose, withStyle } from '~/core/container';
import { withProps } from 'recompose';
import master from './master.scss';
import { toUpper, tail } from 'ramda';

export default compose(
  withProps(({ history }) => {
    const activePath = tail(history.location.pathname);
    return {
      title: toUpper(activePath),
      activePath
    };
  }),
  withStyle(master)
);

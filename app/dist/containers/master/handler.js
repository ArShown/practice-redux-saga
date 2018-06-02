/* @flow */
import { compose, withStyle } from '~/core/container';
import { withProps } from 'recompose';
import master from './master.scss';
import { toUpper, split } from 'ramda';

export default compose(
  withProps(({ history }) => {
    const activePath = split('/', history.location.pathname)[1];
    return {
      title: toUpper(activePath),
      activePath
    };
  }),
  withStyle(master)
);

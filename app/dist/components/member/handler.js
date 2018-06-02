/* @flow */
import { compose, withStyle } from '~/core/container';
import { withProps, withState } from 'recompose';
import member from './member.scss';
import { join } from 'ramda';

export default compose(
  withProps(() => {
    const _getColorCode = () => {
      const color = () => parseInt(Math.random() * 255 + 1).toString(16);
      return join('', [color(), color(), color()]);
    };

    return { src: 'http://placehold.it/150/' + _getColorCode() };
  }),
  withState('loaded', 'setLoaded', false),
  withStyle(member)
);

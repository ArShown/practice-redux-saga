/* @flow */
import { compose, withStyle } from '~/core/container';
import { branch, renderNothing, withPropsOnChange, withState } from 'recompose';
import member from './member.scss';
import { join } from 'ramda';

export default branch(
  ({ name }) => !!name,
  renderNothing,
  compose(
    withPropsOnChange(['name'], () => {
      const _getColorCode = () => {
        const color = () => parseInt(Math.random() * 255 + 1).toString(16);
        return join('', [color(), color(), color()]);
      };

      return { src: 'https://placehold.it/150/' + _getColorCode() };
    }),
    withState('loaded', 'setLoaded', false),
    withStyle(member)
  )
);

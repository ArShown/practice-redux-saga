/* @flow */
import { STORE_KEY } from '~/storage/reducer/comment';
import { clearStore } from '~/storage/saga/comment';
import { compose, withStore, withDispatch, withStyle } from '~/core/container';
import { lifecycle } from 'recompose';
import comment from './comment.scss';

export default compose(
  withDispatch,
  lifecycle({
    componentWillUnmount() {
      this.props.dispatch(clearStore);
    }
  }),
  withStore(STORE_KEY),
  withStyle(comment)
);

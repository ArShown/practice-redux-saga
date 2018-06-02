/* @flow */
import { STORE_KEY } from '~/storage/reducer/author';
import { clearStore } from '~/storage/saga/author';
import { compose, withDispatch, withStore } from '~/core/container';
import { lifecycle } from 'recompose';

export default compose(
  withDispatch,
  lifecycle({
    componentWillUnmount() {
      this.props.dispatch(clearStore);
    }
  }),
  withStore(`${STORE_KEY}.0.name`)
);

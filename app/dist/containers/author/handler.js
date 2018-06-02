/* @flow */
import { STORE_KEY } from '~/storage/reducer/author';
import { fetchTrip } from '~/core/action/effects';
import { fetchList, saveToStore, errorEmitter } from '~/storage/saga/author';
import { compose, withStore, withDispatch } from '~/core/container';
import { lifecycle } from 'recompose';

export default compose(
  withDispatch,
  lifecycle({
    componentDidMount() {
      this.props.dispatch(fetchTrip(fetchList, saveToStore, errorEmitter));
    }
  }),
  withStore(STORE_KEY)
);

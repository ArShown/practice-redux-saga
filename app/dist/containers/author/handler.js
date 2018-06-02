/* @flow */
import { STORE_KEY } from '~/storage/reducer/author';
import { fetchTrip } from '~/core/action/effects';
import {
  fetchList,
  saveToStore,
  errorEmitter,
  clearStore
} from '~/storage/saga/author';
import { compose, withStore, withDispatch } from '~/core/container';
import { lifecycle } from 'recompose';

export default compose(
  withDispatch,
  lifecycle({
    componentDidMount() {
      this.props.dispatch(fetchTrip(fetchList, saveToStore, errorEmitter));
    },
    componentWillUnmount() {
      this.props.dispatch(clearStore);
    }
  }),
  withStore(STORE_KEY)
);

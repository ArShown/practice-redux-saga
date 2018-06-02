/* @flow */
import { fetchTrip } from '~/core/action/effects';
import { fetchList, saveToStore, errorEmitter } from '~/storage/saga/user';
import { compose, withDispatch } from '~/core/container';
import { lifecycle } from 'recompose';

export default compose(
  withDispatch,
  lifecycle({
    componentDidMount() {
      this.props.dispatch(fetchTrip(fetchList, saveToStore, errorEmitter));
    }
  })
);

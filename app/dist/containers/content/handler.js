/* @flow */
import { STORE_KEY } from '~/storage/reducer/post';
import { clearStore } from '~/storage/saga/post';
import callbackSaga from './saga';
import { compose, withStore, withDispatch, withStyle } from '~/core/container';
import { lifecycle, branch, renderNothing } from 'recompose';
import content from './content.scss';

export default compose(
  withDispatch,
  lifecycle({
    componentDidMount() {
      this.props.dispatch(callbackSaga(this.props.match.params.id));
    },
    componentWillUnmount() {
      this.props.dispatch(clearStore);
    }
  }),
  withStore(`${STORE_KEY}.0`),
  branch(({ storeData }) => !storeData, renderNothing, withStyle(content))
);

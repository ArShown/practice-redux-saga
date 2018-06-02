/* @flow */
import { STORE_KEY } from '~/storage/reducer/post';
import { fetchTrip } from '~/core/action/effects';
import {
  fetchListByUserId,
  saveToStore,
  errorEmitter,
  clearStore
} from '~/storage/saga/post';
import { compose, withStore, withDispatch, withStyle } from '~/core/container';
import { lifecycle, withState, withHandlers } from 'recompose';
import post from './post.scss';

export const indexHandler = compose(
  withDispatch,
  withState('activePage', 'setActivePage', 0),
  withHandlers({
    fetchPage: ({ dispatch, setActivePage, activePage }) => () => {
      if (activePage === 10) return false;
      setActivePage(activePage + 1);
      dispatch(
        fetchTrip(fetchListByUserId(activePage + 1), saveToStore, errorEmitter)
      );
    }
  }),
  lifecycle({
    componentDidMount() {
      /* 用 userId 模擬分頁加載 */
      this.props.fetchPage();
    },
    componentWillUnmount() {
      this.props.dispatch(clearStore);
    }
  }),
  withStyle(post)
);

/* 發送跟接收拆開 */
export const listHandler = compose(
  withStore(STORE_KEY),
  withStyle(post)
);

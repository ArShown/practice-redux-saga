/* @flow */
import React from 'react';
import { indexHandler } from './handler';
import List from './list';

export default indexHandler(({ fetchPage, activePage }) => (
  <div>
    {/* 列表 */}
    <List />

    {/* 加載按鈕 */}
    <div
      styleName={`fetch-more ${activePage === 10 ? 'done' : ''}`}
      onClick={fetchPage}>
      {activePage === 10 ? '沒有更多資料' : '載入更多'}
    </div>
  </div>
));

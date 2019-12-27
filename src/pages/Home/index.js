/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */


import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import { connect } from 'dva';

import { createAction } from '@/utils';
import AllView from './AllView';
import Game from './Game';
import Stage from './Stage';
import Events from './Events';
import Ticket from './Ticket';
import styles from './index.less';

const TAB_TITLES = [{ title: '总览' }, { title: '游戏' }, { title: '关次' }, { title: '赛事' }, { title: '票面' }];

class Home extends Component {

  handleTabChange = (tab, index) => {
    const { dispatch } = this.props;
    dispatch(createAction('home/updateTabIndex')(index));
  };

  render() {
    const { tabIndex } = this.props;
    console.log('首页tab下标',tabIndex)
    return (
      <div>
        <Tabs tabs={TAB_TITLES} initialPage={tabIndex} onChange={this.handleTabChange}>
          <div className={styles.container}>
            {tabIndex === 0 ? <AllView/> : null}
          </div>
          <div>
            {tabIndex === 1 ? <Game/> : null}
          </div>
          <div>
            {tabIndex === 2 ? <Stage/> : null}
          </div>
          <div>
            {tabIndex === 3 ? <Events/> : null}
          </div>
          <div>
            {tabIndex === 4 ? <Ticket/> : null}
          </div>
        </Tabs>
      </div>
    );
  }
}

export default connect(({home})=>(home))(Home);

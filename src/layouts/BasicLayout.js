/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */
import React, { Component, Fragment } from 'react';
// import { connect } from 'dva';
import MenuBar from '@/components/MenuBar';
import withRouter from 'umi/withRouter';
// import { createAction } from '../utils';
import styles from './basiclayout.less'

// 底部有bar菜单
const BarRoutes = ['/', '/place', '/daily', '/personal'];

class BasicLayout extends Component {

    // componentDidMount() {
        // const { dispatch } = this.props;
        // dispatch(createAction('global/basicLayoutInit')());
    // }

    render() {
        // const { children, location, home:{isMask} } = this.props;
        const { children, location } = this.props;
        const isMask = false;
        if (BarRoutes.indexOf(location.pathname) < 0) {
            return <Fragment>{children}</Fragment>;
        }
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
                <MenuBar pathname={location.pathname}>{children}</MenuBar>
                <div className={isMask ? styles.screen_mask : ''}></div>
            </div>
        );
    }
}

export default withRouter(BasicLayout);
// export default withRouter(connect(({ global,home }) => ({ global,home }))(BasicLayout));

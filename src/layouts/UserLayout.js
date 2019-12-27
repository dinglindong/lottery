/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react';
// import { connect } from 'dva';
// import withRouter from 'umi/withRouter';
// import { createAction } from '@/utils';

class UserLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>{children}</div>
        );
    }
}

// export default withRouter(connect(({ global }) => ({ global }))(UserLayout));
export default UserLayout;

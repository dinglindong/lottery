/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { createAction } from '@/utils';



class Personal extends PureComponent {


  componentDidMount() {
    const { dispatch } = this.props;

    const prames = {
      userName: 'admin',
      token: 'sdadsadasdasds',
    };
    dispatch(createAction('personal/submit')(prames));
  };

  render() {
    const { userName } = this.props;
    console.log(userName);
    return (
      <div>我是={userName}</div>
    );
  }
}


export default connect(({ personal }) => (personal))(Personal);

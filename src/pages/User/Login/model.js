/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */


const initialState = {
    account: '',//用户名
    password: '',//密码
  };

export default {
  namespace: 'login',
  state: initialState,
  subscriptions: {},
  reducers: {},
  effects: {},
};

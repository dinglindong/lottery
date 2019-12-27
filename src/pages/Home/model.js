/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */


const initialState = {
  tabIndex: 0,
};

export default {
  namespace: 'home',
  state: initialState,
  subscriptions: {},
  reducers: {
    updateTabIndex(state, { payload }) {
      return { ...state, tabIndex: payload };
    },
  },
  effects: {},
};

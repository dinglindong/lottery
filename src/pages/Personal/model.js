/**
 * Created by dinglindong on 2019/12/21.
 */

import { getUserInfo } from '@/services/modules/personal';
import { createAction } from '@/utils';

const user = {
  userName: 'lindong',
  regional: '',
  loginTime: '',
  phone: '',
  email: '',

};
export default {
  namespace: 'personal',
  state: user,
  subscriptions: {},
  reducers: {
    init(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    * submit({ payload }, { select, put, call }) {
      const info = yield call(getUserInfo, payload);
      if (info.flag) {
        yield put(createAction('init')(info));
      }
    },
  },
};

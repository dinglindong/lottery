/**
 * @author Lindong Ding
 * @date 2019/12/13
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import moment from 'moment';
import config from '@/services/config';

moment.locale('zh-cn');

export const cookiesExpireTime = time => {
    let expireDate = new Date();
    expireDate = new Date(expireDate.getTime() + time || config.localCacheTime);
    return expireDate;
};


export default moment;

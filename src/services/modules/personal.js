/**
 * Created by dinglindong on 2019/12/21.
 */
import request from '../request';
import Qs from 'qs'

export function getUserInfo(data) {
    return request('/pentaho/user/getUserInfo', {
            method: 'POST',
            body: Qs.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => res?.data || res);
}

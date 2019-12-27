/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */
import fetch from 'dva/fetch';
import router from 'umi/router';
import config from './config';

export const getAPIUrl = (url, type) => {
    if (type === 'wechat') {
        return `${config.wechatServer}${config.apiPath}/${url}`;
    }
    return `${config.apiDomain}${config.apiPath}/${url}`;
};

export const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    if (response.status === 401) {
        router.replace('/user/login');
    }
    return response
        .json()
        .then(data => {
            if (data?.path) {
                throw new Error('请求接口不可用');
            }
            throw new Error(data?.message || '未知错误');
        })
        .catch(err => {
            const errorText =
                (typeof err === 'string' && err) || err?.message || response.statusText;
            const error = new Error(errorText);

            error.name = response.status;
            error.response = response;
            error.errcode = response?.errcode;
            throw error;
        });
};


export default function request(url, newOptions) {

    const apiUrl = getAPIUrl(url, newOptions?.type);
    // console.log(apiUrl)
    return fetch(apiUrl, newOptions)
        .then(checkStatus)
        .then(response => {
            if (newOptions.method === 'DELETE' || response.status === 204) {
                return response.text();
            }
            return response.json();
        })
        .catch(e => {
            if (e?.message === 'Failed to fetch') {
                throw new Error('网络错误，请重试');
            }
            throw e;
        });
}

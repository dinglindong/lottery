/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import { cookiesExpireTime } from './time';
import { isObject, isArray } from './index';


const isStorageSupported = () => {
    let supported = false;
    if (localStorage && localStorage.setItem) {
        supported = true;
        const key = `__${Math.round(Math.random() * 1e7)}`;
        try {
            localStorage.setItem(key, key);
            localStorage.removeItem(key);
        } catch (err) {
            supported = false;
        }
    }
    return supported;
};

const isSessionStorageSupported = () => {
    let supported = false;
    if (sessionStorage && sessionStorage.setItem) {
        supported = true;
        const key = `__${Math.round(Math.random() * 1e7)}`;
        try {
            sessionStorage.setItem(key, key);
            sessionStorage.removeItem(key);
        } catch (err) {
            supported = false;
        }
    }
    return supported;
};

export const getCookies = sKey => {
    if (!sKey) {
        return null;
    }
    return (
        decodeURIComponent(
            document.cookie.replace(
                new RegExp(
                    `(?:(?:^|.*;)\\s*${encodeURIComponent(sKey).replace(
                        /[-.+*]/g,
                        '\\$&',
                    )}\\s*\\=\\s*([^;]*).*$)|^.*$`,
                ),
                '$1',
            ),
        ) || null
    );
};

const data2json = value => {
    let newValue = null;
    try {
        newValue = JSON.parse(value);
    } catch (err) {
        newValue = value;
    }
    return newValue;
};

const data2stringify = value => {
    if (isObject(value) || isArray(value)) {
        return JSON.stringify(value);
    }
    return value;
};

export const setCookies = (sKey, sValue, vEnd, sPath, sDomain, bSecure) => {
    let sExpires = '';
    if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) {
        return false;
    }
    if (vEnd) {
        switch (vEnd.constructor) {
            case Number:
                sExpires =
                    vEnd === Infinity ? 'expires=Fri, 31 Dec 9999 23:59:59 GMT' : `max-age=${vEnd}`;
                break;
            case String:
                sExpires = `expires=${vEnd}`;
                break;
            case Date:
                sExpires = `expires=${vEnd}`;
                break;
            default:
        }
    }
    const encodeSKey = encodeURIComponent(sKey);
    const encodeSValue = encodeURIComponent(sValue);
    document.cookie = `${encodeSKey}=${encodeSValue};${sExpires};${(sDomain &&
        `domain=${sDomain}`) ||
    ''};${(sPath && `path=${sPath}`) || ''};${(bSecure && `secure=${bSecure}`) || ''}`;
    return true;
};

export const getCache = ({ key, type = 3 }) => {
    let value = null;
    if (type === 1 && isStorageSupported()) {
        value = localStorage.getItem(key);
    } else if (type === 2 && isSessionStorageSupported()) {
        value = sessionStorage.getItem(key);
    } else {
        value = getCookies(key);
    }
    value = data2json(value);
    return value;
};

// type  1 localStorage 2 sessionStorage 3 cookies (降级处理)
export const setCache = ({ key, value, time, type = 1 }) => {
    const newValue = data2stringify(value);
    if (type === 1 && isStorageSupported()) {
        localStorage.setItem(key, newValue);
        return;
    } else if (type === 2 && isSessionStorageSupported()) {
        sessionStorage.setItem(key, newValue);
        return;
    }
    setCookies(key, newValue, cookiesExpireTime(time));
};

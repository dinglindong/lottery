/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

export const isArray = o => {
    return (
        (o || false) &&
        (o.constructor === Array || Object.prototype.toString.call(o) === '[object Array]')
    );
};

export const isObject = o => {
    return (
        (o || false) &&
        (o.constructor === Object || Object.prototype.toString.call(o) === '[object Object]')
    );
};

export const isString = o => {
    return (o === '' || o || false) && o.constructor === String;
};

export const createAction = type => payload => ({
    type,
    payload,
});

const getValueFormState = props => state => props.reduce((parent, child) => parent[child], state);

const getLoadingFormState = type => state => !!state.loading.effects[type];

export const selector = (...props) => {
    const trailProps = props[props.length - 1];
    if (isString(trailProps)) {
        return getValueFormState(props);
    }
    if (isArray(trailProps)) {
        const parentProps = props.slice(0, -1);
        return trailProps.map(trailProp => getValueFormState(parentProps.concat(trailProp)));
    }
    throw new Error('传入的参数错误');
};

export const loadingSelector = types => {
    if (isString(types)) {
        return getLoadingFormState(types);
    }
    if (isArray(types)) {
        return types.map(item => getLoadingFormState(item));
    }
    throw new Error('传入的参数错误');
};


let delayTimeout = null;
/* eslint compat/compat:0 */
export const delay = (timeout = 1000) =>
    new Promise(resolve => {
        delayTimeout = setTimeout(() => {
            if (delayTimeout) {
                clearTimeout(delayTimeout);
                delayTimeout = null;
            }
            resolve();
        }, timeout);
    });

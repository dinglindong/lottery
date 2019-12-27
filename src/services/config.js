/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

const config = {
    dev: {
        apiDomain: 'http://192.168.5.87:8088',
        apiPath: '',
    },
    reporter: {
        apiDomain: 'http://localhost:8882',
        apiPath: '/api',
    },
    prod: {
        apiDomain: 'http://localhost:8883',
        apiPath: '/api',
    },
};

const common = {
    localCacheAlias: {
        token: 'token',
        time: 'loginTime',
        name: 'userName',
        region: 'region',
    },
    localCacheTime: 1000 * 3600 * 24 * 30,
};

let env = '';

if (process.env.NODE_ENV === 'production') {
    env = 'prod';
} else if (process.env.NODE_ENV === 'reporter') {
    env = 'reporter';
} else {
    env = 'dev';
}

if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line global-require
    require('dotenv').load();
    if (process.env.REACT_APP_REPORTER === 'reporter') {
        env = 'reporter';
    }
}


export default Object.freeze({ ...config[env], ...common });

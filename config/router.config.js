/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

export default [
    {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
            {
                path: '/user',
                component: '../layouts/UserLayout',
                routes: [
                    {
                        path: '/user/login',
                        component: './User/Login',
                        title: '用户登录',
                    },
                ],
            },
            {
                path: '/',
                component: './Home',
                title: '销售',
            },
            {
                path: '/place',
                component: './Place',
                title: '渠道',
            },
            {
                path: '/daily',
                component: './Daily',
                title: '日报',
            },
            {
                path: '/personal',
                component: './Personal',
                title: '我的',
            },
            { component: '404', title: '页面未找到' },
        ],
    },
];

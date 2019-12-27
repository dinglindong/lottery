/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */
import path from 'path';
import pageRoutes from './router.config';

export default {
    treeShaking: true,
    routes: pageRoutes,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: false,
            title: {
                defaultTitle: '测试',
            },
            dll: false,
            hd: true,
            routes: [],
        }],
    ],
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    cssnano: {
        mergeRules: false,
    },
    hash: true,
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
};


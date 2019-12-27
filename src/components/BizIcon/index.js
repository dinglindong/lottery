/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React from 'react';

const BizIcon = props => {
    const { type, styles, className, text } = props;
    return <i className={`iconfont icon-${type} ${className || ''}`} style={{ ...styles }}>{text}</i>;
};
export default BizIcon;

/**
 * @author Lindong Ding
 * @date 2019/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Router from 'umi/router';
import BizIcon from '@/components/BizIcon';

const TabBarItem = TabBar.Item;
const tabBarData = [
    {
        title: '销售',
        icon: 'tongji',
        selectedIcon: 'tongjied',
        link: '/',
    },
    {
        title: '渠道',
        icon: 'qudao',
        selectedIcon: 'qudaoed',
        link: '/place',
    },
    {
        title: '日报',
        icon: 'ribao',
        selectedIcon: 'ribaoed',
        link: '/daily',
    },
    {
        title: '我的',
        icon: 'geren',
        selectedIcon: 'gerened',
        link: '/personal',
    },
];

class MenuBar extends Component {
    render() {
        const { children, pathname } = this.props;
        return (
            <TabBar>
                {
                    tabBarData.map(({ title, icon, selectedIcon, link }) => (
                        <TabBarItem
                            key={link}
                            title={title}
                            icon={<BizIcon type={icon} styles={{ fontSize: '0.36rem' }}/>}
                            selectedIcon={<BizIcon type={selectedIcon} styles={{ fontSize: '0.36rem' }}/>}
                            selected={pathname === link}
                            onPress={() => {
                                return Router.push(`${link}`);
                            }}
                        >
                            {children.props.location.pathname === link && children}
                        </TabBarItem>
                    ))
                }
            </TabBar>
        );
    }
}

export default MenuBar;

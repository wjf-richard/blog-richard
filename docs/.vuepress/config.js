/*
 * @Date: 2020-05-07 17:28:52
 * @LastEditors: Richard
 * @LastEditTime: 2020-05-11 15:19:08
 */

// var nav = require('./links/nav.js');

module.exports = {
	base: '/blog-richard/',
	title: 'richard-FE',
	description: 'Vuepress blog from richard',
	themeConfig: {
		// 右上角导航栏---

		// 你的GitHub仓库，请正确填写
		repo: 'https://github.com/wjf-richard/blog-richard',
		// 自定义仓库链接文字。
		repoLabel: 'My GitHub',
		nav: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'FirstBlog',
				link: '/blog/FirstBlog.md',
			}
		],
		// 侧边栏-----
		sidebar: [
			['/', '首页'],
			['/blog/FirstBlog.md', '我的第一篇博客']
		]
	}
}

const {defaultTheme} = require('@vuepress/theme-default')

module.exports = {
    title: 'Jc小站',
    description: 'Just playing around',
    port: 8090,
    theme: defaultTheme({
        navbar: [
            {
                text: 'AboutMe', link: '/'
            },
            {
                text: '理想架构', link: '/guide/'
            },
            {
                text: 'External', link: 'https://google.com'
            }
        ],
        sidebar: [
            // SidebarItem
            {
                text: '关于我',
                link: '/',
            },
        ],
        // sidebar: 'auto',
    })
}
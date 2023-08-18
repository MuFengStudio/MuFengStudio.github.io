const { createApp, ref, watchEffect } = Vue

const RELEASES_URL = "https://gitee.com/api/v5/repos/Jesse205/AideLua/releases/latest"

// 获取元素的绝对位置坐标（像对于页面左上角）
function getElementPagePositionY(element) {

  //计算y坐标
  var actualTop = element.offsetTop;
  var current = element.offsetParent;
  while (current !== null) {
    actualTop += (current.offsetTop + current.clientTop);
    current = current.offsetParent;
  }
  //返回结果
  return actualTop
}
const appConfig = ref(null)

fetch(RELEASES_URL)
  .then((response) => response.json())
  .catch(function (error) {
    console.warn(error)
  })
  .then((json) => (appConfig.value = json))
  .catch(function (error) {
    console.warn(error)
  })

var app = createApp({
  data: () => {
    return {
      pathname: window.location.pathname,
      name: '猫币4',
      description: '一个应用',
      menus: [
        {
          title: '首页',
          href: '/',
          target: '_self',
          type: 'menu'
        },
        {
          title: '插件下载',
          href: '/plugins.html',
          target: '_blank',
          type: 'menu'
        },
        {
          title: '使用文档',
          href: 'https://aidelua.github.io/AideLua/',
          target: '_self',
          type: 'menu'
        },
        {
          type: 'divider'
        },
        {
          title: 'Gitee 仓库',
          href: 'https://gitee.com/AideLua/AideLua',
          target: '_blank',
          type: 'menu'
        },
        {
          title: 'Github 仓库',
          href: 'https://github.com/AideLua/AideLua',
          target: '_blank',
          type: 'menu'
        }
      ],
      screenshot: [
        {
          title: '丰富的支持库',
          summary: '多种多样的支持库，帮助用户战胜选择困难症',
          src: 'images/screenshots/screenshot_libraries.webp'
        },
        {
          title: '强大的模板',
          summary: '采用模块化模板，大幅提升了模板定制难度',
          src: 'images/screenshots/screenshot_template.webp'
        },
        {
          title: '自由的插件',
          summary: '随时出问题的插件，提升用户应急处突能力',
          src: 'images/screenshots/screenshot_plugins.webp'
        },
        {
          title: '卡顿的体验',
          summary: '非常卡顿的体验，慢慢帮助用户摆脱手机开发',
          src: 'images/screenshots/screenshot_lag.webp'
        }
      ],
      contact: [
        {
          title: '电子邮件',
          icon: 'email-outline',
          href: 'mailto:1785553865@qq.com',
          tooltip: {
            content: '邮箱：1785553865@qq.com'
          }
        },
        {
          title: '体验群',
          icon: 'account-group-outline',
          tooltip: {
            content: '群号：894748324'
          }
        },
        {
          title: '内测群',
          icon: 'account-group-outline',
          tooltip: {
            content: '群号：894748324'
          }
        }
      ],
      links: [
        {
          name: 'MDUI',
          href: 'https://www.mdui.org/'
        },
        {
          name: 'VuePress',
          href: 'https://vuepress.vuejs.org/zh/'
        },
      ],
      isTop: true,
    }
  },
  setup() {

    return {
      appConfig
    }
  },
  mounted() {
    this.isTop = getTopState(window)
    let infoSpaceY = getElementPagePositionY(document.getElementById('appInfoSpace'))
    window.addEventListener('scroll', () => this.isTop = window.scrollY <= infoSpaceY)
    mdui.mutation()
  },
  updated() {
    mdui.mutation()
  }
})


import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import NavControls from './components/NavControls.vue'
import NavScreenControls from './components/NavScreenControls.vue'
import SiteFooter from './components/SiteFooter.vue'
import LeftPageOutline from './components/LeftPageOutline.vue'
import './custom.css'
import './corporate.css'
import './homepage-v2.css'
import './homepage-v3.css'
import './homepage-v4.css'
import './platform.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NavControls),
      'nav-screen-content-after': () => h(NavScreenControls),
      'sidebar-nav-before': () => h(LeftPageOutline),
      'layout-bottom': () => h(SiteFooter)
    })
  }
}

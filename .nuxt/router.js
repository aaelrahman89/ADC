import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38d112cb = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages/about-us/index" */))
const _eaecd6ae = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _cffab5f2 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7571dc22 = () => interopDefault(import('..\\pages\\clinics.vue' /* webpackChunkName: "pages/clinics" */))
const _15c3325e = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _513c6052 = () => interopDefault(import('..\\pages\\doctors\\index.vue' /* webpackChunkName: "pages/doctors/index" */))
const _22756c4e = () => interopDefault(import('..\\pages\\quiz.vue' /* webpackChunkName: "pages/quiz" */))
const _9f88c16a = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _51cc3f7e = () => interopDefault(import('..\\pages\\blog\\category\\_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _43c34d6a = () => interopDefault(import('..\\pages\\blog\\tag\\_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _d367f882 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _54a9a2e2 = () => interopDefault(import('..\\pages\\doctors\\_slug.vue' /* webpackChunkName: "pages/doctors/_slug" */))
const _ef73ab8e = () => interopDefault(import('..\\pages\\search\\_slug.vue' /* webpackChunkName: "pages/search/_slug" */))
const _6e40706e = () => interopDefault(import('..\\pages\\service\\_slug.vue' /* webpackChunkName: "pages/service/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _38d112cb,
    name: "about-us___en"
  }, {
    path: "/ar",
    component: _eaecd6ae,
    name: "index___ar"
  }, {
    path: "/blog",
    component: _cffab5f2,
    name: "blog___en"
  }, {
    path: "/clinics",
    component: _7571dc22,
    name: "clinics___en"
  }, {
    path: "/contact-us",
    component: _15c3325e,
    name: "contact-us___en"
  }, {
    path: "/doctors",
    component: _513c6052,
    name: "doctors___en"
  }, {
    path: "/quiz",
    component: _22756c4e,
    name: "quiz___en"
  }, {
    path: "/services",
    component: _9f88c16a,
    name: "services___en"
  }, {
    path: "/ar/about-us",
    component: _38d112cb,
    name: "about-us___ar"
  }, {
    path: "/ar/blog",
    component: _cffab5f2,
    name: "blog___ar"
  }, {
    path: "/ar/clinics",
    component: _7571dc22,
    name: "clinics___ar"
  }, {
    path: "/ar/contact-us",
    component: _15c3325e,
    name: "contact-us___ar"
  }, {
    path: "/ar/doctors",
    component: _513c6052,
    name: "doctors___ar"
  }, {
    path: "/ar/quiz",
    component: _22756c4e,
    name: "quiz___ar"
  }, {
    path: "/ar/services",
    component: _9f88c16a,
    name: "services___ar"
  }, {
    path: "/ar/blog/category/:slug?",
    component: _51cc3f7e,
    name: "blog-category-slug___ar"
  }, {
    path: "/ar/blog/tag/:slug?",
    component: _43c34d6a,
    name: "blog-tag-slug___ar"
  }, {
    path: "/ar/blog/:slug",
    component: _d367f882,
    name: "blog-slug___ar"
  }, {
    path: "/ar/doctors/:slug",
    component: _54a9a2e2,
    name: "doctors-slug___ar"
  }, {
    path: "/ar/search/:slug?",
    component: _ef73ab8e,
    name: "search-slug___ar"
  }, {
    path: "/ar/service/:slug?",
    component: _6e40706e,
    name: "service-slug___ar"
  }, {
    path: "/blog/category/:slug?",
    component: _51cc3f7e,
    name: "blog-category-slug___en"
  }, {
    path: "/blog/tag/:slug?",
    component: _43c34d6a,
    name: "blog-tag-slug___en"
  }, {
    path: "/blog/:slug",
    component: _d367f882,
    name: "blog-slug___en"
  }, {
    path: "/doctors/:slug",
    component: _54a9a2e2,
    name: "doctors-slug___en"
  }, {
    path: "/search/:slug?",
    component: _ef73ab8e,
    name: "search-slug___en"
  }, {
    path: "/service/:slug?",
    component: _6e40706e,
    name: "service-slug___en"
  }, {
    path: "/",
    component: _eaecd6ae,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

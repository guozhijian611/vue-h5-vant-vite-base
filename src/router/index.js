import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import NProgress from 'nprogress'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: { requiresAuth: true } // 需要登录才能访问
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// 添加进度条配置
NProgress.configure({ showSpinner: false })
// 路由守卫
router.beforeEach((to, from, next) => {
    NProgress.start()
    const userStore = useUserStore()

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!userStore.isAuthenticated) {
            NProgress.done()
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next()
    }
})
router.afterEach(() => {
    NProgress.done()
  })
  
export default router
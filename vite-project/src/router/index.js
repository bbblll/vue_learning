import Login from "components/login.vue"
import Home from "components/home.vue"
import Login1 from "views/login1.vue"
import TEST from "views/test.vue"
import MainPage from "views/mainpage.vue"
import NotFound from 'views/notfound.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import asyncRoutes from './asyncRoutes'

// router instance を作る
const routes = [
    //登録画面1
    {
        path: '/login1',
        name:'/login1',
        component: Login1,
    },
    //登録画面
    { path: '/login',name:'/login', component: Login },
    //Home Page 
    {
        path: '/',
        name: 'admin',
        component: Home,
        children: [
            {
                path: '/',
                component: MainPage,
                meta: {
                    title: '后台首页'
                }
            },
        ]
    },
    //test Page 
    { path: '/test', component: TEST },
    //Notfound
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// ユーザーのメニュー制限によってrouteを追加する
export function addRoutes(menus) {
    let hasnewroute = false
    function add_routes_fun(menu) {
        menu.forEach(item => {
            let item_route = asyncRoutes.find(o => {
                return o.path == item.frontpath
            })
            if (item_route && !router.hasRoute(item_route.name)) {
                router.addRoute('admin', item_route)
                hasnewroute = true
            }
            if (item.child) {
                add_routes_fun(item.child)
            }
        })
    }
    add_routes_fun(menus)
    return hasnewroute
}

export default router

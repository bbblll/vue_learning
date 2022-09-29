
import { router , addRoutes} from '@/router'
import {
    getToken
} from 'api/tokenAction'
import {
    postInfoData
} from 'api/login'
import store from '@/store'

let hasInfoData = false
router.beforeEach(async (to, from, next) => {
    let token = getToken()
    let hasNewRoutes = false
    if(token && !hasInfoData){
        await postInfoData().then((res)=>{
            let infodata = res.data.data
            let menus = infodata.menus
            // console.log(infodata)
            store.commit('SETINFODATA', infodata)
            hasNewRoutes = addRoutes(menus)
            hasInfoData = true
        })
    }
    if(!token && (to.path!='/login'&& to.path!='/login1')){
        next('/login')
    }
    // if(token && to.path == 'login'){
    //     from.path?next(from.path):next('/')
    // }
    // 
    hasNewRoutes?next(to.fullPath):next()
})
import GoodList from 'views/goods/list.vue'
import CategoryList from 'views/category/list.vue'
import UserList from 'views/user/list.vue'
import OrderList from 'views/order/list.vue'
import CommentList from 'views/comment/list.vue'
import ImageList from 'views/image/list.vue'
import NoticeList from 'views/notice/list.vue'
import SettingBase from 'views/setting/base.vue'
import CouponList from 'views/coupon/list.vue'
import ManagerList from 'views/manager/list.vue'
import AccessList from 'views/access/list.vue'
import RoleList from 'views/role/list.vue'
import SkusList from 'views/skus/list.vue'
import LevelList from 'views/level/list.vue'
import SettingBuy from 'views/setting/buy.vue'
import SettingShip from 'views/setting/ship.vue'
import DistributionIndex from 'views/distribution/index.vue'
import DistributionSetting from 'views/distribution/setting.vue'


// 動的にrouteを追加するための配列
const asyncRoutes = [{
    path:"/goods/list",
    name:"/goods/list",
    component:GoodList,
    meta:{
        title:"商品管理"
    }
},{
    path:"/category/list",
    name:"/category/list",
    component:CategoryList,
    meta:{
        title:"分類管理"
    }
},{
    path:"/user/list",
    name:"/user/list",
    component:UserList,
    meta:{
        title:"ユーザー管理"
    }
},{
    path:"/order/list",
    name:"/order/list",
    component:OrderList,
    meta:{
        title:"注文管理"
    }
},{
    path:"/comment/list",
    name:"/comment/list",
    component:CommentList,
    meta:{
        title:"コメント管理"
    }
},{
    path:"/image/list",
    name:"/image/list",
    component:ImageList,
    meta:{
        title:"画像管理"
    }
},{
    path:"/notice/list",
    name:"/notice/list",
    component:NoticeList,
    meta:{
        title:"掲示管理"
    }
},{
    path:"/setting/base",
    name:"/setting/base",
    component:SettingBase,
    meta:{
        title:"基礎設置"
    }
},{
    path:"/coupon/list",
    name:"/coupon/list",
    component:CouponList,
    meta:{
        title:"クーポン管理"
    }
},{
    path:"/manager/list",
    name:"/manager/list",
    component:ManagerList,
    meta:{
        title:"管理者管理"
    }
},{
    path:"/access/list",
    name:"/access/list",
    component:AccessList,
    meta:{
        title:"権限管理"
    }
},{
    path:"/role/list",
    name:"/role/list",
    component:RoleList,
    meta:{
        title:"役割管理"
    }
},{
    path:"/skus/list",
    name:"/skus/list",
    component:SkusList,
    meta:{
        title:"規格管理"
    }
},{
    path:"/level/list",
    name:"/level/list",
    component:LevelList,
    meta:{
        title:"会員管理"
    }
},{
    path:"/setting/buy",
    name:"/setting/buy",
    component:SettingBuy,
    meta:{
        title:"お支払い設定"
    }
},{
    path:"/setting/ship",
    name:"/setting/ship",
    component:SettingShip,
    meta:{
        title:"物流管理"
    }
},{
    path:"/distribution/index",
    name:"/distribution/index",
    component:DistributionIndex,
    meta:{
        title:"流通員管理"
    }
},{
    path:"/distribution/setting",
    name:"/distribution/setting",
    component:DistributionSetting,
    meta:{
        title:"流通設置"
    }
}]


export default asyncRoutes
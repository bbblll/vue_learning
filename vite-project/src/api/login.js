import instance from './instance'

// 登録請求{username,password}
export function postlogin(data){
    return instance.post('admin/login',data)
}
// homepageに入るとき、homepageデータを請求する
export function postInfoData(){
    return instance.post('admin/getinfo')
}

export default {}
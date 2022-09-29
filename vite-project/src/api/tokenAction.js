import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['locale'])

// tokenを追加する
export function setToken(token){
    cookies.set('admin-token',token)
}
// tokenを読み込む
export function getToken(){
    let token = cookies.get('admin-token')
    // console.log(token)
    return token?.token
}
// tokenを消す
export function removeToken(){
    cookies.remove('admin-token')
}

export default {}
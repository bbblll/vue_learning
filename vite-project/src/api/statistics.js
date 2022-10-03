import instance from './instance'

// データ１を請求
export function getstatistics_1() {
    return instance.get('admin/statistics1')
}
// データ２を請求
export function getstatistics_2() {
    return instance.get('admin/statistics2')
}
// データ３を請求
// typeは三種類ある：hour,week,month
export function getstatistics_3(type) {
    return instance.get(`admin/statistics3?type=${ type }`)
}
export default {}
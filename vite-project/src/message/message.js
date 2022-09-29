import { ElMessage } from 'element-plus'

export function messageBox(type, message) {
    if(type =='error'){
        ElMessage.error('操作失敗')
        return
    }
    ElMessage({
        message: message,
        type: type,
    })
}

export default {}
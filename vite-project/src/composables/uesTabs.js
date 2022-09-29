import { ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import {cookies} from '@/api/tokenAction.js'


export default function useInitTabs() {
    //active tabの値
    const route = useRoute()
    const router = useRouter()
    const editableTabsValue = ref(route.path)

    //tabが変更された場合
    function tabclick(tab) {
        editableTabsValue.value = tab.props.name
        router.push(tab.props.name)
    }
    //pageが変更する前、active tabを変更する
    onBeforeRouteUpdate((to) => {
        //clickされたtabのnameはpathと同じ場合
        if (editableTabsValue.value == to.path) return
        //clickされたtabのnameはpathと違う場合
        //そして、tabはまだ追加されたかどうかを確認する
        let item = editableTabs.value.find(o => {
            return o.name == to.path
        })
        //追加されていない場合
        if (!item) {
            let newtab = {
                name: to.path,
                meta: to.meta
            }
            editableTabs.value.push(newtab)
            cookies.set('tablist',editableTabs.value)
        }
        editableTabsValue.value = to.path
    })

    //clickしたtabを消す場合、このtabの前のtabのnameに移動する
    function tabremove(name) {
        let index = editableTabs.value.findIndex(o => {
            return o.name == name
        })
        editableTabs.value.splice(index, 1)
        if (editableTabsValue.value == name) router.push(editableTabs.value[index - 1].name)
    }
    const temp = cookies.get('tablist')
    const initTabList =temp?temp:[
        {
            name: '/',
            meta: {
                title: '后台控制'
            }
        }
    ]
    const editableTabs = ref(initTabList)
    
    return {
        editableTabsValue,
        tabclick,
        tabremove,
        editableTabs,
    }
}
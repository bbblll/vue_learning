<template>
    <div class="taglist-container">
        <el-tabs v-model="editableTabsValue" type="card" class="p-1">
            <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.meta.title" :name="item.name"
            :closable="item.name !='/'">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import { ref,computed } from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const editableTabsValue = computed(()=>{
    return route.path
})
const editableTabs = ref([
    {
        name: '/',
        meta: {
            title: '后台控制'
        }
    },
    {
        name: 'yu',
        meta: {
            title: '后台'
        }
    }
])
</script>

<style scoped>
.taglist-container {
    position: absolute;
    inset: 0;
    background-color: rgb(240, 240, 240, .7);
}

:deep(.el-tabs__item.is-active) {
    color: rgb(255, 255, 255) !important;
}

:deep(.el-tabs__item) {
    color: rgb(124, 124, 124) !important;
    background-color: rgb(255, 198, 208);
    border: 2px solid rgba(67, 67, 67, 0.461) !important;
    margin-left: 4px;
    border-radius: 15px;
}
:deep(.el-tabs__nav){
    border:0 !important;
}
:deep(.el-tabs__header){
    border: 0 !important;
    margin-top: 4px;
}
</style>
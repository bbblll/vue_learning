<template>
    <div class="taglist-container">
        <el-tabs
            v-model="editableTabsValue"
            type="card"
            class="p-1"
            @tab-click="(tab) => tabclick(tab)"
            @tab-remove="(name) => tabremove(name)"
        >
            <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.meta.title"
                :name="item.name"
                :closable="item.name != '/'"
            >
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import useInitTabs from "@/composables/uesTabs.js";
const { editableTabsValue, tabclick, tabremove, editableTabs } = useInitTabs();
</script>

<style scoped>
.taglist-container {
    position: absolute;
    inset: 0;
    background-color: rgb(240, 240, 240, 0.7);
}

:deep(.el-tabs__item.is-active) {
    color: rgb(255, 255, 255) !important;
}

:deep(.el-tabs__item) {
    color: #44403c !important;
    background-color: #f87171;
    border: 2px solid rgba(67, 67, 67, 0.461) !important;
    margin-left: 4px;
    border-radius: 15px;
    line-height: 22px !important;
    font-size: small;
    height: 35px !important;
    padding: 5px !important;
}

:deep(.el-tabs__nav) {
    border: 0 !important;
}

:deep(.el-tabs__header) {
    border: 0 !important;
    margin-top: 0px;
}
</style>

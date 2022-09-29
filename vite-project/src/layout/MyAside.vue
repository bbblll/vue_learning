<template>
    <div class="aside-container">
        <!-- <el-menu default-active="/"> -->
            <el-menu :default-active="default_active" :router='true'>
            <el-sub-menu v-for="(submenu,submenu_key) in $store.state.infoData?.menus" :key="submenu_key"
                :index="submenu.name">
                <template #title>
                    <el-icon>
                        <component :is="submenu.icon"></component>
                    </el-icon>
                    <span>{{submenu.name}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="(item,item_key) in submenu.child" :index="item.frontpath" :key="item_key">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{item.name}}</span>
                        </template>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script setup>
import {useRoute,onBeforeRouteUpdate} from 'vue-router';
import {ref} from 'vue'

const default_active = ref('')
const route = useRoute()
// const router = useRouter()

// console.log(route)
default_active.value = route.path

onBeforeRouteUpdate((to) => {
    default_active.value = to.path
})

</script>

<style scoped>
.aside-container {
    position: absolute;
    inset: 0;
    /* box-shadow: inset 0 0 5px red; */
}
*{
    user-select: none;
}
</style>
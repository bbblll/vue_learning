<template>
    <el-container class="homepage-container">
        <el-header class="h-15 relative">
            <my-header @menu_close_open="menu_close_open"></my-header>
        </el-header>
        <el-container>
            <el-aside :width="!collapse ? '250px' : '65px'" class="relative">
                <my-aside :collapse="collapse"></my-aside>
            </el-aside>
            <el-main class="relative">
                <el-container class="homepage-container">
                    <el-header class="h-13 relative">
                        <tag-list></tag-list>
                    </el-header>
                    <el-main class="relative">
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import MyAside from "@/layout/MyAside.vue";
import MyHeader from "@/layout/MyHeader.vue";
import TagList from "@/layout/TagList.vue";
import { ref } from "vue";

const collapse = ref(false);
function menu_close_open(collapse_value) {
    collapse.value = collapse_value;
}
</script>
<style scoped>
.homepage-container {
    position: absolute;
    inset: 0;
}

.border-red {
    border: 1px solid red;
}

.el-aside {
    transition: all 0.5s;
}
</style>

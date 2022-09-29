<template>
    <el-container class="homepage-container">
        <el-header class="h-15 relative">
            <my-header></my-header>
        </el-header>
        <el-container>
            <el-aside width="250px" class="relative">
                <my-aside></my-aside>
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
// import store from '@/store'
import MyAside from '@/layout/MyAside.vue';
import MyHeader from '@/layout/MyHeader.vue';
import TagList from '@/layout/TagList.vue';

// import {
//     postInfoData
// } from 'api/login'

// ユーザーの基礎情報を保存する
// function saveInfoData() {
//     postInfoData()
//         .then((res) => {
//             // console.log(res)
//             let infodata = res.data.data
//             store.commit('SETINFODATA', infodata)
//         })
// }
// saveInfoData()
</script>
<style scoped>
.homepage-container {
    position: absolute;
    inset: 0;
}

.border-red {
    border: 1px solid red;
}
</style>
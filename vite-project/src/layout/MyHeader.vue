<template>
    <!-- ここはシステムの上の部分である、主にはlogo、avatar、メニューの開け・閉じ、ユーザーネームなどが含む -->
    <div class="header-container">
        <!-- logo -->
        <div class="h-full w-[250px] text-4xl flex items-center text-light-500">
            <el-icon class="ml-4">
                <Box />
            </el-icon>
            <div class="text-xl ml-4">商品管理</div>
        </div>
        <!-- menu開け -->
        <div v-if="isexpand" class="icon-box" @click="menu_close_open(true)">
            <el-icon>
                <Fold />
            </el-icon>
        </div>
        <!-- menu閉じ -->
        <div v-if="!isexpand" class="icon-box" @click="menu_close_open(false)">
            <el-icon>
                <Expand />
            </el-icon>
        </div>
        <!-- screen最大化 -->
        <div class="ml-auto"></div>
        <div class="icon-box mr-4">
            <el-icon>
                <FullScreen />
            </el-icon>
        </div>
        <!-- avatar -->
        <div class="icon-box mr-1">
            <el-avatar :size="30" :src="$store.state.infoData?.avatar" />
        </div>
        <!-- ユーザーネーム -->
        <div class="text-xs min-w-10">
            {{ $store.state.infoData?.username }}
        </div>

        <el-dropdown>
            <div class="icon-box">
                <el-icon>
                    <CaretBottom />
                </el-icon>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>パスワード変更</el-dropdown-item>
                    <el-dropdown-item>ログアウト</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
<script setup>
import { defineEmits, ref } from "vue";

const isexpand = ref(true);
const emits = defineEmits(["menu_close_open"]);
function menu_close_open(collapse) {
    emits("menu_close_open", collapse);
    isexpand.value = !collapse;
}
</script>

<style scoped>
* {
    user-select: none;
}

.header-container {
    color: rgb(255, 255, 255, 0.9);
    font-size: 1.2rem;
    align-items: center;
    display: flex;
    position: absolute;
    inset: 0;
    background-color: #f87171;
}

.icon-box {
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-box:hover {
    font-size: 1.5rem;
}

.icon-box:active {
    font-size: 1.2rem;
}
</style>

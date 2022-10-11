<template>
    <el-row :gutter="20">
        <el-col :span="3" :offset="0" v-for="(item, key) in box_nav" :key="key">
            <el-card
                shadow="hover"
                :body-style="{ padding: '0px' }"
                @click="router.push(item.name)"
            >
                <div class="flex flex-1 mt-4">
                    <el-icon class="ml-auto mr-auto" :color="item.color">
                        <component :is="item.logo" />
                    </el-icon>
                </div>
                <div class="flex flex-1 my-3">
                    <div class="ml-auto mr-auto">
                        {{ item.title }}
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="3" :offset="0"></el-col>
    </el-row>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const box_nav = ref([
    {
        logo: "User",
        name: "/user/list",
        title: "ユーザー",
        color: "DodgerBlue",
    },
    {
        logo: "ShoppingCartFull",
        name: "/goods/list",
        title: "商品",
        color: "SlateBlue",
    },
    {
        logo: "Document",
        name: "/order/list",
        title: "注文",
        color: "Violet",
    },
    {
        logo: "ChatLineRound",
        name: "/good/list",
        title: "コメント",
        color: "MediumSeaGreen",
    },
    {
        logo: "Picture",
        name: "/comment/list",
        title: "ギャラリー",
        color: "Tomato",
    },
    {
        logo: "Bell",
        name: "/good/list",
        title: "掲示",
        color: "MediumSeaGreen",
    },
    {
        logo: "Setting",
        name: "/setting/base",
        title: "設置",
        color: "Gray",
    },
    {
        logo: "Postcard",
        name: "/coupon/list",
        title: "クーポン",
        color: "Orange",
    },
]);
</script>

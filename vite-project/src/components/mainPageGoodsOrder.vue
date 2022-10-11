<template>
    <el-card shadow="never" :body-style="{ padding: '15px' }">
        <template #header>
            <div class="flex flex-1">
                <div class="text-sm">ストアと製品のヒント</div>
                <el-tag :type="'danger'" effect="light" class="ml-auto">
                    ストアと製品のヒント
                </el-tag>
            </div>
        </template>
        <el-row :gutter="25">
            <el-col
                :span="6"
                :offset="0"
                v-for="(item, key) in statistics2_goods"
                :key="key"
            >
                <el-card
                    shadow="hover"
                    :body-style="{ padding: '0px' }"
                    class="bg-gray-100 rounded-md my-3 py-3"
                >
                    <div class="flex flex-1">
                        <div class="mx-auto">
                            {{ toJapanese[item.label] }}
                        </div>
                    </div>
                    <div class="flex flex-1 mt-1">
                        <div class="mx-auto">
                            {{ item.value }}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-card>

    <el-card shadow="never" :body-style="{ padding: '15px' }" class="mt-3">
        <template #header>
            <div class="flex flex-1">
                <div class="text-sm">注文のヒント</div>
                <el-tag :type="'danger'" effect="light" class="ml-auto">
                    すぐに処理する必要がある注文
                </el-tag>
            </div>
        </template>
        <el-row :gutter="25">
            <el-col
                :span="6"
                :offset="0"
                v-for="(item, key) in statistics2_order"
                :key="key"
            >
                <el-card
                    shadow="hover"
                    :body-style="{ padding: '0px' }"
                    class="bg-gray-100 rounded-md my-3 py-3"
                >
                    <div class="flex flex-1">
                        <div class="mx-auto">
                            {{ toJapanese[item.label] }}
                        </div>
                    </div>
                    <div class="flex flex-1 mt-1">
                        <div class="mx-auto">
                            {{ item.value }}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-card>
</template>
<script setup>
import { defineProps } from "vue";
import toJapanese from "@/language/toJapanese.js";

defineProps({
    statistics2_order: {
        type: Array,
        default: [],
    },
    statistics2_goods: {
        type: Array,
        default: [],
    },
});
</script>

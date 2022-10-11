<template>
    <el-col v-for="(item, key) in statistics1_panels" :span="6" :offset="0" :key="key">
        <el-card shadow="hover" class="h-49 rounded-md">
            <div class="flex flex-1">
                {{ toJapanese[item.title] }}
                <el-tag :type="item.unitColor" effect="light" class="ml-auto">
                    {{ toJapanese[item.unit] }}
                </el-tag>
            </div>
            <hr class="mt-2" />
            <div class="h-25 p-3">
                <data-vue
                    :data="item.value"
                    :num_type="key == 2 ? 'float' : 'int'"
                ></data-vue>
            </div>
            <hr class="mb-1" />
            <div class="flex flex-1">
                <span>{{ toJapanese[item.subTitle] }}</span>
                <span class="ml-auto mr-4">{{ item.subValue }}</span>
            </div>
        </el-card>
    </el-col>
</template>

<script setup>
import { defineProps } from "vue";
import toJapanese from "@/language/toJapanese.js";
import dataVue from "components/data.vue";

defineProps({
    statistics1_panels: {
        type: Array,
        default: [],
    },
});
</script>

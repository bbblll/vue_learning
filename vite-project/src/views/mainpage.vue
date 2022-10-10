<template>
    <div class="main-container">
        <div class="page-container">
            <el-row :gutter="35">
                <el-col v-for="item in panels" :span="6" :offset="0">
                    <el-card shadow="hover" class="h-49 rounded-md">
                        <div class="flex flex-1">
                            {{item.title}}
                            <el-tag :type="item.unitColor" effect="light" class="ml-auto ">
                                {{ item.unit }}
                            </el-tag>
                        </div>
                        <hr class="mt-2">
                        <!-- card body -->
                        <div class="text-gray-400 text-3xl h-25 p-3">
                            {{item.value}}
                        </div>
                        <hr class="mb-1">
                        <div class="flex flex-1">
                            <span>{{item.subTitle}}</span>
                            <span class="ml-auto mr-4">{{item.subValue}}</span>
                        </div>
                    </el-card>
                </el-col>
                {{panels}}
            </el-row>
        </div>
    </div>
</template>
<script setup>
import {
    getstatistics_1,
    getstatistics_2,
    getstatistics_3
} from 'api/statistics.js'
import { ref } from 'vue'

const panels = ref([])

getstatistics_1().then((res) => {
    panels.value = res.data.data.panels
})


</script>
<style scoped>
.main-container {
    position: absolute;
    inset: 0;
    /* box-shadow: inset 0 0 5px red; */
    background-color: rgb(240, 240, 240, .7);
}

.page-container {
    position: absolute;
    inset: 0 15px 15px 15px;
    background-color: white;
    border-radius: 12px;
    padding: 15px;
    overflow-y: auto;
}
</style>
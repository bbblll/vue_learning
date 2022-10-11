<template>
    <div class="main-container">
        <div class="page-container">
            <!-- ログイン画面 -->
            <el-row v-if="panels_loading" :gutter="20" class="mb-3">
                <el-col v-for="key in 4" :span="6" :offset="0" :key="key">
                    <el-card shadow="hover" class="h-49 rounded-md">
                        <el-skeleton :animated="true"></el-skeleton>
                    </el-card>
                </el-col>
            </el-row>
            <!-- panelsデータ -->
            <el-row v-if="!panels_loading" :gutter="20" class="mb-3">
                <panels :statistics1_panels="statistics1_panels" />
            </el-row>
            <!-- box_navs -->
            <box-navs />
            <el-row :gutter="20" class="mt-4">
                <!-- 注文統計 -->
                <el-col :span="12" :offset="0">
                    <main-page-chart />
                </el-col>
                <el-col :span="12" :offset="0">
                    <!-- statistics2_goods_orderの展示 -->
                    <goods-order
                        :statistics2_goods="statistics2_goods"
                        :statistics2_order="statistics2_order"
                    />
                    <!-- statistics2_goods_orderの展示 -->
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script setup>
import { getstatistics_1, getstatistics_2 } from "api/statistics.js";
import { ref } from "vue";
import boxNavs from "components/mainPageBoxNavs.vue";
import goodsOrder from "components/mainPageGoodsOrder.vue";
import panels from "components/mainPagePanels.vue";
import mainPageChart from "components/mainPageEchart.vue";

const statistics1_panels = ref([]);
const panels_loading = ref(true);

const statistics2_goods = ref([]);
const statistics2_order = ref([]);

getstatistics_1()
    .then((res) => {
        panels_loading.value = true;
        statistics1_panels.value = res.data.data.panels;
    })
    .finally(() => {
        panels_loading.value = false;
    });

getstatistics_2().then((res) => {
    statistics2_goods.value = res.data.data.goods;
    statistics2_order.value = res.data.data.order;
});
</script>

<style scoped>
.main-container {
    position: absolute;
    inset: 0;
    /* box-shadow: inset 0 0 5px red; */
    background-color: rgb(240, 240, 240, 0.7);
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

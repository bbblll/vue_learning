<template>
    <el-card
        shadow="never"
        :body-style="{ padding: '0px' }"
        v-loading="statistics3_loading"
    >
        <template #header>
            <div class="flex flex-1">
                <div>注文統計</div>
                <div class="ml-auto">
                    <el-button type="primary" plain size="small" @click="get_data('week')"
                        >週</el-button
                    >
                    <el-button
                        type="primary"
                        plain
                        size="small"
                        @click="get_data('month')"
                        >月</el-button
                    >
                    <el-button type="primary" plain size="small" @click="get_data('hour')"
                        >24時間</el-button
                    >
                </div>
            </div>
        </template>
        <div id="echart" class="h-70 w-130"></div>
    </el-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import { getstatistics_3 } from "api/statistics.js";

let statistics3_option = "";
const statistics3_loading = ref(Boolean);

var myChart;
var option = {
    color: ["#f87171"],
    xAxis: {
        type: "category",
        data: [],
    },
    yAxis: {
        type: "value",
    },
    series: [
        {
            data: [],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)",
            },
        },
    ],
};

onMounted(() => {
    let chartDom = document.getElementById("echart");
    myChart = echarts.init(chartDom);
    get_data("week");
});

function get_data(type) {
    if (statistics3_option == type) {
        return;
    }
    getstatistics_3(type)
        .then((res) => {
            statistics3_loading.value = true;
            let statistics3 = res.data.data;
            option.xAxis.data = statistics3.x;
            option.series[0].data = statistics3.y;
            myChart.setOption(option);
        })
        .finally(() => {
            statistics3_option = type;
            statistics3_loading.value = false;
        });
}
</script>

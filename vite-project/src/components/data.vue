<template>
    <!-- データを０から設置した数値まで、動的に展示する -->
    <div class="text-gray-400 text-xl">{{ num }}</div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const num = ref(0);
const props = defineProps({
    data: {
        type: Number,
        default: 0,
    },
    num_type: {
        type: String,
        default: "int",
    },
});

const final = props.data;
let i = 0;
let temp = 0;
const timer = setInterval(() => {
    i = i + 1;
    if (i == 20) {
        num.value = final;
        clearInterval(timer);
        return;
    }
    // console.log(temp, final);
    temp += (final - temp) / 20;
    num.value = Math.floor(temp);
    if (props.num_type == "float") {
        num.value = temp.toFixed(2);
    }
}, 50);
</script>

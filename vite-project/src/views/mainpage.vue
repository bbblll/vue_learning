<template>
    <div class="main-container">
        <div class="page-container">
            {{$store.state.infoData?.menus[1]}}

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
}
</style>
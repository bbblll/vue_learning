<template>
    <div>
        <el-drawer v-model="drawerRef" title="技術関連" direction="ttb" size='60%'>
            <el-tabs v-model="activeName" type="card" class="mt-[-20px]">
                <el-tab-pane label="FRAME" name="first">
                    <el-form label-width="100px">
                        <el-form-item label="ビルドツール">
                            <div>Vite 3.1.0</div>
                        </el-form-item>
                        <el-form-item label="js言語">
                            <div>VUE 3.0</div>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="CSS" name="second">
                    <el-form label-width="100px">
                        <el-form-item label="CSSツール">
                            <div>WindiCSS 1.8.8</div>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="UI" name="third">
                    <el-form label-width="100px">
                        <el-form-item label="UIツール">
                            <div>ElementPlus</div>
                        </el-form-item>
                        <el-form-item label="データツール">
                            <div>EChart</div>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="API" name="fourth">
                    <el-form label-width="100px">
                        <el-form-item label="API Address">
                            <a href="http://dishaxy.dishait.cn/shopadminapi">http://dishaxy.dishait.cn/shopadminapi</a>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="他のツール" name="Fifth">
                    <ul class="float-left">
                        <li>
                            axios
                        </li>
                        <li>
                            vueUse
                        </li>
                        <li>
                            vue-router
                        </li>
                        <li>
                            vuex
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="EDITOR" name="sixth">
                    <el-form label-width="100px">
                        <el-form-item label="Editor exe">
                            <div>Vscode</div>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-drawer>
    </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

const drawerRef = ref(false)
const open = () => drawerRef.value = true
const close = () => drawerRef.value = false

const activeName = ref('first')

defineExpose({
    open, close
})

</script>

<style scoped>
a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>

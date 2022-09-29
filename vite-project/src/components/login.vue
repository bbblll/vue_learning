<template>
    <div class="login-container" v-loading="loading">
        <div class="grass"></div>
        <div class="login-form">
            <div class="formtitle">商品管理システム</div>
            <el-form :model="form" ref="formRef" :rules="rules" label-width="120px">
                <el-form-item label="username" prop="username">
                    <input type="text" v-model="form.username" placeholder="ユーザーネーム">
                </el-form-item>
                <el-form-item label="password" prop="password">
                    <input type="password" v-model="form.password" placeholder="パスワード">
                </el-form-item>
                <el-form-item>
                    <div class="login-button" @click="submit">登録</div>
                </el-form-item>
                <el-form-item label="">
                    <small>技術関連についてが知りたい場合は<a @click="openInfer">こち</a>をクリック</small>
                </el-form-item>
            </el-form>
        </div>
        <Information ref="inforDrawerRef" />
    </div>
</template>
<script setup>
import { ref, reactive } from "vue"
import {
    postlogin
}from 'api/login'
import {
    setToken,
}from 'api/tokenAction'
import {router} from 'router'
import Information from 'components/information.vue'
import {
    messageBox
}from '@/message/message'

const rules = reactive({
    username: [
        { required: true, message: 'ユーザーネームを入力してください', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'パスワードパスワードを入力してください', trigger: 'blur' },
    ],
})
const formRef = ref(null)
const form = reactive({
    username: 'admin',
    password: 'admin'
})
// submit事件
const loading = ref(false)
function submit(){
    loading.value = true
    postlogin(form)
    .then((res)=>{
        let token = res.data.data
        // console.log(token)
        setToken(token)
        router.push('/')
        messageBox('success','登録成功')
    })
    .finally(()=>{
        loading.value = false
    })
}

// 技術関連drawer
const inforDrawerRef = ref(null)
function openInfer(){
    inforDrawerRef.value.open()
}

</script>

<style scoped>
* {
    user-select: none;
}

.login-container {
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(to right, white, pink);
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 20rem;
    width: 30rem;
    border-radius: 10%;
    border-top:2px solid rgb(255, 255, 255,.3);
    border-left:2px solid rgb(255, 255, 255,.3);
    box-shadow: 2px 2px 2px rgb(0,0,0,.2);
}

a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

input,
elinput {
    width: 70% !important;
    outline: none !important;
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid rgb(20, 20, 20);
    font: 900 15px '';
}

.formtitle {
    font: 900 20px '';
    letter-spacing: 2px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 55px;
}

.login-button {
    text-align: center;
    width: 70%;
    height: 100%;
    background: linear-gradient(to right, white, pink);
    border-radius: 5rem;
    user-select: none;
}

.login-button:active {
    box-shadow: inset 0px 0px 2px;
}
.grass{
    background-color: rgba(74, 74, 74);
    opacity: 0.2;
    height: 20rem;
    width: 30rem;
    border-radius: 10%;
    box-shadow: 0px 0px 1px rgb(0,0,0);
}
</style>

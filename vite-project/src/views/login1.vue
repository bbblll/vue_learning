<template>
    <div class="login-container xycenter" v-loading="loading">
        <input type="checkbox" id="change" style="display:none">
        <div class="change-back"></div>
        <label for="change" class="change-label">登録/ログイン</label>
        <div class="card-container">
            <div class="card-A">
                <div class="card-title">Welcome To Join</div>
                <!-- <input type="text" placeholder="ユーザーネーム"> -->
                <div class="input-box">
                    <div class="input-label">
                        username
                    </div>
                    <input type="text" placeholder="">
                </div>
                <div class="input-box">
                    <div class="input-label">
                        password
                    </div>
                    <input type="text" placeholder="">
                </div>
                <div class="input-box">
                    <div class="input-label">
                        password check
                    </div>
                    <input type="text" placeholder="">
                </div>
                <div class="xycenter">
                    <div class="btn">
                        加入確認
                    </div>
                </div>
                <small>技術関連についてが知りたい場合は<a @click="openInfer">こち</a>をクリック</small>
            </div>
            <div class="card-B">
                <div class="card-title">Welcome Back</div>
                <div class="input-box">
                    <div class="input-label">
                        username
                    </div>
                    <input v-model="form.username" type="text" placeholder="ユーザーネーム">
                </div>
                <div class="input-box">
                    <div class="input-label">
                        password
                    </div>
                    <input v-model="form.password" type="password" placeholder="パスワード">
                </div>
                <div class="xycenter">
                    <div @click="submit" class="btn">
                        登録
                    </div>
                </div>
                <small>技術関連についてが知りたい場合は<a @click="openInfer">こち</a>をクリック</small>
            </div>
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

.xycenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to bottom, white, rgb(36, 140, 148));
    perspective: 800px;
}

.card-container {
    position: relative;
    width: 400px;
    height: 500px;
    transform-style: preserve-3d;
    transition: transform 2s ease;
    perspective: 10000px;
    /* transform: rotateY(180deg); */
}

.card-A,
.card-B {
    position: absolute;
    height: 500px;
    width: 400px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
}

.card-A {
    transform-style: preserve-3d;
    transform: translate3d(0, 0, -1px) rotateY(180deg);
    /* transform:rotateY(180deg); */
    background-color: rgb(104, 173, 178);
}

/* カードを転換する */
#change:checked~.card-container {
    transform: rotateY(180deg);
}

/* カードを転換するボータンの様式 */
.change-label,
.change-back {
    border-radius: 50%;
    text-align: center;
    line-height: 150px;
    position: absolute;
    top: 40px;
    right: 40px;
}

.change-label {
    border: 2px solid rgb(104, 173, 178);
    width: 150px;
    height: 150px;
    animation: shining 2s alternate infinite;
}

.change-back {
    width: 153px;
    height: 153px;
    border-bottom: 2px solid #000;
    filter: blur(3px);
    animation: moving 2s cubic-bezier(.4, .47, .88, .24) infinite;
}

/* 動作１ */
@keyframes shining {
    100% {
        box-shadow: inset 0 0 30px rgb(104, 173, 178);
    }
}

/* 動作２ */
@keyframes moving {
    100% {
        transform: rotate(360deg);
    }
}

input {
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    width: 200px;
    height: 40px;
    font-weight: 500;
    padding-left: 8px;
}

.card-title {
    text-align: center;
    letter-spacing: 2px;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 60px;
}

.btn {
    line-height: 55px;
    width: 250px;
    height: 60px;
    border-radius: 20px;
    text-align: center;
    background-color: rgb(133, 185, 174);
    border: 2px solid black;
    margin-top: 50px;
}

.btn:active {
    transition: 0.2s;
    transform: scale(0.93);
}
.input-box{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    /* border:1px solid red; */
}
.input-label{
    /* border:1px solid red; */
    width: 120px;
    text-align: right;
    margin-right: 5px;
    opacity: .7;
}
a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
small{
    /* border: 1px solid red; */
    position: absolute;
    width: 300px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: 20px;
}
</style>
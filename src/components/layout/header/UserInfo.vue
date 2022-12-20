<template>
    <div class="flex items-center cursor-pointer px-2">
        <el-avatar class=" flex-none" icon="el-icon-user-solid" shape="circle" :src="profile?.avatarUrl ?? circleUrl"
            fit="fill">
        </el-avatar>
        <span class="ml-1.5" v-if="isLogin">{{ profile.nickname }}</span>
        <span class="text-sm ml-2" v-else @click="showLogin = true">未登录</span>
        <IconPark :icon="RightOne" theme="filled" class=""></IconPark>
    </div>

    <el-dialog title="登录" v-model="showLogin" width="330px" append-to-body>
        <div>
            <el-input class="mb-5" v-model="phone" placeholder="手机号码" :prefix-icon="Phone" size="large"> </el-input>
            <el-input class="mb-5" type="password" v-model="password" placeholder="登录密码" :prefix-icon="Lock"
                size="large"> </el-input>
            <el-button type="primary" class="w-full" @click="loginSubmit" :disabled="disabled">登录</el-button>
        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import IconPark from '@/components/common/IconPark.vue'
import { useUserStore } from '@/stores/user';
import { Lock, Phone, RightOne } from '@icon-park/vue-next';
import { storeToRefs } from 'pinia';
const phone = ref('')
const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
const password = ref('')
const disabled = computed(() => {
    return phone.value == "" || password.value == ""
})
const userStore = useUserStore()
const {
    showLogin, profile, isLogin
} = storeToRefs(userStore)
const { login, checkLogin } = userStore
const loginSubmit = () => {
    login(phone.value, password.value)
}
onMounted(() => {
    // checkLogin()
})
</script>

<style scoped>

</style>
<template>
    <div class="flex items-center cursor-pointer">
        <el-avatar class=" flex-none" icon="el-icon-user-solid" size="small" shape="circle"
            :src="profile?.avatarUrl ?? ''" fit="fill"></el-avatar>
        <span class="text-xs ml-1.5" v-if="isLogin">{{ profile.userName }}</span>
        <span class="text-xs ml-1.5" v-else @click="showLogin = true">点击登录</span>
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
import { useUserStore } from '@/stores/user';
import { Lock, Phone } from '@icon-park/vue-next';
import { storeToRefs } from 'pinia';
const phone = ref('')
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
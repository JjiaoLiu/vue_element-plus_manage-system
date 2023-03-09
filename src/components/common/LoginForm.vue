<template>
    <div class="login-form w-1/3 min-w-min bg-zinc-50 p-4 rounded-lg shadow-lg">
        <h1 class=" font-bold text-center mb-4">Manage System</h1>
        <el-form :model="form" ref="formRef" :rules="rules" :inline="false">
            <el-form-item prop="phone">
                <el-input v-model="form.phone" :prefix-icon="User"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" :prefix-icon="Lock"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :loading="loading" class=" w-full" type="primary" @click="submitForm(formRef)">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user';

const form = reactive({ phone: "", password: "" })
const formRef = ref<FormInstance>()
const loading = ref(false)
const { login } = useUserStore()

const rules = reactive<FormRules>({
    phone: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Please input password', trigger: 'blur' },
    ],
})
const submitForm = async (formEl: FormInstance | undefined) => {
    if(!formEl) return false;
    loading.value = true
    let valid = await formEl.validate((valid, fields) => valid)
    if(!valid) return false;
    let isSuccess = await login(form.phone, form.password)
    isSuccess
}
</script>
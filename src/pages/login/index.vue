<template>
    <div class="login h-full">
        <CenterWrapper>
            <LoginForm></LoginForm>
        </CenterWrapper>
    </div>
</template>

<script setup lang="ts">
import CenterWrapper from '@/components/common/CenterWrapper.vue';
import LoginForm from '@/components/common/LoginForm.vue';
</script>

<style scoped>
.login{
    background: url(@/assets/login_bg.jpeg) no-repeat center center;
    background-size: cover;
}
</style>
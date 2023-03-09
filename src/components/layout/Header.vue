<template>
    <div class="layout-header h-full">
        <el-space class="layout-header_right h-full flex justify-end items-center">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <span class="text-white">{{ profile.userName }}</span>
            <el-dropdown trigger="hover" @command="handleCommand">
                <el-button type="primary" :icon="ArrowDown"></el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="logOut">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-space>
    </div>
</template>

<script setup lang="ts">
import type { UserProfile } from "@/models/user";
import { useUserStore } from "@/stores/user";
import { Plus, ArrowDown } from '@element-plus/icons-vue'
const props = defineProps<{ profile: UserProfile }>()
const { logOut } = useUserStore()

const handleCommand = async (command: string) => {
    await logOut(props.profile.userId)
}
</script>
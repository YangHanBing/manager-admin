<template>
  <el-menu
    active-text-color="#409eff"
    background-color="#001529"
    class="el-menu-vertical-demo"
    :default-active="$route.path"
    text-color="#fff"
    unique-opened
    router
  >
    <SideBarMenuItem
      v-for="item in menuList"
      :key="item"
      :menuList="item"
    ></SideBarMenuItem>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterMenuData } from '../../utils/menu'
import SideBarMenuItem from './SideBarMenuItem'
import { filterRouters, generateMenus } from '@/utils/router'
const router = useRouter()
const menuList = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
</script>
<style scoped lang="scss"></style>

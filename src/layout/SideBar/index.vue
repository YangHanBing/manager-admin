<template>
  <div class="">
    <div class="title">
      <img src="@/assets/logo.png" />
      <p class="big">Manager</p>
    </div>
    <SideBarMenu></SideBarMenu>
  </div>
</template>
<script setup>
import SideBarMenu from './SideBarMenu'
</script>

<style scoped lang="scss">
.title {
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    margin: 0 16px;
  }
  .big {
    font-size: 18px;
  }
}
</style>

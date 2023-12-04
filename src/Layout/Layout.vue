<template>
  <div class="layout-wrapper-container bg-app-main-bg" :class="layout_class">

    <div class="sidebar-container">
      <Sidebar></Sidebar>
    </div>
    <div class="smooth-sidebar-btn" @click="control_sidebar()">
      <n-icon>
        <ChevronLeft12Regular></ChevronLeft12Regular>
      </n-icon>
    </div>
    <div class="app-main">
      <div class="app-toolbar flex justify-between items-center">
        <AppBar @sidebar-event="control_sidebar()" @user-bar-event="handleConfig()"></AppBar>
      </div>

      <router-view></router-view>
    </div>
    <div class="sidebar-overall-bg" @click="control_sidebar()">
    </div>
    <AppConfig ref="app_config_ref"></AppConfig>
  </div>
</template>



<script setup>
import {ref, computed} from "vue"
import Sidebar from "@/Layout/Sidebar.vue";
import AppBar from "@/Layout/AppBar.vue";
import AppConfig from "@/Layout/AppConfig.vue";
import {AppsList20Regular, ChevronLeft12Regular} from '@vicons/fluent'

const sidebar_enable = ref(true);
const app_config_ref = ref(null);

const layout_class = computed(() => {
  return {
    sidebar_enable: sidebar_enable.value,
    sidebar_unable: !sidebar_enable.value,
  }
})


const control_sidebar = () => {
  sidebar_enable.value = !sidebar_enable.value;
}

const handleConfig = () => {
  app_config_ref.value.handleActiveBar(true)
}

</script>
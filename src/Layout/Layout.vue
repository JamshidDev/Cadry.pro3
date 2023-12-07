<template>
  <div class="layout-wrapper-container bg-app-main-bg" :class="layout_class">

    <div class="sidebar-container">
      <Sidebar></Sidebar>
    </div>
    <div class="smooth-sidebar-btn mobile-none" @click="control_sidebar()">
      <n-icon>
        <ChevronLeft12Regular></ChevronLeft12Regular>
      </n-icon>
    </div>
    <div class="app-main">
      <div class="app-toolbar flex justify-between items-center">
        <AppBar @sidebar-event="control_sidebar()" @user-bar-event="handleConfig()"></AppBar>
      </div>
      <router-view v-slot="{ Component }">
        <transition name="slide-right" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>


    </div>
    <div class="sidebar-overall-bg" @click="control_sidebar()">
    </div>
    <AppConfig ref="app_config_ref"></AppConfig>
  </div>
</template>



<script setup>
import {ref, computed, onMounted} from "vue"
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
  localStorage.setItem('sidebar_store', JSON.stringify(sidebar_enable.value))
}

const handleConfig = () => {
  app_config_ref.value.handleActiveBar(true)
}

onMounted(()=>{
  sidebar_enable.value = localStorage.getItem('sidebar_store')? JSON.parse(localStorage.getItem('sidebar_store')) : true
})
</script>
<style>

.slide-right-enter-active {
  transition: all 0.2s linear;
}

.slide-right-leave-active {
  transition: all 0.2s linear;
}

.slide-right-enter-from {
  transform: translateX(50px);

  opacity: 0;
}

.slide-right-enter-to {
  transform: translateX(0px);
  opacity: 1;
}

.slide-right-leave-from {
  transform: translateX(0px);
  opacity: 1;
}
.slide-right-leave-to{
  transform: translateX(-50px);
  opacity: 0;
}
</style>
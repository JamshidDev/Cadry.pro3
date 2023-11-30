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
<!--            <div class="sidebar-control-btn" @click="control_sidebar()">-->
<!--              <n-icon>-->
<!--                <AppsList20Regular></AppsList20Regular>-->
<!--              </n-icon>-->
<!--            </div>-->
            <AppBar @sidebar-event="control_sidebar()"></AppBar>
          </div>
    </div>
    <div class="sidebar-overall-bg" @click="control_sidebar()">
    </div>
  </div>
</template>

<script setup >
import {ref, computed} from "vue"
import Sidebar from "@/Layout/Sidebar.vue";
import AppBar from "@/Layout/AppBar.vue";
import { AppsList20Regular, ChevronLeft12Regular } from '@vicons/fluent'

const sidebar_enable = ref(true);

const layout_class = computed(()=>{
  return{
    sidebar_enable:sidebar_enable.value,
    sidebar_unable:!sidebar_enable.value,
  }
})


const control_sidebar =()=>{
  sidebar_enable.value = !sidebar_enable.value;
}

</script>
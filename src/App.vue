

<template>
  <n-notification-provider :placement="placement">
    <router-view></router-view>
    <NotificationService @changePlacement="($event)=> placement =$event" ></NotificationService>
  </n-notification-provider>
</template>

<script setup>
import {ref} from "vue"
const placement = ref('top-right');
import NotificationService from "@/components/NotificationService.vue";
</script>
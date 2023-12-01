<template>
  <div v-for="item in 200" :key="item"
       class="hover-card general-transition user-item flex box-content relative h-[42px] gap-4 primary-border-color border-b-[1px] pb-2 mb-2 border-solid px-[20px] cursor-pointer">
    <div class="user-avatar flex justify-center items-center">
      <img class="w-[40px] h-[40px] rounded-full"
           :src="src"
      >
    </div>
    <span class="w-[14px] h-[14px] absolute z-1 left-[47px] bottom-[10px] text-[16px] primary-text ">
            <n-icon>
            <CheckmarkStarburst16Filled></CheckmarkStarburst16Filled>
          </n-icon>
          </span>
    <div class="user-details flex flex-col relative" style="width: calc(100% - 45px)">
      <h4 class="font-medium text-[14px] mb-0 responsive-text w-[200px] default-text">{{ organization }} </h4>
      <span class="font-normal text-[12px] responsive-text w-[200px] default-text">{{ fullName }}</span>
      <span
          class="w-[50px] responsive-text  rounded-2xl  absolute top-[4px] right-[0px] text-[10px] text-center text-[#65d25b] bg-[#e3f7e2]" v-if="online">
              Online
            </span>
      <span v-else
          class="w-[50px] responsive-text  rounded-2xl  absolute top-[4px] right-[0px] text-[10px] text-center text-[#ff3e4e] bg-[#ffe4e6]">
              Offline
            </span>
      <span
          class="w-[50px] responsive-text rounded-2xl  absolute top-[25px] right-[0px] text-[10px] text-center text-[#1a5cff] bg-[#dde7ff]">
              Admin
            </span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'all'
  },
  fullName: {
    type: String,
    default: null,
  },
  organization: {
    type: String,
    default: null,
  },
  src: {
    type: String,
    default: null,
  },
  online: {
    type: Boolean,
    default: false,
  },
})
import {CheckmarkStarburst16Filled} from "@vicons/fluent";


</script>

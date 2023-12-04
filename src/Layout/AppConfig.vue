<template>
  <div class="app-config-container" :class="[user_bar && 'active-user-bar']">

    <div class="user-chat-bar card-container general-transition pb-[20px] overflow-hidden ">
      <div class="user-bar-header h-[80px] px-[10px] relative">
      </div>
      <div class=" user-bar-body overflow-y-auto overflow-x-hidden primary-scroll card-border pb-[50px]" style="height: calc(100vh - 60px)" >
        <n-tabs type="segment" class="text-[14px] primary-text">
          <n-tab-pane name="Barchasi" tab="Barchasi">
            <userList :online="true" src="https://angular.envytheme.com/tagus/assets/img/user/user12.jpg" fullName="Jahongir Raximov" organization="Toshkent Minqativ temir yo'l uzeli"></userList>
          </n-tab-pane>
          <n-tab-pane name="Online" tab="Online">
            <userList :online="true" src="https://angular.envytheme.com/tagus/assets/img/user/user12.jpg" fullName="Jahongir Raximov" organization="Toshkent Minqativ temir yo'l uzeli"></userList>
          </n-tab-pane>
          <n-tab-pane name="Offline" tab="Offline">
            <userList :online="false" src="https://angular.envytheme.com/tagus/assets/img/user/user12.jpg" fullName="Jahongir Raximov" organization="Toshkent Minqativ temir yo'l uzeli"></userList>
          </n-tab-pane>
        </n-tabs>

      </div>

    </div>
    <div class="flex justify-between gap-4 items-center px-2 theme_controller-btn fixed bottom-[20px] right-[10px] w-[200px] h-[46px] primary-border-color border-[1px] rounded-2xl cursor-pointer">
      <n-switch v-model:value="theme_dark" size="large" @change="change_theme()">
        <template #checked-icon>
          <n-icon class="primary-text"  :component="WeatherMoon20Filled" />
        </template>
        <template   #unchecked-icon>
          <n-icon class="text-warning-color" :component="WeatherSunny16Filled" />
        </template>
      </n-switch>

      <button class="w-[34px] h-[34px] flex justify-center items-center app-btn rounded-full card-container">
        <n-icon class="text-[20px] font-medium ">
          <ContentSettings24Filled></ContentSettings24Filled>
        </n-icon>
      </button>

      <button @click="acrollTop()" class="w-[34px] h-[34px] flex justify-center items-center app-btn card-container rounded-full" >
        <n-icon class="text-[20px] font-medium ">
          <ArrowUpload20Filled></ArrowUpload20Filled>
        </n-icon>
      </button>
    </div>
    <div class="user-chat-bar-overral-bg general-transition" @click.stop="handleActiveBar(false)">

    </div>


  </div>

</template>
<script setup>
import {ref} from "vue";
import userList from "@/components/userList.vue"
import {Mixins} from "@/mixins/Mixins.js"
import {WeatherSunny16Filled, WeatherMoon20Filled, ContentSettings24Filled,ArrowUpload20Filled} from "@vicons/fluent"
import {NIcon} from "naive-ui";

const user_bar = ref(false);
const theme_dark = ref(false)
const handleActiveBar = (value) => {
  user_bar.value = value
}



const change_theme =()=>{
  Mixins.change_theme(theme_dark.value)
}
const acrollTop = ()=>{
  window.scrollTo(0,0)
}

defineExpose({
  handleActiveBar,
})

</script>
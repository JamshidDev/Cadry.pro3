<template>
  <div class="app-config-container   w-[300px] h-[400px] " :class="[user_bar && 'active-user-bar']">

    <div class="user-chat-bar card-container general-transition pb-[20px] overflow-hidden">
      <div class="user-bar-header h-[80px] px-[10px] relative">

      </div>
      <div class="user-bar-body overflow-y-auto pb-[50px]" style="height: calc(100vh - 60px)" >
        <n-tabs type="segment" class="text-[14px] primary-text mx-2">
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
    <div class="user-chat-bar-overral-bg general-transition" @click.stop="handleActiveBar(false)">

    </div>


  </div>

</template>
<script setup>
import {ref} from "vue";
import userList from "@/components/userList.vue"

const user_bar = ref(false)
const handleActiveBar = (value) => {
  user_bar.value = value
}

defineExpose({
  handleActiveBar,
})

</script>
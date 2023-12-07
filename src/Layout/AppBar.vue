<template>
  <div class="w-full flex justify-between min-h-full xl:px-[20px] px-[10px] relative overflow-hidden">
    <div class="flex items-center">
<!--     <div class="organization-name min-h-full flex flex-col">-->
<!--       <h4 class="text-[16px] pt-[6px] gradient-text-logo">O'zbekiton Temir yo'llari Aksiyadorlik jamiyati</h4>-->
<!--       <h4 class="text-[12px] pt-[2px]">31234234234432</h4>-->
<!--     </div>-->
      <button @click="$emit('sidebarEvent')" class="desktop-none w-[34px] h-[34px] flex justify-center items-center app-btn rounded-full">
        <n-icon class="text-[20px] font-medium ">
          <ChevronRight24Filled></ChevronRight24Filled>
        </n-icon>
      </button>
      <div class=" mobile-none flex items-center gap-[10px] px-[10px]" @click="handleSearch()">
        <n-icon class="text-[20px] font-semibol primary-text">
          <Search28Regular></Search28Regular>
        </n-icon>
        <span class="text-[12px] text-grey-color">Qidiruv (Ctrl + /)</span>
      </div>
    </div>
    <div class="flex gap-4 justify-end min-h-full items-center">

      <button class="mobile-none w-[34px] h-[34px] flex justify-center items-center app-btn rounded-full">
        <n-icon class="text-[20px] font-medium ">
          <Search32Regular></Search32Regular>
        </n-icon>
      </button>
      <button @click="change_Fullscreen()" class="mobile-none w-[34px] h-[34px] flex justify-center items-center app-btn rounded-full">
        <n-icon class="text-[20px] font-medium ">
          <FullScreenMaximize16Regular></FullScreenMaximize16Regular>
        </n-icon>
      </button><button class="mobile-none w-[34px] h-[34px] flex justify-center items-center app-btn rounded-full">
      <n-icon class="text-[20px] font-medium ">
        <CommentNote20Regular></CommentNote20Regular>
      </n-icon>
    </button>
      <button class="w-[34px] h-[34px] flex justify-center items-center app-btn rounded-full" @click="$emit('userBarEvent')">
        <n-icon class="text-[20px] font-medium ">
          <AppsListDetail20Regular></AppsListDetail20Regular>
        </n-icon>
      </button>
      <n-avatar
          round

          class="cursor-pointer primary-border-color"
          size="small"
          src="https://edu.uz/temp/langs/uz.png"
          fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />

      <n-dropdown trigger="click" :options="options" @select="handleSelect">
        <n-badge dot type="info" processing>
          <n-avatar
              round
              size="large"
              src="https://angular.envytheme.com/tagus/assets/img/user/user12.jpg"
              class="cursor-pointer"
              fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </n-badge>

      </n-dropdown>
      <!--    <n-switch v-model:value="active" size="large">-->
      <!--      <template #checked-icon>-->
      <!--        <n-icon :component="WeatherMoon20Regular" />-->
      <!--      </template>-->
      <!--      <template #unchecked-icon>-->
      <!--        <n-icon color="#" :component="WeatherSunny20Filled" />-->
      <!--      </template>-->
      <!--    </n-switch>-->
    </div>

<!--    search bar-->
    <div class="w-full min-h-full card-container transition-app absolute top-0 visible p-2
     z-10 rounded-[30px] flex justify-between items-center cursor-pointer"
         :class="[active_search ? 'left-0 visible opacity-100 rounded-[30px]' : 'left-[100px] invisible opacity-0 rounded-[0px]']">
     <div class="flex items-center">
       <n-icon class="text-[20px] font-semibol primary-text">
         <Search28Regular></Search28Regular>
       </n-icon>
       <input v-model="search_text" ref="search_app_ref" class="card-container default-text min-w-[200px] text-[12px] font-medium  ml-3 min-h-full focus:outline-0" placeholder="Qidiruv (Ctl + /)">
     </div>
      <n-icon class="text-[30px]  top-1/2  right-0 text-green primary-text" @click.stop="active_search=false">
        <ArrowSyncDismiss24Regular></ArrowSyncDismiss24Regular>
      </n-icon>
    </div>
  </div>
</template>

<script setup>
import {h, defineComponent, ref,} from "vue";
import {NIcon} from "naive-ui";
import {
  Settings28Regular,
  SignOut20Regular,
  PersonEdit20Regular,
  Chat16Regular,
  FullScreenMaximize16Regular,
  CommentNote20Regular,
  AppsListDetail20Regular,
  Search32Regular,
  Search28Regular,
  ArrowSyncDismiss24Regular,
  ChevronRight24Filled,
} from "@vicons/fluent";
import {Mixins} from "@/mixins/Mixins.js"
const emits = defineEmits(["sidebarEvent", 'userBarEvent'])

const active = ref(true);
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};

const change_Fullscreen =()=>{
  Mixins.fullScreen('document_body')
};
const active_search = ref(false)
const search_text = ref(null)
const search_app_ref = ref(null)


const options = [{
  label: 'Xabarlar',
  key: 'message',
  icon: renderIcon(Chat16Regular)
},
  {
    label: 'Profile',
    key: 'profile',
    icon: renderIcon(PersonEdit20Regular)
  },
  {
    label: 'Sozlamalar',
    key: 'editProfile',
    icon: renderIcon(Settings28Regular)
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: renderIcon(SignOut20Regular)
  }
]
const handleSelect = (event) => {
  console.log(event)
}

const handleSearch = (event) => {
  active_search.value=true;
  setTimeout(()=>{
    search_app_ref.value.focus();
  },500)


}

</script>
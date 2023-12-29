<template>
  <div class="w-full flex flex-col">
    <template v-for="menu in menu_items" :key="menu">
      <template v-if="!menu.sub_menu">
        <div class="border primary-border-color p-2 border-dashed">
          <div class="border primary-border-color flex justify-between p-1">
                <span class="text-[12px] flex gap-2">
                    <span>{{menu.order}}</span>
                    <span>{{menu.name}}({{menu.id}})</span>
                   <n-icon size="20" :component="fluentIcon.menu[menu.icon].name"/>
                </span>
            <n-icon size="20" class="text-danger-color cursor-pointer" @click="emits('deleteEvent', menu.id)">
              <Delete28Regular></Delete28Regular>
            </n-icon>
          </div>
          <div v-for="sub_menu in menu.sub_menus" :key="sub_menu" class="flex">
            <div class="w-1/5"></div>
            <div class="w-4/5 p-1 border primary-border-color p-1 my-1 flex flex-col">
              <div class="flex justify-between mb-2">
                  <span class="text-[12px] flex gap-2">
                    <span> {{sub_menu.order}}</span>
                    <span> {{sub_menu.name}}({{sub_menu.id}})</span>
                    <span> {{sub_menu.front_route}}</span>
                    <span> {{sub_menu.route}}</span>
                    <span> {{sub_menu.prefix}}</span>
                    <n-icon size="20" :component="fluentIcon.menu[sub_menu.icon].name"/>
                </span>
                <n-icon size="20" class="text-danger-color cursor-pointer" @click="emits('deleteEvent', sub_menu.id)">
                  <Delete28Regular></Delete28Regular>
                </n-icon>
              </div>
              <div class="grid grid-cols-2 text-[10px] border-t-[1px] primary-border-color border-dashed">
                <template v-if="sub_menu.permissions.length">
                  <span class="text-info-color text-center" v-for="permission in sub_menu.permissions" :key="permission">{{ permission }}</span>
                </template>
                <span v-else class="text-[10px] text-center text-danger-color col-start-1 col-end-3">no permissons</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="w-full p-1 border primary-border-color p-1 my-1 flex flex-col shadow">
          <div class="flex justify-between mb-2">
                  <span class="text-[12px] flex gap-2">
                    <span> {{menu.order}}</span>
                    <span> {{menu.name}}({{menu.id}})</span>
                    <span> {{menu.front_route}}</span>
                    <span> {{menu.route}}</span>
                    <span> {{menu.prefix}}</span>
                    <n-icon size="20" :component="fluentIcon.menu[menu.icon].name"/>
                </span>
            <n-icon size="20" class="text-danger-color cursor-pointer" @click="emits('deleteEvent', menu.id)">
              <Delete28Regular></Delete28Regular>
            </n-icon>
          </div>
          <div class="grid grid-cols-2 text-[10px] border-t-[1px] primary-border-color border-dashed">
            <template v-if="menu?.permissions?.length">
              <span class="text-info-color text-center" v-for="permission in menu.permissions" :key="permission">{{ permission }}</span>
            </template>
            <span v-else class="text-[10px] text-center text-danger-color col-start-1 col-end-3">no permissons</span>
          </div>
        </div>
      </template>

    </template>
  </div>
</template>
<script setup>
import {Delete28Regular} from "@vicons/fluent"
import {fluentIcon} from "@/mixins/iconsList.js"
const props = defineProps({
  menu_items: {
    type: Array,
    default: [],
  }
})

const emits = defineEmits(["deleteEvent"])
</script>

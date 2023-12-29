<template>
  <div class="sidebar-box">
    <div class="header-sidebar mb-2">
      <div class="logo-container">
          <div class="logo-picture">
            <img class="drop-shadow-2xl" src="@/assets/pictures/logos/logo.png" alt="">
          </div>
        <div class="user-details">
          <div class="user-name responsive-text">
            <n-icon class="primary-text mt-[2px]" size="14" >
            <CheckmarkStarburst16Regular></CheckmarkStarburst16Regular>
          </n-icon>
            Jamshid Raximov</div>
          <div class="user-role">

            Super Admin</div>
        </div>
      </div>
    </div>
    <div class="body-sidebar">
      <template v-for="item in sidebar_menu_list">
        <div v-if="!item.sub_menu" class="multiple-item">
          <div class="item-header" @click="select_panel(item.id)" :class="panel_index===item.id && 'open-items'">
            <div class="header-icon">
              <n-icon :component="fluentIcon.menu[item.icon].name"/>
            </div>
            <div class="header-title">
              {{ item.name }}
            </div>
            <div class="header-arrow-icon">
              <n-icon>
                <ChevronDown20Filled></ChevronDown20Filled>
              </n-icon>
            </div>
          </div>
          <div class="item-body"  :style="`height:${panel_index==item.id? item.sub_menus.length*42 : 0}px`">
            <div class="sub-item" v-for="sub_item in item.sub_menus" @click="select_sub_item(sub_item.front_route, sub_item.front_route)"
                 :class="[sub_item.front_route === sidebar_index && 'sub-active-item']">
              <div class="sub-item-icon">
                <n-icon :component="fluentIcon.menu[sub_item.icon].name"/>
              </div>
              <div class="sub-item-title">
                {{ sub_item.name }}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="single-item" @click="select_single_item(item.front_route)"
             :class="[item.front_route == sidebar_index && 'active-item']">
          <div class="item-icon">
            <n-icon :component="fluentIcon.menu[item.icon].name"/>
          </div>
          <div class="item-title">
            {{ item.name }}
          </div>
          <div class="item-tooltip">
            {{ item.name }}
          </div>
        </div>
      </template>
    </div>
    <div class="footer-sidebar">

    </div>
  </div>
</template>

<script setup>
import {fluentIcon} from "@/mixins/iconsList.js"
import {ref, onMounted} from "vue";
import {CheckmarkStarburst16Regular, ChevronDown20Filled} from '@vicons/fluent'
const sidebar_index = ref(null);
const panel_index = ref(null);
const icons_lib = ref(null)
// const sidebar_menu_list = [
//   {
//     index: '1',
//     title: "Global Ma'lumotlar",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//     items: [
//       {
//         index: '1-1',
//         title: "Raqamli Dashboard",
//         icon: 'pi pi-plus',
//         to: 'template-page',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '1-2',
//         title: "Grafik Dashboard",
//         icon: 'pi pi-plus',
//         to: 'graphic-dashboard',
//         visible: true,
//         is_New: false,
//       },
//     ]
//   },
//   {
//     index: '2',
//     title: "Kadr vazifalari",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//     items: [
//       {
//         index: '2-1',
//         title: "Xodimlar ro'yhati",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-2',
//         title: "Ta'tildagi xodimlar",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-3',
//         title: "Tibbiy ko'rik",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       }
//       ,{
//         index: '2-4',
//         title: "Jazolangan xodimlar",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-5',
//         title: "Mukofatlangan xodimlar",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-6',
//         title: "Shtat jadvali",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-7',
//         title: "Tabel jadvali",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-8',
//         title: "Turniket ma'lumotlari",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-9',
//         title: "Bo'limlar",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-10',
//         title: "Attestatsiya",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-11',
//         title: "Arxivdan chiqarish",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '2-12',
//         title: "Arxivdagi xodimlar",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       }, {
//         index: '2-12',
//         title: "Malaka oshirish",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//     ]
//   },
//   {
//     index: '3',
//     title: "Single Item 3",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//   }, {
//     index: '4',
//     title: "Single Item 4",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//   },
//   {
//     index: '5',
//     title: "Admin Panel",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//     items: [
//       {
//         index: '5-1',
//         title: "Davlatlar",
//         icon: 'pi pi-plus',
//         to: 'admin-country',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-2',
//         title: "Viloyatlar",
//         icon: 'pi pi-plus',
//         to: 'admin-region',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-3',
//         title: "Tumanlar",
//         icon: 'pi pi-plus',
//         to: 'admin-district',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-4',
//         title: "Tillar",
//         icon: 'pi pi-plus',
//         to: 'admin-language',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-5',
//         title: "Yaqin qarindoshlar",
//         icon: 'pi pi-plus',
//         to: 'admin-relative',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-6',
//         title: "Millatlar",
//         icon: 'pi pi-plus',
//         to: 'admin-nationality',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-7',
//         title: "Partiyalar",
//         icon: 'pi pi-plus',
//         to: 'admin-party',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-8',
//         title: "Akademik darajalar",
//         icon: 'pi pi-plus',
//         to: 'admin-academic-degree',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-9',
//         title: "Akademik unvonlar",
//         icon: 'pi pi-plus',
//         to: 'admin-academic-title',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-10',
//         title: "Menu",
//         icon: 'pi pi-plus',
//         to: 'admin-menu',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '5-11',
//         title: "Rollar",
//         icon: 'pi pi-plus',
//         to: 'user-menu-role',
//         visible: true,
//         is_New: false,
//       },
//     ]
//   },
//   {
//     index: '6',
//     title: "Single Item 6",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//   },
//   {
//     index: '7',
//     title: "Single Item 6",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//   },
//   {
//     index: '8',
//     title: "Multiple Item 2",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//     items: [
//       {
//         index: '8-1',
//         title: "Sub Item 1",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '8-2',
//         title: "Sub Item 2",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '8-3',
//         title: "Sub Item 3",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '8-4',
//         title: "Sub Item 4",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       }, {
//         index: '8-5',
//         title: "Sub Item 5",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '8-6',
//         title: "Sub Item 5",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//       {
//         index: '8-7',
//         title: "Sub Item 5",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },{
//         index: '8-8',
//         title: "Sub Item 5",
//         icon: 'pi pi-plus',
//         to: 'admin-path',
//         visible: true,
//         is_New: false,
//       },
//
//
//     ]
//   },
//   {
//     index: '9',
//     title: "Single Item 6",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//   },
//   {
//     index: '10',
//     title: "Single Item 6",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//   },
//   {
//     index: '11',
//     title: "Single Item 6",
//     icon: 'pi pi-plus',
//     to: 'admin-path',
//     visible: true,
//     is_New: false,
//   }
// ]

const sidebar_menu_list = ref([])
const select_single_item = (index) => {
  sidebar_index.value = index;
  panel_index.value = null;
  save_local(index)
  localStorage.setItem('store_id','00')
  $Router.push({name:index})
}


const select_panel = (index) => {
  panel_index.value = panel_index.value == index ? null : index;
  localStorage.setItem('store_id',index)
}
const select_sub_item = (index, route_name) => {
  $Router.push({name:route_name})
  sidebar_index.value = index;
  save_local(index)
}

const save_local = (index) =>{
  localStorage.setItem('store_route',index)
}

onMounted(()=>{

  const menu_list = JSON.parse(localStorage.getItem('menu_list_store')) || [];
  let local_index = localStorage.getItem("store_route") || null;
  let panel_store = localStorage.getItem("store_id") || null;
  if(local_index){
    sidebar_index.value =local_index;
    panel_index.value = panel_store;
  }
  sidebar_menu_list.value = menu_list;
  if(menu_list?.length===0){
    $Router.push({name:'login'})
  }


})

</script>
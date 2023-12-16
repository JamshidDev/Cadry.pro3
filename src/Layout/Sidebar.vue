<template>
  <div class="sidebar-box">
    <div class="header-sidebar px-4 mb-2">
      <div class="logo-box primary-border-color border-[1px] p-2 flex justify-center bg-[#ffffff0d]" style="border-radius: 6px">
        <img class="w-[100px]" src="https://wpriverthemes.com/HTML/synck/assets/imgs/logo-white.svg" alt="">

      </div>
    </div>
    <div class="body-sidebar">
      <template v-for="item in sidebar_menu_list">

        <div v-if="item.items" class="multiple-item">
          <div class="item-header" @click="select_panel(item.index)" :class="panel_index===item.index && 'open-items'">
            <div class="header-icon">
              <n-icon>
                <ChartPerson24Regular></ChartPerson24Regular>
              </n-icon>
            </div>
            <div class="header-title">
              {{ item.title }}
            </div>
            <div class="header-arrow-icon">
              <n-icon>
                <ChevronDown20Filled></ChevronDown20Filled>
              </n-icon>
            </div>
          </div>
          <div class="item-body"  :style="`height:${panel_index===item.index? item.items.length*42 : 0}px`">
            <div class="sub-item" v-for="sub_item in item.items" @click="select_sub_item(sub_item.index, sub_item.to)"
                 :class="[sub_item.index === sidebar_index && 'sub-active-item']">
              <div class="sub-item-icon">
                <n-icon>
                  <ChartPerson24Regular></ChartPerson24Regular>
                </n-icon>
              </div>
              <div class="sub-item-title">
                {{ sub_item.title }}
              </div>
            </div>
          </div>
        </div>


        <div v-else class="single-item" @click="select_single_item(item.index)"
             :class="[item.index === sidebar_index && 'active-item']">
          <div class="item-icon">
            <n-icon>
              <ChartPerson24Regular></ChartPerson24Regular>
            </n-icon>
          </div>
          <div class="item-title">
            {{ item.title }}
          </div>
          <div class="item-tooltip">
            {{ item.title }}
          </div>
        </div>

      </template>
      <!--      <template v-for="item in 5" :key="item">-->
      <!--        <div class="single-item">-->
      <!--          <div class="item-icon">-->
      <!--            <n-icon>-->
      <!--              <ChartPerson24Regular></ChartPerson24Regular>-->
      <!--            </n-icon>-->
      <!--          </div>-->
      <!--          <div class="item-title">-->
      <!--            Multiple icon-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </template>-->

      <!--      <template v-for="item in 4" :key="item">-->
      <!--        <div class="multiple-item">-->
      <!--          <div class="item-header">-->
      <!--            <div class="header-icon">-->
      <!--              <n-icon>-->
      <!--                <ChartPerson24Regular></ChartPerson24Regular>-->
      <!--              </n-icon>-->
      <!--            </div>-->
      <!--            <div class="header-title">-->
      <!--              Multiple icon-->
      <!--            </div>-->
      <!--            <div class="header-arrow-icon">-->
      <!--              <n-icon>-->
      <!--                <ChevronDown20Filled></ChevronDown20Filled>-->
      <!--              </n-icon>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--          <div class="item-body ">-->
      <!--                     <div class="sub-item">-->
      <!--                       <div class="sub-item-icon">-->
      <!--                         <n-icon>-->
      <!--                           <ChartPerson24Regular></ChartPerson24Regular>-->
      <!--                         </n-icon>-->
      <!--                       </div>-->
      <!--                       <div class="sub-item-title">-->
      <!--                         Sub menu-->
      <!--                       </div>-->
      <!--                     </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </template>-->

    </div>
    <div class="footer-sidebar">

    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {ChartPerson24Regular, WindowNew20Regular, ChevronDown20Filled} from '@vicons/fluent'

const sidebar_index = ref(null);
const panel_index = ref(null);
const sidebar_menu_list = [
  {
    index: '1',
    title: "Global Ma'lumotlar",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
    items: [
      {
        index: '1-1',
        title: "Raqamli Dashboard",
        icon: 'pi pi-plus',
        to: 'template-page',
        visible: true,
        is_New: false,
      },
      {
        index: '1-2',
        title: "Grafik Dashboard",
        icon: 'pi pi-plus',
        to: 'graphic-dashboard',
        visible: true,
        is_New: false,
      },
    ]
  },
  {
    index: '2',
    title: "Kadr vazifalari",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
    items: [
      {
        index: '2-1',
        title: "Xodimlar ro'yhati",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-2',
        title: "Ta'tildagi xodimlar",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-3',
        title: "Tibbiy ko'rik",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      }
      ,{
        index: '2-4',
        title: "Jazolangan xodimlar",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-5',
        title: "Mukofatlangan xodimlar",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-6',
        title: "Shtat jadvali",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-7',
        title: "Tabel jadvali",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-8',
        title: "Turniket ma'lumotlari",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-9',
        title: "Bo'limlar",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-10',
        title: "Attestatsiya",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-11',
        title: "Arxivdan chiqarish",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '2-12',
        title: "Arxivdagi xodimlar",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      }, {
        index: '2-12',
        title: "Malaka oshirish",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },







    ]
  },
  {
    index: '3',
    title: "Single Item 3",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  }, {
    index: '4',
    title: "Single Item 4",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '5',
    title: "Multiple Item 2",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
    items: [
      {
        index: '5-1',
        title: "Sub Item 1",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '5-2',
        title: "Sub Item 2",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '5-3',
        title: "Sub Item 3",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '5-4',
        title: "Sub Item 3",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      }, {
        index: '5-5',
        title: "Sub Item 3",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },

    ]
  },
  {
    index: '6',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '7',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '8',
    title: "Multiple Item 2",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
    items: [
      {
        index: '8-1',
        title: "Sub Item 1",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '8-2',
        title: "Sub Item 2",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '8-3',
        title: "Sub Item 3",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '8-4',
        title: "Sub Item 4",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      }, {
        index: '8-5',
        title: "Sub Item 5",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '8-6',
        title: "Sub Item 5",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },
      {
        index: '8-7',
        title: "Sub Item 5",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },{
        index: '8-8',
        title: "Sub Item 5",
        icon: 'pi pi-plus',
        to: 'admin-path',
        visible: true,
        is_New: false,
      },


    ]
  },
  {
    index: '9',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '10',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '11',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },{
    index: '12',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '13',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '14',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '15',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '16',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '17',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  }, {
    index: '18',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '19',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '20',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  }, {
    index: '21',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },
  {
    index: '22',
    title: "Single Item 6",
    icon: 'pi pi-plus',
    to: 'admin-path',
    visible: true,
    is_New: false,
  },



]

const select_single_item = (index) => {
  sidebar_index.value = index;
  panel_index.value = null;
  save_local(index)
}

const select_panel = (index) => {
  panel_index.value = panel_index.value === index ? null : index;
}
const select_sub_item = (index, route_name) => {
  $Router.push({name:route_name})
  sidebar_index.value = index;
  save_local(index)
}

const save_local = (index) =>{
  localStorage.setItem('local_index',index)
}

onMounted(()=>{
  let local_index = localStorage.getItem("local_index") || null;
  if(local_index){
    sidebar_index.value =local_index;
    let list = local_index.slice('-');
    if(list.length>2){
      panel_index.value = list[0];
    }
  }

})

</script>
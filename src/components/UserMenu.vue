

<template>
  <n-modal v-model:show="modal">
    <n-card
        style="width:90vw; position: fixed; top: 50px; left:50%; transform: translateX(-50%) "
        title="Menyularni sozlash oynasi"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <n-spin :show="loading" >
        <div class="grid w-full grid-cols-2 gap-6">
          <div>
            <n-scrollbar  style="max-height:60vh" class="p-2">
              <MenuEskiz :menu_items="menu_list" @delete-event="deleteMenu($event)" ></MenuEskiz>
            </n-scrollbar>

          </div>
          <div>
            <div class="flex flex-col">
              <n-form :model="item_details" class="border primary-border-color px-6 pt-4 shadow rounded">
                <n-form-item label="Menyu turini tanlang">
                  <n-switch :rail-style="railStyle" v-model:value="item_details.sub_menu">
                    <template #checked>
                      Oddiy menyu
                    </template>
                    <template #unchecked>
                      Murakkab menyu
                    </template>
                  </n-switch>
                </n-form-item>
                <n-form-item label="Nomi" v-show="!item_details.sub_menu">
                  <n-input  v-model:value="item_details.name" type="text" placeholder="Kiriting"/>
                </n-form-item>

                <n-form-item label="Menular" v-show="item_details.sub_menu">
                  <n-select

                      v-model:value="item_details.menu_id"
                      filterable
                      placeholder="Tanlang"
                      :options="all_meu_list"
                      label-field="name"
                      value-field="id"
                  />
                </n-form-item>
                <n-form-item label="Parent Id" v-show="item_details.sub_menu" >
                  <n-input  v-model:value="item_details.parent_id" type="number" placeholder="Kiriting"/>
                </n-form-item><n-form-item label="Tartib raqam">
                <n-input v-model:value="item_details.order" type="number" placeholder="Kiriting"/>
              </n-form-item>
                <n-form-item label="Menu icon">
                  <n-scrollbar style="max-height: 300px" class="border primary-border-color p-2">
                    <div class="grid grid-cols-10 gap-2">
                      <div @click="selectedIcon(icon.key)" :class="icon.key == item_details.icon && 'bg-green text-[#ffffff]'"  class="shadow border primary-border-color cursor-pointer rounded flex justify-center items-center p-2" v-for="icon in fluentIcon.menu">
                        <n-icon size="26" :component="icon.name"  />
                      </div>
                    </div>
                  </n-scrollbar>
                </n-form-item>


              </n-form>
            </div>
          </div>
        </div>
      </n-spin>

      <template #footer>
       <div class="grid grid-rows-2 w-full">
         <div class="w-full grid grid-cols-2 gap-2">
           <n-button @click="modal=false" type="error">
             Yopish
           </n-button>
           <n-button @click="saveHandler"  type="info">Saqlash</n-button>
         </div>
       </div>
      </template>
    </n-card>
  </n-modal>
</template>
<script setup>
import { ref, watch} from "vue"
import {fluentIcon} from "@/mixins/iconsList.js"
import MenuEskiz from "@/components/MenuEskiz.vue";
const modal = ref(false);
const loading = ref(false);
const menu_list = ref([]);
const all_meu_list = ref([])
const item_details = ref({
  role_id:null,
  menu_id:null,
  parent_id:0,
  order:null,
  sub_menu:false,
  name:null,
  icon:null,
})

const selected_role_id = ref(null)
const get_list = (id)=>{
  item_details.value.role_id = id;
  selected_role_id.value=id
  loading.value = true;
  modal.value = true;
  $ApiService.roleMenus.role_menu_index({role_id:id}).then((res)=>{
    menu_list.value = res.data.role_menus;
    all_meu_list.value = res.data.menus
  }).finally(()=>{
    loading.value = false;
  })

}

const retry_list = ()=>{
  loading.value = true;
  $ApiService.roleMenus.role_menu_index({role_id:selected_role_id.value}).then((res)=>{
    menu_list.value = res.data.role_menus;
    all_meu_list.value = res.data.menus
  }).finally(()=>{
    loading.value = false;
  })
}
const saveHandler = ()=>{
  loading.value = true;
  $ApiService.roleMenus.role_menu_store_update({data:item_details.value}).then((res)=>{
    retry_list()
    console.log(selected_role_id.value)
  })
}

const selectedIcon =(event) =>{
  item_details.value.icon = event
}
const deleteMenu = (id) =>{
  loading.value = true;
  $ApiService.roleMenus.role_menu_delete({menu_id:id}).then((res)=>{
    retry_list()
  })
}

watch(()=> item_details.value.sub_menu, (val)=>{
  if(val === false){
    item_details.value.parent_id =0
  }
})
const  railStyle=({
  focused,
  checked
}) => {
  const style = {};
  if (checked) {
    style.background = "#159bcc";
    if (focused) {
      style.boxShadow = "0 0 0 2px #d0305040";
    }
  } else {
    style.background = "#0e9414";
    if (focused) {
      style.boxShadow = "0 0 0 2px #2080f040";
    }
  }
  return style;
}

defineExpose({
  get_list
})



</script>

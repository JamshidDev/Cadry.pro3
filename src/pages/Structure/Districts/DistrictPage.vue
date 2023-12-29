<template>
  <div class="page-box  xl:px-5 lg:px-5 px-3 pt-4 pb-20">
    <div class=" w-full " style="border-radius: 12px">
      <div class="grid grid-cols-1">
        <div class="xl:flex xl:justify-between lg:flex lg:justify-between grid grid-cols-1 gap-4 mb-6 mt-4">
          <div class="xl:w-[200px] lg:w-[200px]">
            <n-input placeholder="Qidiruv" v-model:value="params.search" @keyup.enter="enter_search">
              <template #prefix>
                <n-icon :component="Search12Regular"/>
              </template>
            </n-input>
          </div>
          <n-button @click="add_item()"  type="primary">
            <template #icon>
              <n-icon>
                <AddCircle32Regular/>
              </n-icon>
            </template>
            Qo'shish
          </n-button>
        </div>
        <n-spin :show="loading" style="min-height: 200px">
          <div class="w-full overflow-x-auto" v-if="table_list.length>0">
            <n-table :bordered="false" :single-line="false" size="small" striped>
              <thead>
              <tr>
                <th class="text-dark-color" style="min-width: 40px; width:40px">No</th>
                <th class="text-dark-color" style="min-width: 120px; width:300px">Nomi</th>
                <th class="text-dark-color" style="min-width: 120px;">Viloyat nomi</th>
                <th class="text-dark-color" style="min-width: 60px; width:80px">Qisqa kodi</th>
                <th class="text-dark-color" style="min-width: 120px; width:300px">Davlat nomi</th>
                <th class="text-dark-color" style="min-width: 60px; width:80px">Qisqa kodi</th>

                <th class="text-dark-color" style="min-width: 60px; width: 60px">Amallar</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in table_list" :key="item.id">
                <td>
                  <span class="flex justify-center items-center" style="font-size: 12px"> {{(params.page - 1)*params.per_page + index+1}}</span>
                </td>
                <td>
                  <span class="text-dark-color">
                    {{ item.name }}
                  </span>
                </td>
                <td>
                <span class="text-dark-color">
                    {{ item.region?.name }}
                  </span>
                </td>
                <td>
                  <span class="text-dark-color w-full flex justify-center">

                    <n-tag type="info" size="small" :bordered="false" class="text-sm">
                        {{ item.region?.short_code }}
                    </n-tag>
                  </span>
                </td>
                <td>
                  <span class="text-dark-color">
                    {{ item.region?.country?.name }}
                  </span>
              </td>
                <td>
                  <span  class="text-dark-color w-full flex justify-center">
                    <n-tag type="success" size="small" :bordered="false" class="text-sm">
                       {{ item.region?.country?.short_code }}
                    </n-tag>
                  </span>

                </td>

                <td>
                  <span class="flex justify-center items-center">
                    <action-button :options="options" :action_data="item"
                                   @action-event="actionHandler($event)"></action-button>
                  </span>
                </td>
              </tr>
              </tbody>
            </n-table>
            <div class="flex gap-2 items-center">
              <Table-Pagination :page="params.page" :per_page="params.per_page" :total="total_item"
                                @change-page="change_pagination($event)"></Table-Pagination>
            </div>
          </div>
        </n-spin>
        <n-drawer v-model:show="dialog" :width="400">
          <n-drawer-content>
            <template #header>
              <span class="primary-text"> {{
                  dialog_type ? "Yangi tuman qo'shish" : "Ma'lumotlarni tahrirlash"
                }}</span>
            </template>
            <n-spin :show="drawer_loading" >
              <n-form ref="formRef" :model="item_details" :rules="rules">
                <n-form-item label="Viloyat nomi" path="country_id">
                  <n-select
                      v-model:value="item_details.region_id"
                      filterable
                      placeholder="Tanlang"
                      :options="region_list"
                      label-field="name"
                      value-field="id"
                  />
                </n-form-item>
                <n-form-item label="Tuman nomi" path="name">
                  <n-input v-model:value="item_details.name" type="text" placeholder="Kiriting"/>
                </n-form-item>
              </n-form>
            </n-spin>

            <template #footer>
              <div class="w-full grid grid-cols-2 gap-2">
                <n-button @click="dialog=false" type="error">
                  Yopish
                </n-button>
                <n-button @click="addAndEdit()" type="info">Saqlash</n-button>
              </div>
            </template>
          </n-drawer-content>
        </n-drawer>
      </div>
    </div>
  </div>

</template>
<script setup>
import ActionButton from "@/components/ActionButton.vue";
import {ref} from "vue"
import {
  Search12Regular,
  AddCircle32Regular, Edit20Regular, Delete20Regular,
} from "@vicons/fluent";
import {h, onMounted} from "vue";
import {NIcon} from "naive-ui";

const loading = ref(false);
const table_list = ref([]);
const total_item = ref(0);
const dialog = ref(false);
const dialog_type = ref(true);
const drawer_loading = ref(false);

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
const options = [
  {
    label: "Tahrirlash",
    key: 'edit_key',
    icon: renderIcon(Edit20Regular)
  },
  {
    label: "O'chirish",
    key: 'delete_key',
    icon: renderIcon(Delete20Regular)
  },
];
const params = ref({
  page: 1,
  per_page: 10,
  search: null,
});
const region_list = ref([]);
const item_details = ref({
  region_id: null,
  name: null,
});
const selected_item_id = ref(null);

const actionHandler = (event) => {
  if(event.event === 'edit_key'){
    edit_item(event.data)
  }else if(event.event === 'delete_key'){
    delete_item(event)
  }
}

const get_tableList = () => {
  loading.value = true;
  let param = params.value
  $ApiService.district.district_index(param).then((res) => {
    total_item.value = res.data.cities.total;
    table_list.value = res.data.cities.data;
  }).finally(() => {
    loading.value = false;
  })
}

const get_regions = () => {
  if (region_list.value.length == 0) {
    drawer_loading.value = true;
    $ApiService.district.district_create().then((res) => {
      region_list.value = res.data.regions;
    }).finally(() => {
      drawer_loading.value = false;
    })
  }
}
const add_item = () => {
  dialog_type.value = true;
  dialog.value = true;
  reset_items()
  get_regions()
}
const edit_item = (item) => {
  dialog_type.value = false
  dialog.value = true;
  drawer_loading.value = true;
  selected_item_id.value = item.id;
  $ApiService.district.district_edit({district_id:item.id}).then((res)=>{
    region_list.value = res.data.regions;
    item_details.value.region_id = res.data.city.region.id;
    item_details.value.name = res.data.city.name;
  }).finally(()=>{
    drawer_loading.value = false;
  })

}
const addAndEdit = () => {
  formRef.value.validate((error)=>{
    item_details.value.short_code='UZ'
    if(!error && dialog_type.value){
      $ApiService.district.district_store({data:item_details.value}).then((res)=>{
        dialog.value = false;
        get_tableList()
      })
    }else if(!error && !dialog_type.value){
      $ApiService.district.district_update({data:item_details.value, district_id:selected_item_id.value}).then((res)=>{
        dialog.value = false;
        get_tableList()
      })
    }
  })

}
const delete_item = (event)=>{
  $ApiService.district.district_delete({district_id:event.data.id}).then((res)=>{
    let index_alert = total_item.value - 1 === params.value.per_page * (params.value.page - 1);
    if(index_alert && (total_item.value != 1)){
      params.value.page = params.value.page - 1;
    }
    get_tableList()
  })
}
const change_pagination = (event) => {
  params.value.page = event.page;
  params.value.per_page = event.per_page;
  get_tableList()
}
const reset_items = ()=>{
  for(const item of  Object.entries(item_details.value) ){
    item_details.value[item[0]] = null;
  }
}
const formRef = ref(null)
const rules = {
  region_id:{
    type:'number',
    required: true,
    message: "Maydon to'ldirilishi shart!",
    trigger: ["change", "blur"]
  },
  name: [
    {
      required: true,
      message: "Maydon to'ldirilishi shart!",
      trigger: ["input", "blur"]
    }
  ],
}
const enter_search = () => {
  params.value.page = 1;
  get_tableList()
}


onMounted(() => {
  get_tableList();
})


</script>
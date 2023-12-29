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
          <n-button @click="add_item()" type="primary">
            <template #icon>
              <n-icon>
                <AddCircle32Regular/>
              </n-icon>
            </template>
            Qo'shish
          </n-button>
        </div>
        <n-spin :show="loading" style="min-height: 200px">
          <div class="w-full overflow-x-auto" v-if="table_list.length>0 && !loading">
            <n-table :bordered="false" :single-line="false" size="small" striped>
              <thead>
              <tr>
                <th class="text-dark-color" style="min-width: 40px; width:40px">No</th>
                <th class="text-dark-color" style="min-width: 120px;">Nomi</th>
                <th class="text-dark-color" style="min-width: 120px; width: 200px">Menyular soni</th>
                <th class="text-dark-color" style="min-width: 120px; width: 200px">Ruhsatlar miqdori</th>

                <th class="text-dark-color" style="min-width: 60px; width: 60px">Amallar</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in table_list" :key="item.id">
                <td>
                  <span class="flex justify-center items-center"
                        style="font-size: 12px"> {{ (params.page - 1) * params.per_page + index + 1 }}</span>
                </td>
                <td>
                  <span class="text-dark-color">
                    {{ item.name }}
                  </span>
                </td>
                <td>
                  <span class="flex justify-center ">
                    <n-tag type="success" round class="cursor-pointer" @click="edit_menu_handler(item.id)" size="small">
                   {{ item.menus }} ta
                      <template #icon>
                     <n-icon :component="EditSettings24Regular"/>
                     </template>
                </n-tag>
                  </span>
                </td>
                <td>
                  <span class="flex justify-center ">

                    <n-tag type="info" size="small" round>
                   {{ item.permissions }} ta
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
            <div class="flex items-center">
              <Table-Pagination :page="params.page" :per_page="params.per_page" :total="total_item"
                                @change-page="change_pagination($event)"></Table-Pagination>
            </div>
          </div>
          <div v-else-if="table_list.length===0 && !loading">
            <no-data-picture></no-data-picture>
          </div>
        </n-spin>
        <n-drawer v-model:show="dialog" :width="600">
          <n-drawer-content>
            <template #header>
              <span class="primary-text"> {{
                  dialog_type ? "Yangi viloyat qo'shish" : "Ma'lumotlarni tahrirlash"
                }}</span>
            </template>
            <n-spin :show="drawer_loading">
              <n-form ref="formRef" :model="item_details" :rules="rules">
                <n-form-item label="Rol nomi" path="name">
                  <n-input v-model:value="item_details.name" type="text" placeholder="Kiriting"/>
                </n-form-item>
                <n-form-item label="Ruhsatlar" path="permissions">
                  <n-checkbox-group class="w-full" v-model:value="item_details.permissions">
                    <div class="grid grid-cols-2 gap-2">
                      <template v-for="item in permission_list" :key="item">
                        <n-checkbox class="text-sm" :value="item.name" :label="item.name"/>
                      </template>

                    </div>
                  </n-checkbox-group>
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
        <UserMenu ref="user_menu_ref"></UserMenu>
<!--        <div class="enakt-card">-->
<!--              <span class="status-text">Status text</span>-->
<!--          <div class="text-box">-->
<!--            <span>Mahsulot narxi :</span>-->
<!--            <span> 09 : 00</span>-->
<!--          </div>-->
<!--          <div class="text-box">-->
<!--            <span>Mahsulot narxi :</span>-->
<!--            <span> 09 : 00</span>-->
<!--          </div><div class="text-box">-->
<!--          <span>Mahsulot narxi :</span>-->
<!--          <span> 09 : 00</span>-->
<!--        </div>-->
<!--          <div class="person_fullname">-->
<!--            Raximov Jamshid Shuxrat o'g'li-->
<!--          </div>-->
<!--          <div class="person_fullname">-->
<!--            Raximov Jamshid Shuxrat o'g'li-->
<!--          </div>-->

<!--          <div class="card-footer">-->
<!--            <div class="card_number">No: 1212312312 </div>-->
<!--            <div class="text-box">-->
<!--              <span>Mahsulot narxi :</span>-->
<!--              <span> 09 : 00</span>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
      </div>
    </div>
  </div>

</template>
<script setup>
import ActionButton from "@/components/ActionButton.vue";
import UserMenu from "@/components/UserMenu.vue";
import {ref} from "vue"
import {
  Search12Regular,
  AddCircle32Regular, Edit20Regular, Delete20Regular, EditSettings24Regular,
} from "@vicons/fluent";
import {h, onMounted} from "vue";
import {NIcon} from "naive-ui";
import NoDataPicture from "@/components/NoDataPicture.vue";

const loading = ref(false);
const table_list = ref([]);
const total_item = ref(0);
const dialog = ref(false);
const dialog_type = ref(true);
const drawer_loading = ref(false);
const user_menu_ref = ref(null)

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
const permission_list = ref([]);
const item_details = ref({
  name: null,
  permissions: null,
});
const selected_item_id = ref(null);

const actionHandler = (event) => {
  if (event.event === 'edit_key') {
    edit_item(event.data)
  } else if (event.event === 'delete_key') {
    delete_item(event)
  }
}

const get_tableList = () => {
  loading.value = true;
  let param = params.value
  $ApiService.roles.role_index(param).then((res) => {
    total_item.value = res.data.roles.total;
    table_list.value = res.data.roles.data;
  }).finally(() => {
    loading.value = false;
  })
}

const get_permissions = () => {
  if (permission_list.value.length == 0) {
    drawer_loading.value = true;
    $ApiService.roles.role_create().then((res) => {
      permission_list.value = res.data.permissions;
    }).finally(() => {
      drawer_loading.value = false;
    })
  }
}
const add_item = () => {
  dialog_type.value = true;
  dialog.value = true;
  reset_items()
  get_permissions()
}
const edit_item = (item) => {
  dialog_type.value = false
  dialog.value = true;
  drawer_loading.value = true;
  selected_item_id.value = item.id;
  $ApiService.roles.role_edit({role_id: item.id}).then((res) => {
    permission_list.value = res.data.permissions;
    item_details.value.name = res.data.role.name;
    item_details.value.permissions = res.data.role.permissions;
    console.log(item_details.value)
  }).finally(() => {
    drawer_loading.value = false;
  })

}

const addAndEdit = () => {
  formRef.value.validate((error) => {
    if (!error && dialog_type.value) {
      $ApiService.roles.role_store({data: item_details.value}).then((res) => {
        dialog.value = false;
        get_tableList()
      })
    } else if (!error && !dialog_type.value) {
      $ApiService.roles.role_update({data: item_details.value, role_id: selected_item_id.value}).then((res) => {
        dialog.value = false;
        get_tableList()
      })
    }
  })

}

const delete_item = (event) => {
  $ApiService.roles.role_delete({role_id: event.data.id}).then((res) => {
    let index_alert = total_item.value - 1 === params.value.per_page * (params.value.page - 1);
    if (index_alert && (total_item.value != 1)) {
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
const reset_items = () => {
  for (const item of Object.entries(item_details.value)) {
    item_details.value[item[0]] = null;
  }
}
const formRef = ref(null)
const rules = {
  name: [
    {
      required: true,
      message: "Maydon to'ldirilishi shart!",
      trigger: ["input", "blur"]
    }
  ],
  permissions: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: 'Kamida bittasini tanlashingiz shart!'
  },

}
const enter_search = () => {
  params.value.page = 1;
  get_tableList()
}
const edit_menu_handler = (id) => {
  user_menu_ref.value.get_list(id)
}

onMounted(() => {
  get_tableList();

})


</script>
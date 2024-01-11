<template>
  <div class="page-box  xl:px-5 lg:px-5 px-3 pt-4 pb-20">
    <div class=" w-full " style="border-radius: 12px">
      <div class="grid grid-cols-1">
        <div class="grid xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4 mb-6 mt-4">
          <n-input placeholder="Familiya">
            <template #prefix>
              <n-icon :component="Search12Regular"/>
            </template>
          </n-input>

          <n-input placeholder="Ism">
            <template #prefix>
              <n-icon :component="Search12Regular"/>
            </template>
          </n-input>

          <n-input placeholder="Sharif">
            <template #prefix>
              <n-icon :component="Search12Regular"/>
            </template>
          </n-input>
          <n-input placeholder="Lavozim">
            <template #prefix>
              <n-icon :component="Search12Regular"/>
            </template>
          </n-input>

          <n-button type="info">
            <template #icon>
              <n-icon>
                <FilterSync24Filled/>
              </n-icon>
            </template>
            Filter
          </n-button>
          <n-button icon-placement="left" type="success">
            <template #icon>
              <n-icon>
                <FilterSync24Filled/>
              </n-icon>
            </template>
            Yuklash
          </n-button>
          <n-button type="primary">
            <template #icon>
              <n-icon>
                <FilterSync24Filled/>
              </n-icon>
            </template>
            Xodim
          </n-button>
        </div>
        <div class="w-full overflow-x-auto">
<!--          <n-table :bordered="false" :single-line="false" size="small" striped>-->
<!--            <thead>-->
<!--            <tr>-->
<!--              <th class="text-dark-color" style="min-width: 40px; width:40px">No</th>-->
<!--              <th class="text-dark-color" style="min-width: 40px; width:40px">Rasm</th>-->
<!--              <th class="text-dark-color" style="min-width: 120px; width:180px">F.I.SH</th>-->
<!--              <th class="text-dark-color" style="min-width: 120px;">Lavozim</th>-->
<!--              <th class="text-dark-color" style="min-width: 120px; width:180px">Korxona nomi</th>-->
<!--              <th class="text-dark-color" style="min-width: 80px; width: 80px">Amallar</th>-->

<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="item in 10" :key="item">-->
<!--              <td>-->
<!--                <span class="flex justify-center items-center" style="font-size: 12px">{{ item }}</span>-->
<!--              </td>-->
<!--              <td>-->
<!--                  <span class="flex justify-center items-center">-->
<!--                       <n-avatar-->

<!--                           size="large"-->
<!--                           src="empty.png"-->
<!--                           fallback-src="https://api-exodim.railway.uz/storage/cadry-photos/1073c2a9aa5062b1e97ae88a5f5085e4.jpg"-->
<!--                       />-->
<!--                  </span>-->
<!--              </td>-->
<!--              <td>-->
<!--                  <span class="text-dark-color">-->
<!--                    Jahongir Raximov-->
<!--                  </span>-->
<!--              </td>-->
<!--              <td>O‘zbekiston temir yo‘llari AJ Rossiya Federatsiyasi Moskva shahridagi MDX temir yo‘l transporti-->
<!--                bo‘yicha Kengash Direksiyasidagi vakolathonasining shartnomalar va huquqiy masalalar bo‘yicha bosh-->
<!--                mutahassisi-->
<!--              </td>-->
<!--              <td>Jahongir Raximov</td>-->
<!--              <td>-->
<!--                  <span class="flex justify-center items-center">-->


<!--                      <n-dropdown-->
<!--                          placement="bottom-start"-->
<!--                          trigger="click"-->
<!--                          size="small"-->
<!--                          :options="options"-->
<!--                          @select="TableColumnChange"-->
<!--                      >-->
<!--               <n-button type="primary" size="small">-->
<!--            <template #icon>-->
<!--              <n-icon>-->
<!--                <MoreVertical20Filled/>-->
<!--              </n-icon>-->
<!--            </template>-->
<!--          </n-button>-->
<!--            </n-dropdown>-->

<!--                  </span>-->
<!--              </td>-->

<!--            </tr>-->
<!--            </tbody>-->
<!--          </n-table>-->

          <TableTemplate>
            <template v-slot:header>
              <div class="table_tr">
                <div class="table_td" style="min-width: 40px; width:40px;">
                  <span class="w-full flex text-grey-color text-sm text-center">No</span>
                </div>
                <div class="table_td" style="width:clamp(80px, 100%, 200px);">
                  <span class="w-full flex text-grey-color text-sm text-center">F.I.SH</span>
                </div>
                <div class="table_td" style="width:clamp(80px, 100%, 200px);">
                  <span class="w-full flex text-grey-color text-sm text-center">Oylik</span>
                </div>
                <div class="table_td" style="width:clamp(80px, 100%, 100%);">
                  <span class="w-full flex text-grey-color text-sm text-center">Lavozim</span>
                </div>
                <div class="table_td" style="width:clamp(80px, 100%, 200px);">
                  <span class="w-full flex text-grey-color text-sm text-center">Vendor</span>
                </div>
              </div>
            </template>

            <template v-slot:body>

              <div class="table_tr" v-for="(body_key, index) in 20" :key="body_key">
                <div class="table_td" style="min-width: 40px; width:40px;">
                  <span class="w-full flex text-sm text-dark-color  text-center">{{ index + 1 }}</span>
                </div>
                <div class="table_td" style="width:clamp(100px, 100%, 200px);">
                  <span class="w-full flex text-sm text-dark-color  text-center">Jamshid Raximov</span>
                </div>
                <div class="table_td" style="width:clamp(100px, 100%, 200px);">
                  <span class="w-full flex text-sm text-dark-color  text-center">100$ - 500$</span>
                </div>
                <div class="table_td" style="width:clamp(100px, 100%, 100%);">
                  <span class="w-full flex text-sm text-dark-color  text-center">Developer</span>
                </div>
                <div class="table_td" style="width:clamp(80px, 100%, 200px);">
            <span class="w-full flex text-sm text-dark-color">
              <action-button :options="options" :action_data="item"
                             @action-event="actionHandler($event)"></action-button>
            </span>
                </div>
              </div>

            </template>
          </TableTemplate>
          <div class="flex gap-2 items-center">
            <Table-Pagination></Table-Pagination>
            <n-button @click="tableColumnModal=true" type="primary" size="small">
              <template #icon>
                <n-icon>
                  <FilterSync24Filled/>
                </n-icon>
              </template>
            </n-button>
            <n-modal v-model:show="tableColumnModal"  preset="card" title="Dialog" style="max-width: 800px; min-width: 360px;">
              <template #header>
              <div>Table setting title</div>
            </template>


                <n-checkbox-group v-model:value="showColumnList">
                  <div class="grid gap-2 xl:grid-cols-3">
                    <div>
                      <n-checkbox value="Beijing" label="F.I.SH" />
                    </div>
                    <div>
                      <n-checkbox value="Shanghai" label="Rasm" />
                    </div>
                    <div>
                      <n-checkbox value="Guangzhou" label="Lavozim" />
                    </div>
                    <div>
                      <n-checkbox value="Shenzen" label="Bo'lim" />
                    </div>
                    <div>
                      <n-checkbox value="Shenzen" label="Korxona nomi" />
                    </div><div>
                    <n-checkbox value="Shenzen" label="Jinsi" />
                  </div><div>
                    <n-checkbox value="Shenzen" label="Millati" />
                  </div>


                  </div>
                </n-checkbox-group>


              <template #action>
                <div class="grid grid-cols-2 gap-4">
                  <n-button style="width: 100% !important;" >
                    <template #icon>
                      <n-icon>
                        <ArrowHookUpLeft20Filled/>
                      </n-icon>
                    </template>
                    Yopish
                  </n-button>
                  <n-button style="width: 100% !important;" type="primary">
                    <template #icon>
                      <n-icon>
                        <SaveMultiple20Regular/>
                      </n-icon>
                    </template>
                    Saqlash
                  </n-button>
                </div>
              </template>
            </n-modal>
          </div>

        </div>


      </div>
    </div>
  </div>

</template>
<script setup>

import {NIcon} from "naive-ui";
import {
  SaveMultiple20Regular,
  Search12Regular,
  FilterSync24Filled,
  MoreVertical20Filled,
  Document24Regular,
  ArrowDownload16Filled,
  ArrowHookUpLeft20Filled,

  Settings28Regular,
} from "@vicons/fluent";
import {h, ref} from "vue";
import TableTemplate from "@/pages/TemplatePage/TableTemplate.vue";
import ActionButton from "@/components/ActionButton.vue";

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};

const options = [
  {
    label: "Ko'rish",
    key: 'jay gatsby',
    icon: renderIcon(Document24Regular)
  },
  {
    label: 'Yuklash',
    key: 'daisy buchanan',
    icon: renderIcon(ArrowDownload16Filled)
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: "Tibbiy ko'rik",
    key: 'jay gatsby',
    icon: renderIcon(Settings28Regular)
  },
  {
    label: "Ta'til",
    key: 'daisy buchanan',
    icon: renderIcon(Settings28Regular)
  },
];
const tableColumnModal = ref(false);
const showColumnList = ref(null);
const TableColumnChange = (event)=>{
  console.log(event)
}

</script>
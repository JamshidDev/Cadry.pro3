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
          <n-table :bordered="false" :single-line="false" size="small" striped>
            <thead>
            <tr>
              <th class="text-dark-color" style="min-width: 40px; width:40px">No</th>
              <th class="text-dark-color" style="min-width: 40px; width:40px">Rasm</th>
              <th class="text-dark-color" style="min-width: 120px; width:180px">F.I.SH</th>
              <th class="text-dark-color" style="min-width: 120px;">Lavozim</th>
              <th class="text-dark-color" style="min-width: 120px; width:180px">Korxona nomi</th>
              <th class="text-dark-color" style="min-width: 80px; width: 80px">Amallar</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="item in 10" :key="item">
              <td>
                <span class="flex justify-center items-center" style="font-size: 12px">{{ item }}</span>
              </td>
              <td>
                  <span class="flex justify-center items-center">
                       <n-avatar

                           size="large"
                           src="empty.png"
                           fallback-src="https://api-exodim.railway.uz/storage/cadry-photos/1073c2a9aa5062b1e97ae88a5f5085e4.jpg"
                       />
                  </span>
              </td>
              <td>
                  <span class="text-dark-color">
                    Jahongir Raximov
                  </span>
              </td>
              <td>O‘zbekiston temir yo‘llari AJ Rossiya Federatsiyasi Moskva shahridagi MDX temir yo‘l transporti
                bo‘yicha Kengash Direksiyasidagi vakolathonasining shartnomalar va huquqiy masalalar bo‘yicha bosh
                mutahassisi
              </td>
              <td>Jahongir Raximov</td>
              <td>
                  <span class="flex justify-center items-center">
                     <n-button type="primary" size="small">
            <template #icon>
              <n-icon>
                <MoreVertical20Filled/>
              </n-icon>
            </template>
          </n-button>
                  </span>
              </td>

            </tr>
            </tbody>
          </n-table>
          <Table-Pagination></Table-Pagination>
        </div>


      </div>
    </div>
  </div>

</template>
<script setup>
import {h} from "vue"
import {NIcon} from "naive-ui";
import {Search12Regular, FilterSync24Filled,MoreVertical20Filled} from "@vicons/fluent";

</script>
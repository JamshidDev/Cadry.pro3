<template>
  <div class="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1   gap-4 px-4 py-4 w-full">
    <div class="flex xl:justify-start lg:justify-start md:justify-start justify-center">
        <span class="text-grey-color font-normal"><span class="font-semibold text-dark-color">100</span> tadan <span class="font-semibold text-dark-color ml-4">0 - 10</span> gacha ko'rsatilmoqda</span>
    </div>
    <div class="flex xl:justify-end lg:justify-end md:justify-end justify-center">
      <n-pagination
          v-model:page="page"
          v-model:page-size="pageSize"
          :page-count="100"
          show-size-picker
          :page-sizes="pageSizes"
      />
    </div>

  </div>

</template>

<script setup>

import {ref } from "vue";

const page = ref(1)
const pageSize = ref(10)
const pageSizes = [
  {
    label: "10 tadan ko'rsatish",
    value: 10
  },
  {
    label: "20 per page",
    value: 20
  },
  {
    label: "30 per page",
    value: 30
  },
  {
    label: "50 per page",
    value: 50
  },
  {
    label: "100 per page",
    value: 100
  }
];


</script>
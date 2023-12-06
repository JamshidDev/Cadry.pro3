<template>
  <div class="page-box  xl:px-5 lg:px-5 px-3 pt-4 pb-20">
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4">
      <div v-for="item in 4" :key="item" class="card-container card-shadow border-[1px] primary-border-color p-4 h-[]" style="border-radius:12px">
        <Echart></Echart>
      </div>
      <div v-for="item in 4" :key="item" class="card-container card-shadow border-[1px] primary-border-color p-4 h-[]" style="border-radius:12px">
        <PieEchart></PieEchart>
      </div>
    </div>
  </div>

</template>
<script setup>
import Echart from "@/components/Echart.vue";
import PieEchart from "@/components/PieEchart.vue";
</script>





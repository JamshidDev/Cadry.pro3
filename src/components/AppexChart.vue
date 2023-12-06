<template>
  <apexchart width="100%" type="pie" :options="options" :series="series"></apexchart>
</template>
<script setup>
import {Mixins} from "@/mixins/Mixins.js";

const options= {
  title: {
    text: "Monochrome Pie",
    style: {
      color:'#ffffff',
      fontWeight:500,
      fontFamily:'Poppins',
    }


  },
  theme:{
    // mode:"dark",
    monochrome:{
      shadeTo:"dark",
      color: '#255aee',
      shadeIntensity:0.6,
      // enabled:true,
    },
  },
  dropShadow: {
    enabled: true,
    top: 2,
    left: 6,
    blur: 8,
    opacity: 0.8
  },
  dataLabels: {
    style: {
      colors: ['#ffffff', '#ffffff', '#ffffff']
    }
  },
  markers: {
    colors: ['#F44336', '#E91E63', '#9C27B0']
  },
  grid: {
    position:'grid',
    row: {
      colors: ['#F44336', '#E91E63', '#9C27B0']
    },
    column: {
      colors: ['#F44336', '#E91E63', '#9C27B0']
    }
  },

  colors:[ Mixins.Color_list.primary_color, Mixins.Color_list.success_color,Mixins.Color_list.danger_color],
  label:[ Mixins.Color_list.primary_color, Mixins.Color_list.success_color,Mixins.Color_list.danger_color]
};
const series= [44, 55, 41,];

</script>
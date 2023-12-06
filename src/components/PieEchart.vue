<template>
  <div style="height: 400px">
    <v-chart :option="option" autoresize   />
    <button @click="count ++">Refrash</button>
  </div>
</template>
<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart,  } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import {Mixins} from "@/mixins/Mixins.js"
import { ref, defineComponent, provide, onMounted, computed } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
]);

provide('THEME_KEY', 'dark');

const count = ref(120)
const option= computed(()=>{
  return {
    textStyle: {
      fontFamily: 'Poppins',
    },
    title: {
      text: 'Title text',
      left: 'center',
      textStyle: {
        color:Mixins.Color_list.primary_color
      }

    },
    tooltip: {
      backgroundColor: 'rgba(241,245,249,0.27)',
      trigger: 'item',
      formatter: '<p class="text-dark-color text-[12px] font-medium" >{a} <br/>{b} : {c} ({d}%)</p>',
    },
    color:[Mixins.Color_list.primary_color,Mixins.Color_list.success_color,Mixins.Color_list.info_color,Mixins.Color_list.warning_color,Mixins.Color_list.success_color,],
    legend: {
      orient: 'vertical',
      left: 'left',
      data: [
        'Direct',
        'Email',
        'Ad Networks',
        'Direct2',
        'Email2',
        'Ad Networks2',
      ],
      inactiveColor:"red",
      textStyle:{
        color:'green'
      },
    },
    series: [
      {
        name: 'Radius Mode',
        type: 'pie',
        radius: [20, 140],
        center: ['50%', '60%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 6,
        },
        label: {
          show: true,
          textStyle:{
            color:'red'
          }

        },
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 234, name: 'Ad Networks' },
          { value: 225, name: 'Direct2' },
          { value: count.value, name: 'Email2' },
          { value: 404, name: 'Ad Networks2' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
})


onMounted(()=>{

})

</script>
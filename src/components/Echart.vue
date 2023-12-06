<template>
 <div style="height: 300px">
   <v-chart :option="option" autoresize />
 </div>
</template>

<script>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import {Mixins} from "@/mixins/Mixins.js"
import { ref, defineComponent } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
]);

export default defineComponent({
  name: 'HelloWorld',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  setup() {
    const option= {
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
        backgroundColor: Mixins.Color_list.card_bg_color,
        trigger: 'item',
            formatter: '<p class="text-dark-color text-[12px] font-medium" >{a} <br/>{b} : {c} ({d}%)</p>',
      },
      color:[Mixins.Color_list.primary_color,Mixins.Color_list.success_color,Mixins.Color_list.info_color,],
      legend: {

        orient: 'vertical',
            left: 'left',
            data: [
          'Direct',
          'Email',
          'Ad Networks',
        ],
        inactiveColor:"red",
        textStyle:{
          color:'green'
        },
      },
      series: [
        {
          name: "Ma'lumotlar",
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 234, name: 'Ad Networks' },
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


    return { option };
  },
});
</script>



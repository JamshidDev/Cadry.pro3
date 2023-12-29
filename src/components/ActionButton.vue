<template>
  <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="small"
      :options="options"
      @select="selectAction"
  >
    <n-button type="primary" size="small">
      <template #icon>
        <n-icon>
          <MoreVertical20Filled/>
        </n-icon>
      </template>
    </n-button>
  </n-dropdown>

  <n-popconfirm
      @positive-click="handlePositiveClick"
      @negative-click="handleNegativeClick"
      :negative-text="`Yo'q`"
      :positive-text="`Ha`"
  >    <template #trigger>
      <button ref="confirm_btn" class="w-[1px] h-[1px]"></button>
    </template>
    Haqiqattan ham o'chirmoqchimisiz?
  </n-popconfirm>

</template>
<script setup>
import {ref} from "vue"
import {MoreVertical20Filled} from "@vicons/fluent";
const props = defineProps({
  action_data:{
    type:Object,
    default:{},
  },
  options:{
    type:Array,
    default:[],
  }
})

const emits = defineEmits(['actionEvent'])
const confirm_btn = ref(null);
const selectAction = (event)=>{
    if(event === 'delete_key'){
      confirm_btn.value.click()
    }else{
      emits('actionEvent', {event,data: props.action_data });
    }


}
const handleNegativeClick =(event)=>{

}
const handlePositiveClick =(event)=>{
  emits('actionEvent', {event:'delete_key',data: props.action_data });
}
</script>
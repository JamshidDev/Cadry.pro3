<template>

</template>

<script setup>
import {useNotification} from "naive-ui";
import instance from "@/service/index.js"
const emit = defineEmits(["changePlacement"])
const notification = useNotification();
const notify = (type, title, text, duration=2500) => {
  notification[type]({
    content: title,
    meta:text,
    duration: duration,
    keepAliveOnHover: true,
    placement:'bottom-right'
  });
}
instance.interceptors.response.use(
    (response) => {
      if (response.data?.alert == 'switch') {
      } else if (response.data?.alert == 'notify') {
        emit("changePlacement", response.data.position)
        notify(response.data.type, response.data.message.title, response.data.message.description, response.data.timer)
      }
      return Promise.resolve(response)
    },
    (error) => {
      if (error.response?.status >= 500) {
      //   Server error
      }else{
        if (error.response.data?.alert == 'switch') {
        } else if (error.response.data?.alert == 'notify') {
          emit("changePlacement", error.response.data.position)
          notify(error.response.data.type, error.response.data.message.title, error.response.data.message.description, error.response.data.timer)
        }
      }
      return Promise.reject(error)
    }
);


</script>
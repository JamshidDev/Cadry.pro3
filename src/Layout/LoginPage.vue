<template>
  <div class="login-page-container relative">
<!--            <div class="logo-box flex gap-2 items-center">-->
<!--              <img src="https://exodim.railway.uz/assets/logo-aacfc0e3.webp" alt="">-->
<!--              <div class="logo-text">-->
<!--                <div class="logo-title">O‘ZBEKISTON TEMIR YO‘LLARI</div>-->
<!--                <div class="logo-subtitle">AKSIYADORLIK JAMIYATI</div>-->
<!--              </div>-->
<!--            </div>-->
    <div class="login-form mx-auto mt-[160px]  max-w-[400px] min-w-[300px] w-full pb-4 h-auto   relative z-[3] rounded-[20px] px-[20px] pt-[30px]">
      <h4 class="text-center text-[24px] text-[#fff] font-medium uppercase" >Tizimga kirish</h4>
      <div class="input-field mb-6 mt-6">
        <label class="block text-[13px] mb-2 " for="login">Telefon raqam</label>
        <input  type="text" v-model="user_details.login" :class="( loginError && submitted) && 'error_input'"  id="login" name="login" placeholder="Telefon raqamingizni kiriting" class="block text-[14px]  px-[12px] w-full bg-[#353c43] h-[40px] rounded-[4px]">
      </div>
      <div class="input-field">
        <label class="block text-[13px] mb-2" for="password">Parol</label>
        <input  :type="inputType" v-model="user_details.password" :class="(passwordError && submitted) && 'error_input'"  id="password" name="password" placeholder="Parolni kiriting" class="block text-[14px]  px-[12px] w-full bg-[#353c43] h-[40px] rounded-[4px]">
        <n-icon>
          <EyeOff24Filled @click="change_inputType" v-if="inputType == 'password'"></EyeOff24Filled>
          <Eye24Regular  @click="change_inputType"  v-else></Eye24Regular>
        </n-icon>
      </div>
      <button @click="authUser" class="h-[36px] rounded-[4px] bg-[#1385fa] text-[14px] text-[#fff] w-full mt-6">Tizimga kirish</button>
      <div class="bg-overall" v-if="loading">
        <n-spin size="medium" />
      </div>
      <div class="text-[13px] mt-[60px] text-[#8e9ba8] font-normal" >Savol va takliflar uchun yopiq <span class="text-[#1385fa] cursor-pointer">telegram guruh</span></div>
    </div>

    <div class="footer-section w-full absolute bottom-0 left-0 right-0 h-[40px] flex items-center justify-center">
            <span class="text-[#8e9ba8] text-[13px]">"O'zbekiston temir yo'llari" Aksiyadorlik jamiyatining Exodim platformasi</span>
    </div>
  </div>
</template>
<script setup>
import {Eye24Regular,EyeOff24Filled} from "@vicons/fluent"
import {ref, computed} from 'vue'
const  inputType = ref('password')
const loading = ref(false)
const submitted = ref(false)
const change_inputType = ()=>{
  if(inputType.value == 'password'){
    inputType.value = 'text'
  }else{
    inputType.value = 'password'
  }
}

const user_details = ref({
  login:null,
  password:null,
})

const authUser = ()=>{

  submitted.value = true
  if(!loginError.value && !passwordError.value ){
    loading.value = true;
    setTimeout(()=>{
      loading.value = false;
    }, 3000)
  }

}

const loginError = computed(()=>{
  return !user_details.value.login;
})

const passwordError = computed(()=>{
  return !user_details.value.password;
})
</script>
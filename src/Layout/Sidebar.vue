<template>
  <div class="sidebar-box">
    <div class="header-sidebar">

    </div>
    <div class="body-sidebar">
      <template v-for="item in 10" :key="item">
        <div class="single-item">
          <div class="item-icon">
                <n-icon>
                  <ChartPerson24Regular></ChartPerson24Regular>
                </n-icon>
          </div>
          <div class="item-title">
            Configuration Reports
          </div>

        </div>
      </template>

    </div>
    <div class="footer-sidebar">

    </div>
  </div>
</template>

<script setup>
import {ChartPerson24Regular}  from '@vicons/fluent'

</script>


<template>
  <div class="w-full overflow-x-auto">
    <div class="custom_table_one mb-6">
      <div class="table_header_one">
        <slot name="header"></slot>
      </div>
      <div class="table_body_one">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>
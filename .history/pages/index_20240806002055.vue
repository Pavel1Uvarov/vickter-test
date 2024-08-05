<script lang="ts" setup>
import data from "@/__mocks__/data"

definePageMeta({
  title: 'Test Task'
})
</script>

<template>
  <div class="container mx-auto px-4 py-28">
    <PageTitle class="text-center mb-20">
      We make creative media <br> that <span class="text-secondary">adds value</span>
    </PageTitle>
    <div class="grid grid-cols-3 gap-8 mb-20">
      <MainCard v-for="item in data" :key="item.uuid" :item="item" class="col-span-3 lg:col-span-1" />
    </div>
    <div class="text-center">
      <MainButton />
    </div>
  </div>
</template>
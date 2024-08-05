<script lang="ts" setup>
import type { ICard } from "~/types/card.interface";
import { computed } from 'vue';

const props = defineProps<{
  item: ICard
}>();

const imagesCount = computed(() => props.item.images.length);

const imageClass = () => {
  return imagesCount.value > 1 ? 'h-1/2' : 'h-full';
};

const nuxtImgClass = (index: number) => {
  return {
    'rounded-l-lg': imagesCount.value === 1,
    'rounded-tl-lg': imagesCount.value > 1 && index === 0,
    'rounded-bl-lg': imagesCount.value > 1 && index === 1,
  };
};
</script>

<template>
  <div class="rounded-lg bg-white grid grid-cols-5 max-h-[336px] overflow-hidden hover:shadow-md">
    <div class="col-span-2 flex flex-col h-[336px] gap-1">
      <div v-for="(image, index) in item.images" :key="index" :class="imageClass()">
        <NuxtImg
            :src="`/img/${image}`"
            :class="['w-full h-full object-cover image-overflow', nuxtImgClass(index)]"
            :alt="item.title"
            quality="100"
        />
      </div>
    </div>
    <div class="col-span-3 flex flex-col p-[40px_30px_34px_34px] space-y-3">
      <h5 class="text-slateGray text-2xl font-bold font-poppins truncate">{{ item.title }}</h5>
      <ul class="list-disc list-inside marker:text-gold" v-show="item.list?.length">
        <li v-for="listItem in item.list" :key="listItem" class="font-nunitoSans font-bold text-sm text-slateGray">{{ listItem }}</li>
      </ul>
      <p class="font-nunitoSans font-semibold" v-for="desc in item.description" :key="desc">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.image-overflow {
  overflow-clip-margin: unset;
}
</style>
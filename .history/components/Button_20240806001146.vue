<template>
  <button
      class="rounded-xl bg-primary text-white font-poppins font-bold h-15 min-w-79 uppercase tracking-widest hover:bg-primaryHover"
      :class="customClass"
      @click="$emit('click')"
  >
    <slot>Get Started</slot>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  customClass?: string;
}>();

defineEmits<{
  (e: 'click'): void;
}>();
</script>

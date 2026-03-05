<template>
  <div>
    <h3>{{ food.name }}</h3>
    <p>{{ food.price }}</p>
    <img :src="food.img" alt="" />
  </div>
  <slot></slot>
</template>

<script setup>
defineProps({
  food: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>

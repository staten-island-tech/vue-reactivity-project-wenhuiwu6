<template>
  <div class="displayOnScreen">
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

<style scoped>
.displayOnScreen {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.displayOnScreen img {
  width: 20%;
  border-radius: 8px;
}
</style>

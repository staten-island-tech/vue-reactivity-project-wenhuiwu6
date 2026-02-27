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

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-radius: 8px;
}
</style>

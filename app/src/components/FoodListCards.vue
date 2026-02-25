<template>
  <div>
    <h2>{{ food.name }}</h2>
    <p>{{ food.price }}</p>
    <img :src="food.img" alt="" />
  </div>
</template>

<script setup>
defineProps({
  animal: {
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
  height: 300px;
  width: 200px;
}
</style>

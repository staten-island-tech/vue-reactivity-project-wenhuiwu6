<template>
  <div>
    <h3>{{ food.name }}</h3>
    <p>{{ food.price }}</p>
    <img :src="food.img" alt="" />
  </div>
  <button @click="ToCart">Add to Cart</button>
</template>

<script setup>
defineProps({
  food: {
    type: Object,
    required: true,
  },
})

function Tocart() {}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>

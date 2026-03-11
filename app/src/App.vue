<template>
  <div class="everything">
    <h1>Chinese Restaurant</h1>
    <p>Eat all you want :></p>
    <div class="container">
      <FoodListCards v-for="food in foods" :key="food.name" :food="food" class="card">
        <h3>{{ food.name }}</h3>
        <p>{{ food.price }}</p>
        <img :src="food.img" alt="" />
        <button @click="addCart(food)">Add to Cart</button>
      </FoodListCards>
    </div>
    <h2>Your Order</h2>
    <div class="showCart">
      <p v-for="item in alreadybuy" :key="item.name">
        {{ item.name }} - ${{ item.price }} <button @click="DeleteFood(item)">Delete</button>
      </p>
    </div>
    <div class="cost">
      <p>Total: ${{ totalPrice() }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const alreadybuy = ref([])

function addCart(food) {
  // console.log(alreadybuy)
  alreadybuy.value.push(food)
  console.log(`${food.name} - $${food.price}`)
}

function DeleteFood(item) {
  alreadybuy.value = alreadybuy.value.filter((t) => t !== item)
}

function totalPrice() {
  let total = 0
  for (let item of alreadybuy.value) {
    total += item.price
  }
  return total.toFixed(2)
}

const foods = ref([
  { name: 'Tso Chicken', img: 'KungPaoChicken.jpg', price: 12.99 },
  { name: 'Kung Pao Chicken', img: 'TsoChicken.webp', price: 11.99 },
  { name: 'Sweet and Sour Pork', img: 'SweetAndSourPork.jpg', price: 10.99 },
  { name: 'Beef and Broccoli', img: 'BeefAndBroccoli.jpg', price: 13.49 },
  { name: 'Sesame Chicken', img: 'SesameChicken.jpg', price: 12.99 },
  { name: 'Chicken Lo Mein', img: 'ChickenLoMein.jpg', price: 9.99 },
  { name: 'Shrimp Fried Rice', img: 'ShrimpFriedRice.webp', price: 10.49 },
  { name: 'Vegetable Stir Fry', img: 'VegetableStirFry.jpg', price: 9.49 },
  { name: 'Dumplings (Pork)', img: 'Dumplings.jpg', price: 7.99 },
  { name: 'Spring Rolls', img: 'SpringRolls.jpeg', price: 5.99 },
  { name: 'Hot and Sour Soup', img: 'HotAndSourSoup.jpg', price: 4.99 },
  { name: 'Wonton Soup', img: 'WontonSoup.jpg', price: 4.99 },
  { name: 'Mongolian Beef', img: 'MongolianBeef.jpg', price: 13.99 },
  { name: 'Egg Foo Young', img: 'EggFooYoung.jpg', price: 11.49 },
])
</script>

<style scoped>
.everything {
  background-color: #ffccd5;
  padding: 20px;
}

h1,
h2,
p {
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  text-align: center;
  width: 200px;
  border: 2px solid #ff758f;
  background-color: #fff0f3;
  border-radius: 50px;
  padding: 10px;
}

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

button {
  margin-top: 8px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid palevioletred;
  background-color: #ffb3c1;
  color: black;
}
</style>

<style lang="" scoped></style>

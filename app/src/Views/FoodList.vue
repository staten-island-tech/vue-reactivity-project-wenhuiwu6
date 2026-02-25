<template>
  <div>
    <h1>Chinese Restaurant</h1>
    <p>Eat all you want :></p>
    <div v-for="food in foods" :key="food.name">
      <h2>{{ food.name }}</h2>
      <p>{{ food.price }}</p>
      <img :src="food.img" alt="" />
    </div>
  </div>
</template>

<script setup>
const foods = [
  { name: 'Tso Chicken', img: 'KungPaoChicken.jpg', price: 12.99 },
  { name: 'Kung Pao Chicken', img: 'TsoChicken.webp', price: 11.99 },
  { name: 'Sweet and Sour Pork', img: 'SweetAndSourPork.jpg', price: 10.99 },
  { name: 'Beef and Broccoli', img: 'Beef and Broccoli.jpg', price: 13.49 },
  { name: 'Sesame Chicken', img: 'SesameChicken.jpg', price: 12.99 },
  { name: 'Chicken Lo Mein', img: 'ChickenLoMein.jpg', price: 9.99 },
  { name: 'Shrimp Fried Rice', img: 'ShrimpFriedRice.jpg', price: 10.49 },
  { name: 'Vegetable Stir Fry', img: 'VegetableStirFry.jpg', price: 9.49 },
  { name: 'Dumplings (Pork)', img: 'Dumplings.jpg', price: 7.99 },
  { name: 'Spring Rolls', img: 'SpringRolls.jpeg', price: 5.99 },
  { name: 'Hot and Sour Soup', img: 'HotAndSourSoup.jpg', price: 4.99 },
  { name: 'Wonton Soup', img: 'WontonSoup.jpg', price: 4.99 },
  { name: 'Mongolian Beef', img: 'MongolianBeef.jpg', price: 13.99 },
  { name: 'Egg Foo Young', img: 'EggFooYoung.jpg', price: 11.49 },
]
</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>

<style lang="" scoped></style>

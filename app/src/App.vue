<template>
  <div>
    <h1>Chinese Restaurant</h1>
    <p>Eat all you want :></p>
    <li v-for="food in foods" :key="food.name">{{ food.name }}</li>
    <li v-for="food in foods" :key="food.name">{{ food.price }}</li>
    <li v-for="food in foods" :key="food.name">{{ food.picture }}</li>
  </div>
</template>

<script setup>
const foods = [
  { name: 'Tso Chicken', picture: 'KungPaoChicken.jpg', price: 12.99 },
  { name: 'Kung Pao Chicken', picture: 'TsoChicken.webp', price: 11.99 },
  { name: 'Sweet and Sour Pork', picture: 'SweetAndSourPork.jpg', price: 10.99 },
  { name: 'Beef and Broccoli', picture: 'Beef and Broccoli.jpg', price: 13.49 },
  { name: 'Orange Chicken', picture: 'OrangeChicken.jpg', price: 12.49 },
  { name: 'Sesame Chicken', picture: 'SesameChicken.jpg', price: 12.99 },
  { name: 'Chicken Lo Mein', picture: 'ChickenLoMein.jpg', price: 9.99 },
  { name: 'Shrimp Fried Rice', picture: 'ShrimpFriedRice.jpg', price: 10.49 },
  { name: 'Vegetable Stir Fry', picture: 'VegetableStirFry.jpg', price: 9.49 },
  { name: 'Dumplings (Pork)', picture: 'Dumplings.jpg', price: 7.99 },
  { name: 'Spring Rolls', picture: 'SpringRolls.jpeg', price: 5.99 },
  { name: 'Hot and Sour Soup', picture: 'HotAndSourSoup.jpg', price: 4.99 },
  { name: 'Wonton Soup', picture: 'WontonSoup.jpg', price: 4.99 },
  { name: 'Mongolian Beef', picture: 'MongolianBeef.jpg', price: 13.99 },
  { name: 'Egg Foo Young', picture: 'EggFooYoung.jpg', price: 11.49 },
]
</script>

<style lang="scss" scoped></style>

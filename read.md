# Vue Reactivity Project Feedback

**Student:** Wenhuiwu

This is a Chinese restaurant food menu — the router, component structure, and `v-for` show solid Vue setup, but `addCart` only logs to the console and the cart array isn't reactive, so nothing updates when you click.

## Vite CLI – Mastery

`package.json` correctly includes `vite`, `vue`, and `vue-router` with proper scripts.

## Iteration in Vue – Mastery

`v-for` is used in `FoodList.vue` with `:key="food.name"` — correct pattern with a unique key.

## Data Binding – Approaching

The food list data is displayed in the template with `{{ }}`. However, `alreadybuy` (the cart array) is declared as a plain array (not `ref`), so Vue can't track changes to it:

```js
// Current (not reactive):
let alreadybuy = [];

// Fix:
import { ref } from "vue";
const alreadybuy = ref([]);
```

The food list data itself is also a plain array — wrap it in `ref()` too if you want it to be modifiable.

## Click Methods – Approaching

`@click="addCart(food)"` is correctly wired and the function is defined. However, `addCart` only calls `console.log` — it never updates state or the UI:

```js
// Current (does nothing visible):
function addCart(food) {
  console.log(food);
}

// Fix:
function addCart(food) {
  alreadybuy.value.push(food);
}
```

## Reactive UI – Not Yet

Because `alreadybuy` isn't reactive and `addCart` doesn't modify state, the cart never shows any items. After the fixes above, add a display section for the cart:

```html
<h2>Your Order</h2>
<ul>
  <li v-for="item in alreadybuy" :key="item.name">{{ item.name }}</li>
</ul>
```

## Semantic HTML – Approaching

The food list is rendered with a component structure. Verify that the food items are inside a `<ul>/<li>` structure in `FoodList.vue`. Navigation links use `<RouterLink>` — correct. Consider using `<nav>` to wrap navigation links.

## BEM CSS – Not Yet

No BEM class names are used. Add descriptive class names following `block__element--modifier`:

- `food-menu` (block)
- `food-menu__item` (element)
- `food-menu__button--add` (modifier)

## Bonus – Aesthetics – Approaching

The router setup with multiple views is a strong foundation. Adding a restaurant color scheme, food images, and a visible cart summary would make this feel like a real menu.

## Summary of Critical Fixes

1. **Declare `alreadybuy` with `ref([])`** instead of `let alreadybuy = []` — it needs to be reactive.
2. **Make `addCart` actually push to the array**: `alreadybuy.value.push(food)` instead of `console.log(food)`.
3. **Render the cart in the template** — show `alreadybuy` so users can see their order.
4. **Add BEM class names** to your CSS.

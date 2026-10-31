// Shopping cart helpers.

export function cartTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

export function applyDiscount(total, percent) {
  return total - total * percent;
}

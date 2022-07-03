const menuItemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${menuItemsEl.length}`)

menuItemsEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`)
console.log(`Elements: ${item.lastElementChild.children.length}`)
});


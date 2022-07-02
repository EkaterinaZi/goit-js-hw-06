const menuItemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${menuItemsEl.length}`)

console.log(`Category: ${menuItemsEl[0].firstElementChild.textContent}`)
console.log(`Elements: ${menuItemsEl[0].lastElementChild.children.length}`)

console.log(`Category: ${menuItemsEl[1].firstElementChild.textContent}`)
console.log(`Elements: ${menuItemsEl[1].lastElementChild.children.length}`)

console.log(`Category: ${menuItemsEl[2].firstElementChild.textContent}`)
console.log(`Elements: ${menuItemsEl[2].lastElementChild.children.length}`)


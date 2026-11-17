import { validateItem } from "./validation.js";
import ShoppingList from "./ShoppingList.js";
const shoppingList = new ShoppingList();
const nameInput = document.querySelector("#nameInput");
const quantityInput = document.querySelector("#quantityInput");
const addButton = document.querySelector("#addButton");
const errorMessage = document.querySelector("#errorMessage");
const filterSelect = document.querySelector("#filterSelect");
const listContainer = document.querySelector("#listContainer");
const counter = document.querySelector("#counter");
const clearBoughtButton = document.querySelector("#clearBoughtButton");
function render() {
    const currentFilter = filterSelect.value;
    const filteredItems = shoppingList.getFiltered(currentFilter);
    listContainer.innerHTML = "";
    filteredItems.forEach((item) => {
        listContainer.appendChild(item.render());
    });
    counter.textContent = `Do kupienia: ${shoppingList.countRemaining()}`;
}
addButton.addEventListener("click", () => {
    const name = nameInput.value;
    const quantityText = quantityInput.value;
    const error = validateItem(name, quantityText);
    if (error !== null) {
        errorMessage.textContent = error;
        return;
    }
    shoppingList.add(name, Number(quantityText));
    nameInput.value = "";
    quantityInput.value = "";
    errorMessage.textContent = "";
    render();
});
filterSelect.addEventListener("change", () => {
    render();
});
listContainer.addEventListener("click", (event) => {
    const target = event.target;
    const itemDiv = target.closest(".item");
    if (!itemDiv)
        return;
    const id = Number(itemDiv.dataset.id);
    if (target.closest(".toggle-btn")) {
        shoppingList.toggle(id);
        render();
    }
    else if (target.closest(".delete-btn")) {
        shoppingList.remove(id);
        render();
    }
});
if (clearBoughtButton) {
    clearBoughtButton.addEventListener("click", () => {
        shoppingList.clearBought();
        render();
    });
}
render();

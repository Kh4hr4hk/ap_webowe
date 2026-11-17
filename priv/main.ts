import {validateItem} from "./validation.js";
import ShoppingList, {ItemFilter} from "./ShoppingList.js";
import ShoppingItem from "./ShoppingItem.js";

const shoppingList = new ShoppingList();
const nameInput = document.querySelector<HTMLInputElement>("#nameInput")!;
const quantityInput = document.querySelector<HTMLInputElement>("#quantityInput")!;
const addButton = document.querySelector<HTMLButtonElement>("#addButton")!;
const errorMessage = document.querySelector<HTMLParagraphElement>("#errorMessage")!;
const filterSelect = document.querySelector<HTMLSelectElement>("#filterSelect")!;
const listContainer = document.querySelector<HTMLDivElement>("#listContainer")!;
const counter = document.querySelector<HTMLParagraphElement>("#counter")!;
const clearBoughtButton = document.querySelector<HTMLButtonElement>("#clearBoughtButton")!;

function render():void{
    const currentFilter = filterSelect.value as ItemFilter;
    const filteredItems: ShoppingItem[] = shoppingList.getFiltered(currentFilter);

    listContainer.innerHTML = "";
    filteredItems.forEach((item)=>{
        listContainer.appendChild(item.render());
    });

    counter.textContent = `Do kupienia: ${shoppingList.countRemaining()}`;

}

addButton.addEventListener("click", () => {
    const name = nameInput.value;
    const quantityText= quantityInput.value;
    const error = validateItem(name, quantityText);
    if (error!==null){
        errorMessage.textContent = error;
        return;
    }
shoppingList.add(name, Number(quantityText));
    nameInput.value="";
    quantityInput.value="";
    errorMessage.textContent="";
    render();
});
filterSelect.addEventListener("change", () => {
    render();});
listContainer.addEventListener("click", (event : Event) => {
    const target = event.target as HTMLElement;
    const itemDiv   = target.closest(".item") as HTMLElement;
    if (!itemDiv) return;

    const id=Number(itemDiv.dataset.id);

    if(target.closest(".toggle-btn")){
        shoppingList.toggle(id);
        render();
    }else if(target.closest(".delete-btn")){
        shoppingList.remove(id);
        render();
    }});
    if (clearBoughtButton){
        clearBoughtButton.addEventListener("click", () => {
            shoppingList.clearBought();
            render();
        });
    }
    render();
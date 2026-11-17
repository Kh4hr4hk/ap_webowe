import ShoppingItem from "./ShoppingItem.js";
class ShoppingList {
    items = [];
    nextId = 1;
    add(name, quantity) {
        const trimmedName = name.trim();
        const currentItem = this.items.find((item) => item.name.toLowerCase() === trimmedName.toLowerCase());
        if (currentItem) {
            currentItem.quantity += quantity;
            return currentItem;
        }
        const newItem = new ShoppingItem(this.nextId++, trimmedName, quantity);
        this.nextId++;
        this.items.push(newItem);
        return newItem;
    }
    ;
    remove(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
    ;
    getById(id) {
        return this.items.find((item) => item.id === id);
    }
    ;
    toggle(id) {
        const item = this.getById(id);
        if (item) {
            item.toggle();
        }
    }
    ;
    countRemaining() {
        return this.items.filter((item) => !item.isBought).length;
    }
    ;
    getFiltered(filter) {
        if (filter === "all") {
            return this.items.filter((item) => !item.isBought || item.isBought);
        }
        else if (filter === "toBuy") {
            return this.items.filter((item) => !item.isBought);
        }
        else {
            return this.items.filter((item) => item.isBought);
        }
    }
    ;
    clearBought() {
        this.items = this.items.filter((item) => !item.isBought);
    }
}
export default ShoppingList;

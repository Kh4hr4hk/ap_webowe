class ShoppingItem {
    id;
    name;
    quantity;
    isBought;
    constructor(id, name, quantity, isBought = false) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
    }
    toggle() {
        this.isBought = !this.isBought;
    }
    render() {
        const div = document.createElement("div");
        div.classList.add('item');
        div.setAttribute('data-id', this.id.toString());
        if (this.isBought) {
            div.classList.add('bought');
        }
        const nameItem = document.createElement("span");
        nameItem.classList.add('item-name');
        nameItem.textContent = this.name;
        const quantityItem = document.createElement("span");
        quantityItem.classList.add('item-quantity');
        quantityItem.textContent = this.quantity.toString();
        const toggleButton = document.createElement("button");
        toggleButton.classList.add('toggle-btn');
        toggleButton.textContent = this.isBought ? 'cofnij' : 'kupione';
        const deleteButton = document.createElement("button");
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'usuń';
        div.append(nameItem, quantityItem, toggleButton, deleteButton);
        return div;
    }
}
export default ShoppingItem;

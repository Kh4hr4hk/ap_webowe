import ShoppingItem from "./ShoppingItem.js";
export type ItemFilter = "all" | "toBuy" | "bought";

class ShoppingList{
    items: ShoppingItem[] = [];
    private nextId : number= 1;
    add(name:string, quantity: number) : ShoppingItem{
        const trimmedName = name.trim();
        const currentItem = this.items.find((item) => item.name.toLowerCase() === trimmedName.toLowerCase());
        if (currentItem){
            currentItem.quantity += quantity;
            return currentItem;
        }
        const newItem = new ShoppingItem(this.nextId++, trimmedName, quantity);
        this.nextId++;
        this.items.push(newItem);
        return newItem;
    
    };
    remove(id:number):void{
        this.items = this.items.filter((item) => item.id !== id);
    };
    getById(id:number): ShoppingItem | undefined{
        return this.items.find((item) => item.id===id);
    };
    toggle(id:number):void{
        const item = this.getById(id);
        if (item){
            item.toggle();
        }
    };
    countRemaining(): number{
        return this.items.filter((item)=> !item.isBought).length;
    };
    getFiltered(filter: ItemFilter): ShoppingItem[]{
        if (filter ==="all"){
            return this.items.filter((item)=> !item.isBought || item.isBought);
        } else if(filter === "toBuy"){
            return this.items.filter((item)=> !item.isBought);
        } else{
            return this.items.filter((item)=> item.isBought);
        }
    };

    clearBought(): void{
        this.items = this.items.filter((item)=> !item.isBought);
    }
}
export default ShoppingList; 
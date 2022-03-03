import Buyable from '../domain/Buyable';
import CartItem from './CartItem';

export default class Cart {
    private _items: CartItem[] = [];

    add(item: Buyable): void {
        if('stackable' in item) {
            const findItem = this._items.find(cartItem => cartItem.product.id === item!.id);
            if(findItem) {
                findItem.count += 1;
            } else {
                this._items.push(new CartItem(1, item));
            }
        } else {
            this._items.push(new CartItem(1, item));
        }
    }

    get items(): CartItem[] {
        return [...this._items]; 
    }

    calculateAmount(): number {
        let amount = 0;
        this._items.forEach(element => {
            if ('stackable' in element.product) {
                amount += (element.product!.price * element.count);
            } else {
                amount += element.product.price;
            }            
        });
        return amount;
    }

    calculateAmountWithDiscount(discount: number): number {
        return this.calculateAmount() * (100 - discount) * 0.01; 
    }

    deleteItem(id: number): void {
        this._items.forEach(element => {
            if (element.product.id === id) {
                element.count > 1 ? element.count-- : this._items.splice(this._items.indexOf(element), 1);   
            }
        });
    }
}



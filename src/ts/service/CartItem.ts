import Buyable from '../domain/Buyable';

export default class CartItem {
    public count: number;
    public product: Buyable;
    constructor(count: number, product: Buyable) {
        this.count = count,
        this.product = product
    }
}
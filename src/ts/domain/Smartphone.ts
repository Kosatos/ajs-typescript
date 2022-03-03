import Buyable from './Buyable';

export default class Smartphone implements Buyable {
    constructor(
        readonly id: number,
        readonly price: number,
        readonly name: string,
        readonly model: string,
        readonly stackable: boolean
    ) { }
}
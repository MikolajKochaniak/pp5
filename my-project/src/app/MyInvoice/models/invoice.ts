import { Tax } from "./tax"
import { Unit } from "./unit"
class Invoice{
    constructor(){}

    name: string ="";
    quantity: number= 0;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}
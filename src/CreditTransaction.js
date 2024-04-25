import Transaction from "./Transaction.js";

export default class CreditTransaction extends Transaction{
    constructor(date, value) {
        super(date, value)
    }

}
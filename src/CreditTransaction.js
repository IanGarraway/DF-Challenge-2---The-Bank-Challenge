import Transaction from "./Transaction.js";

export default class CreditTransaction extends Transaction{
    constructor(date, value) {
        //Transaction's constructors properties are date, value, credit, debit
        //I'd have preferred to have made them protected, but this should work
        super(date, value, value, " ");

        
        
    }

}
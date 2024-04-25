export default class Transaction{
    #value;
    #credit;
    
    
    
    constructor(date, value, credit, debit){
        if (new.target === Transaction) throw new TypeError("Cannot construct abstract instances directly");
        this.#value = value;
        this.#credit = credit;
    
    }

    getValue() {
        return this.#value;
    }
    getCredit() {
        return this.#credit;
    }
    getDebit() { return ""; }

    getDate() {
        return "25/04/2024";
    }
}
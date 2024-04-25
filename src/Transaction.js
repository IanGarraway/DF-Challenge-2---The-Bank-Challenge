export default class Transaction{
    #value;
    #credit;
    #date;
    
    
    
    constructor(date, value, credit, debit){
        if (new.target === Transaction) throw new TypeError("Cannot construct abstract instances directly");
        this.#value = value;
        this.#credit = credit;
        this.#date = date;
    
    }

    getValue() {
        return this.#value;
    }
    getCredit() {
        return this.#credit;
    }
    getDebit() { return ""; }

    getDate() {
        return this.#date;
    }
}
export default class Transaction{
    #value;
    
    
    
    constructor(date, value){
        if (new.target === Transaction) throw new TypeError("Cannot construct abstract instances directly");
        this.#value = value;
    
    }

    getValue() {
        return this.#value;
    }
}
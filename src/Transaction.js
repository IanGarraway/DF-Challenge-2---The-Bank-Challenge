export default class Transaction{
    constructor(){
    if (new.target === Transaction) throw new TypeError("Cannot construct abstract instances directly");
    
    }
}
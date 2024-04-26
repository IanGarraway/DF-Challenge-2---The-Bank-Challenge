export default class Account {
    //properties
    #transactions = [];
    #balance = 0;

    //constructor

    //methods
    getBalance() { return this.#balance; }
    getTransactions() { return this.#transactions; }
    
    addTransaction(newTransaction) { 
        this.#balance += newTransaction.getValue();
        
    }



}
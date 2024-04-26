export default class Account {
    //properties
    #transactions = [];
    #balance = 0;

    //constructor

    //methods
    getBalance() { return this.#balance; }
    getTransactions() { return this.#transactions; }
    
    addTransaction(newTransaction) {
        
        if (this.#balance < (newTransaction.getValue() * -1)) return `insufficient balance`;
        this.#balance += newTransaction.getValue();
        this.#transactions.push([newTransaction, this.#balance]);
        return `transaction complete`;
    }



}
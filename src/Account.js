export default class Account {
    //properties
    #transactions = [];
    #balance = 0;
    #overdraft = false;
    #overdraftAmount = 0;

    //constructor

    //methods
    getBalance() { return this.#balance; }
    getTransactions() { return this.#transactions; }
    
    getOverdraft() { return this.#overdraft; }
    setOverdraft(overdraft) { this.#overdraft = overdraft; }
    
    getOverdraftAmount() { return this.#overdraftAmount; }
    setOverdraftAmount(overdraftAmount) { this.#overdraftAmount = overdraftAmount; }
    
    addTransaction(newTransaction) {
        
        if (this.#balance < (newTransaction.getValue() * -1)) return `insufficient balance`;
        this.#balance += newTransaction.getValue();
        this.#transactions.push([newTransaction, this.#balance]);
        return `transaction complete`;
    }



}
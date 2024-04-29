import CreditTransaction from "./CreditTransaction.js";
import DebitTransaction from "./DebitTransaction.js";
import Account from "./Account.js";
import Printer from "./Printer.js";

function loadAccount() {
    //method for loading the account information from the database
    //for demonstration purposes though this just creates a new account.

    return new Account();
}


let theAccount = loadAccount();

//adding transactions

theAccount.addTransaction(new CreditTransaction("10/01/2012", 1000));
theAccount.addTransaction(new CreditTransaction("13/01/2012", 2000));
theAccount.addTransaction(new DebitTransaction("14/01/2012", 500));

//requesting the bank statement
Printer.printStatement(theAccount.getTransactions());




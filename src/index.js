import CreditTransaction from "./CreditTransaction.js";
import DebitTransaction from "./DebitTransaction.js";
import Account from "./Account.js";
import Printer from "./Printer.js";

function loadAccount() {
    //method for loading the account information from the database
    //for demonstration purposes though this just creates a new account.

    return new Account();
}

function separators() {
    console.log();
    console.log("-");
    console.log();
}

function statementBlock() {
    console.log("Statement: ");
    console.log();
}


let theAccount = loadAccount();

//adding transactions
//credit 1000
console.log("Client makes a deposit of 1000 on 10-01-2012");
theAccount.addTransaction(new CreditTransaction("10/01/2012", 1000));
statementBlock();
Printer.printStatement(theAccount.getTransactions());
separators();

//credit 2000
console.log("Client makes a deposit of 2000 on 13-01-2012");
theAccount.addTransaction(new CreditTransaction("13/01/2012", 2000));
statementBlock();

Printer.printStatement(theAccount.getTransactions());
separators();

//debit 500
console.log("Client makes a withdrawal of 500 on 14-01-2012");
theAccount.addTransaction(new DebitTransaction("14/01/2012", 500));

statementBlock();
//requesting the bank statement that meets the acceptance criteria
Printer.printStatement(theAccount.getTransactions());

separators();
console.log("Client attempts to withdraw 3000 on the 16-01-2012");
const result = theAccount.addTransaction(new DebitTransaction("16/01/2012", 3000));

console.log(`And was informed: ${result}`);
console.log("After speaking to a bank manager, they requested an overdraft of 1000, it was granted");
theAccount.setOverdraft(true);
theAccount.setOverdraftAmount(1000);
console.log("So the next day they tried to withdraw the money again");
theAccount.addTransaction(new DebitTransaction("17/01/2012", 3000))

statementBlock();
Printer.printStatement(theAccount.getTransactions());




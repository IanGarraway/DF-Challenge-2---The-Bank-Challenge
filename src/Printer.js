import chalk from 'chalk';

export default class Printer{

    

    constructor() {
        if (new.target === Printer)
            throw new Error("Cannot create instance of abstract class");
    }

    static convertNumber(num) {
        if (typeof num === 'number') {
            return num.toFixed(2).toString();
        }
        return num;
    
    }

    

    static craftLine(lineData, creditPadding = 7, debitPadding = 6) {

        //const padding = 8;
                
        const creditNumber = this.convertNumber(lineData[0].getCredit());
        const debitNumber = this.convertNumber(lineData[0].getDebit());

        let balanceLine = chalk.green(lineData[1].toFixed(2));
        if(lineData[1]<0){balanceLine = chalk.red(lineData[1].toFixed(2))}

        return lineData[0].getDate() + " || " + chalk.green(creditNumber.padStart(creditPadding, " ")) + " || " + chalk.red(debitNumber.padStart(debitPadding, ` `)) + " || " + balanceLine;
    }

    static headerString(creditPadding = 7, debitPadding = 6) {
        return "date       || "+"credit".padEnd(creditPadding, " ")+" || "+"debit".padEnd(debitPadding, " ")+" || balance"
    }

    static getPaddingNumbers(transactions) {
        let creditPadding = 6;
        let debitPadding = 6;

        for (let i = 0; i < transactions.length; i++){
            if (transactions[i][0].getCredit().toString().length+3 > creditPadding) { creditPadding = transactions[i][0].getCredit().toString().length+3; }
            if (transactions[i][0].getDebit().toString().length+3 > debitPadding) { debitPadding = transactions[i][0].getDebit().toString().length+3; }

        }
        return { credit: creditPadding, debit: debitPadding, };
    }

    static printStatement(transactions) {

        let paddingNumbers = this.getPaddingNumbers(transactions);
        console.log(this.headerString(paddingNumbers.credit, paddingNumbers.debit));
        for (let i = transactions.length-1; i >= 0; i--){
            console.log(this.craftLine(transactions[i], paddingNumbers.credit, paddingNumbers.debit));
        }
    }
}
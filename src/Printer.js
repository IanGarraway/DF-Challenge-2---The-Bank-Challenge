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

    static craftLine(lineData) {

        const padding = 8;
                
        const creditNumber = this.convertNumber(lineData[0].getCredit());
        const debitNumber = this.convertNumber(lineData[0].getDebit());

       return lineData[0].getDate() + " || "+ creditNumber.padStart(padding, " ")+ " || "+ debitNumber.padStart(padding, ` `)+ " || "+ lineData[1].toFixed(2)
    }

    static headerString() {
        return "date       || credit  || debit  || balance"
    }
}
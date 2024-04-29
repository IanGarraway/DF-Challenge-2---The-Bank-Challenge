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
        //converts the values into strings with 2dp
        
        const creditNumber = this.convertNumber(lineData[0].getCredit());
        const debitNumber = this.convertNumber(lineData[0].getDebit());

        //calculates the amount of padding which will be needed
        /*
        const creditPadding = 9 - creditNumber.length;
        const debitPadding = 8 - debitNumber.length; 
        
        console.log(`credit padding: ${creditPadding}, creditNumber length: ${creditNumber.length}`);
        console.log(`debit padding: ${debitPadding}, debitNumber length: ${debitNumber.length}`);

        */

       return lineData[0].getDate() + " || "+ creditNumber.padStart(padding, " ")+ " || "+ debitNumber.padStart(padding, ` `)+ " || "+ lineData[1].toFixed(2)

        //return line;
    }
}
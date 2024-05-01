import chalk from "chalk";
import Printer from "../src/Printer.js"
import CreditTransaction from "../src/CreditTransaction.js";

describe("Printer function tests: ", () => {
    it("Should return a string matching a credit line from the bank statement", ()=> {
        
        // Arrange
        const mockedTransaction = jasmine.createSpyObj('CreditTransaction', {
            'getValue': 1500.00,
            'getDebit': " ",
            'getCredit': 1500.00,
            'getDate': '25/04/2024'
        });

        //const mockedTransaction = new CreditTransaction(25/4/2024, 1500)

        

        const mockTransactionLine = [mockedTransaction, 1500];
            
        // Act
        // Assert
        expect(Printer.craftLine(mockTransactionLine)).toBe("25/04/2024 || " + chalk.green("1500.00") + " || " + chalk.red("      ") + " || " + chalk.green("1500.00"))

    });

    it("Should return a string matching a debit line from the bank statement", ()=> {
        
        // Arrange
        const mockedTransaction = jasmine.createSpyObj('CreditTransaction', {
            'getValue': -1500.00,
            'getDebit': 1500.00,
            'getCredit': " ",
            'getDate': '25/04/2024'
        });

        //const mockedTransaction = new CreditTransaction(25/4/2024, 1500)

        

        const mockTransactionLine = [mockedTransaction, 1500];
            
        // Act
        // Assert
        expect(Printer.craftLine(mockTransactionLine)).toBe("25/04/2024 || "+chalk.green("       ")+" || "+ chalk.red("1500.00") + " || " + chalk.green("1500.00"))

    });

    it("Should return a string matching the collumn headers for statement", () => {
        //Arrange
        //Act
        //Assert 
        expect(Printer.headerString()).toBe("date       || credit  || debit  || balance")
        
    });
    
});
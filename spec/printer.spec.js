import Printer from "../src/Printer.js"
import CreditTransaction from "../src/CreditTransaction.js";

describe("Printer function tests: ", () => {
    it("Should return a string matching a line from the bank statement", ()=> {
        
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
        expect(Printer.craftLine(mockTransactionLine)).toBe("25/04/2024 || 1500.00 ||        || 1500.00")

    });

    it("Should return a string matching the collumn headers for statement", () => {
        //Arrange
        //Act
        //Assert 
        expect(Printer.headerString()).toBe("date       || credit  || debit  || balance")
        
    });
    
});
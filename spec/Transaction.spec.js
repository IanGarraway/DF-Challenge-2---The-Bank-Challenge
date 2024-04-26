import Transaction from "../src/Transaction.js";
import CreditTransaction from "../src/CreditTransaction.js";
import DebitTransaction from "../src/DebitTransaction.js";

describe("Transaction Tests:", () => {

    it("should not allow you to create a new transaction", () => {
        //Arrange        
        //Act
        try {
            const test = new Transaction();
        } catch (error){
        //Assert
        expect(error).toEqual(TypeError("Cannot construct abstract instances directly"));
        }
        
    });
    
    describe("CreditTransaction Tests:", () => {        

        it("Should allow you to create an instance of Credit Transaction", () => {
            //Arrange
            //Act
            const testTransaction = new CreditTransaction();
            //Assert
            expect(testTransaction).toBeInstanceOf(CreditTransaction);
        });

        it("Should return a positive value when you call getValue", () => {
            //Arrange
            const testTransaction = new CreditTransaction("25/04/2024", 500);
            //Act
            const actual = testTransaction.getValue();
            //Assert
            expect(actual).toEqual(500);
        });

        it("Should return a different positive value when you call getValue", () => {
            //Arrange
            const testTransaction = new CreditTransaction("25/04/2024", 750);
            //Act
            const actual = testTransaction.getValue();
            //Assert
            expect(actual).toEqual(750);
        });

        it("Should return a positive value when getCredit is called", () => {
            //Arrange
            const testTransaction = new CreditTransaction("25/04/2024", 500);
            //Act
            const actual = testTransaction.getCredit();
            //Assert
            expect(actual).toEqual(500);
        });

        it("Should return a different positive value when getCredit is called", () => {
            //Arrange
            const testTransaction = new CreditTransaction("25/04/2024", 750);
            //Act
            const actual = testTransaction.getCredit();
            //Assert
            expect(actual).toEqual(750);
        });

        it("Should return an empty string value when getDebit is called", () => {
            //Arrange
            const testTransaction = new CreditTransaction("25/04/2024", 750);
            //Act
            const actual = testTransaction.getDebit();
            //Assert
            expect(actual).toEqual(" ");
        });

        it("Should return the date when getDate is called", () => {
            //Arrange
            const testTransaction = new CreditTransaction("25/04/2024", 750);
            //Act
            const actual = testTransaction.getDate();
            //Assert
            expect(actual).toEqual("25/04/2024");
        });
        it("Should return a different date when getDate is called", () => {
            //Arrange
            const testTransaction = new CreditTransaction("24/04/2024", 750);
            //Act
            const actual = testTransaction.getDate();
            //Assert
            expect(actual).toEqual("24/04/2024");
        });
        
    }); // end of Credit transaction tests

    describe("DebitTransaction Tests:", () => {
        it("Should allow you to create an instance of Debit Transaction", () => {
            //Arrange
            //Act
            const testTransaction = new DebitTransaction();
            //Assert
            expect(testTransaction).toBeInstanceOf(DebitTransaction);
        });

        it("Should return a negative value when you call getValue", () => {
            //Arrange
            const testTransaction = new DebitTransaction("25/04/2024", 500);
            //Act
            const actual = testTransaction.getValue();
            //Assert
            expect(actual).toEqual(-500);
        });

        it("Should return a different negative value when you call getValue", () => {
            //Arrange
            const testTransaction = new DebitTransaction("25/04/2024", 750);
            //Act
            const actual = testTransaction.getValue();
            //Assert
            expect(actual).toEqual(-750);
        });

        it("Should return a positive value when getDebit is called", () => {
            //Arrange
            const testTransaction = new DebitTransaction("25/04/2024", 500);
            //Act
            const actual = testTransaction.getDebit();
            //Assert
            expect(actual).toEqual(500);
        });

        it("Should return a different positive value when getDebit is called", () => {
            //Arrange
            const testTransaction = new DebitTransaction("25/04/2024", 750);
            //Act
            const actual = testTransaction.getDebit();
            //Assert
            expect(actual).toEqual(750);
        });

        
    }); // end of Debit transaction tests
    


});

import Account from "../src/Account.js"
import CreditTransaction from "../src/CreditTransaction.js";

describe("Account Class tests: ", () => {
    let testAccount;

    beforeEach(() => {
        testAccount = new Account();
    });

    afterEach(() => {
        testAccount = undefined;
    });
    it("Should return the value of balance", () => {
        //Arrange

        testAccount = new Account();
        //Act
        //Assert
        expect(testAccount.getBalance()).toBe(0);

        
    });

    it("should return a list", () => {
        //Arrange

        //act

        //Assert
        expect(testAccount.getTransactions()).toEqual([]);

    });

    it("should return a increase in the balance", () => {
        //Arrange
        const mockedTransaction = jasmine.createSpyObj('CreditTransaction', {
            'getValue': 500,
            'getDebit': "",
            'getCredit': 500,
            'getDate': '25/4/2024'
        });
                
       
        //act
        testAccount.addTransaction(mockedTransaction);

        //Assert
        expect(testAccount.getBalance()).toBe(500);

    });

    it("should return a increase in the array", () => {
        //Arrange
        const mockedTransaction = jasmine.createSpyObj('CreditTransaction', {
            'getValue': 500,
            'getDebit': "",
            'getCredit': 500,
            'getDate': '25/4/2024'
        });
                
       
        //act
        testAccount.addTransaction(mockedTransaction);

        //Assert
        expect(testAccount.getTransactions().length).toBe(1);

    });

    it("should return a increase in the balance when multiple transactions are added", () => {
        //Arrange
        const mockedTransaction1 = jasmine.createSpyObj('CreditTransaction', {
            'getValue': 500,
            'getDebit': "",
            'getCredit': 500,
            'getDate': '25/4/2024'
        });
        const mockedTransaction2 = jasmine.createSpyObj('CreditTransaction', {
            'getValue': 1000,
            'getDebit': "",
            'getCredit': 1000,
            'getDate': '25/4/2024'
        });
                
       
        //act
        testAccount.addTransaction(mockedTransaction1);
        testAccount.addTransaction(mockedTransaction2);

        //Assert
        expect(testAccount.getBalance()).toBe(1500);

    });
    
});
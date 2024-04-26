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
    
});
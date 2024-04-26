import Account from "../src/Account.js"

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
    
});
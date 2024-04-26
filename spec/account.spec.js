import Account from "../src/Account.js"

describe("Account Class tests: ", () => {
    it("Should return the value of balance", () => {
        //Arrange

        const testAccount = new Account();
        //Act
        //Assert
        expect(testAccount.getBalance()).toBe(0);

        
    });
    
});
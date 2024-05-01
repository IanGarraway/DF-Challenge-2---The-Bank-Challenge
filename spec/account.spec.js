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

    it("should return a increase in the array length when multiple transactions are added", () => {
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
        expect(testAccount.getTransactions().length).toBe(2);

    });

    it("should return an array of arrays with the balance in [1][1] matching the balance of the account", () => {
        //this test also confirms the getTransaction method is also returning the float
        
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
        expect(testAccount.getTransactions()[1][1]).toBe(testAccount.getBalance());
        
    });
    
    it("should return a reduced balance when a debit transaction has been added", () => {
        //Arrange
        const mockedTransaction1 = jasmine.createSpyObj('CreditTransaction', {
            'getValue': 1500,
            'getDebit': "",
            'getCredit': 1500,
            'getDate': '25/4/2024'
        });
        const mockedTransaction2 = jasmine.createSpyObj('DebitTransaction', {
            'getValue': -500,
            'getDebit': 500,
            'getCredit': "",
            'getDate': '25/4/2024'
        });                
       
        //act
        testAccount.addTransaction(mockedTransaction1);
        testAccount.addTransaction(mockedTransaction2);

        //Assert
        expect(testAccount.getBalance()).toBe(1000);
    })

    it("should return a the correct length of transactions when a debit transaction is added", () => {
        //Arrange
        const mockedTransaction1 = jasmine.createSpyObj('CreditTransaction', {
            'getValue': 1500,
            'getDebit': "",
            'getCredit': 1500,
            'getDate': '25/4/2024'
        });
        const mockedTransaction2 = jasmine.createSpyObj('DebitTransaction', {
            'getValue': -500,
            'getDebit': 500,
            'getCredit': "",
            'getDate': '25/4/2024'
        });                
       
        //act
        testAccount.addTransaction(mockedTransaction1);
        testAccount.addTransaction(mockedTransaction2);

        //Assert
        expect(testAccount.getTransactions().length).toBe(2);
    })

    it("should return a message indicating insufficient balance if the debit transaction is greater than the available balance: ", () => {
        //Arrange
        const mockedTransaction1 = jasmine.createSpyObj('CreditTransaction', {
            'getValue': 500,
            'getDebit': "",
            'getCredit': 500,
            'getDate': '25/4/2024'
        });
                      
       
        //act
        
        let actual = testAccount.addTransaction(mockedTransaction1);

        //Assert
        expect(actual).toBe(`transaction complete`);
    });

    describe("Overdraft facility tests: ", () => {

        it("should return false on getting the overdraft status on a new account", () => {
            //Arrange
            //Act
            //Assert 
            expect(testAccount.getOverdraft()).toBe(false);
        });

        it("should return true on getting the overdraft status after it has been set to true", () => {
            //Arrange
            //Act
            testAccount.setOverdraft(true);
            //Assert 
            expect(testAccount.getOverdraft()).toBe(true);
        });

        it("should return false on getting the overdraft status after it has been set to true and then back to false", () => {
            //Arrange
            //Act
            testAccount.setOverdraft(true);
            testAccount.setOverdraft(false);
            //Assert 
            expect(testAccount.getOverdraft()).toBe(false);
        });

        it("getOverdraftAmount() should return 0 on a new account", () => {
            //arrange
            //act
            //assert
            expect(testAccount.getOverdraftAmount()).toBe(0);
        });

        it("getOverdraftAmount() should return 500 on an account which has been set to 500 overdraft", () => {
            //arrange
            //act
            testAccount.setOverdraftAmount(500);
            //assert
            expect(testAccount.getOverdraftAmount()).toBe(500);
        });

        it("return an insufficient balance message if trying to go negative with no overdraft", () => {
            //Arrange
            const mockedTransaction = jasmine.createSpyObj('DebitTransaction', {
                'getValue': -500,
                'getDebit': 500,
                'getCredit': "",
                'getDate': '25/4/2024'
            });  
            //Act
            //Assert
            expect(testAccount.addTransaction(mockedTransaction)).toBe("insufficient balance")
        });
        it("returns transaction complete message after a debit transaction with a sufficient overdraft", () => {
            //Arrange
            const mockedTransaction = jasmine.createSpyObj('DebitTransaction', {
                'getValue': -500,
                'getDebit': 500,
                'getCredit': "",
                'getDate': '25/4/2024'
            });  
            //Act
            testAccount.setOverdraft(true);
            testAccount.setOverdraftAmount(1000);
            //Assert
            expect(testAccount.addTransaction(mockedTransaction)).toBe("transaction complete")
        });

        it("confirming balance now negative after a debit transaction with a sufficient overdraft", () => {
            //Arrange
            const mockedTransaction = jasmine.createSpyObj('DebitTransaction', {
                'getValue': -500,
                'getDebit': 500,
                'getCredit': "",
                'getDate': '25/4/2024'
            });  
            //Act
            testAccount.setOverdraft(true);
            testAccount.setOverdraftAmount(1000);
            testAccount.addTransaction(mockedTransaction);
            //Assert
            expect(testAccount.getBalance()).toBe(-500)
        });
    });
});
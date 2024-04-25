# Domain Models and Test Plan

## Kanban Board

![kanban board](kanbanboard.png)

Link: <https://miro.com/app/board/uXjVKPl7MHQ=/?share_link_id=676272517211>

## Transaction Class

### User Story 1

As a bank, I want to store a transaction which consists of the date of the transaction, if its a debit or credit, how much the transaction is for, so when the information is displayed it is displayed correctly

### Domain Model 1

| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| transaction| - #value <br> - #debit <br> - #credit <br> - #date | - getValue() <br> - getDate() <br>- getCredit() <br> - getDebit() | - @float <br> - @date <br> - @float <br> - @float |

### tests 1

- [x] creditTransaction should instantiate
- [x] getValue should return a positive value for a credit transaction
- [x] getValue should return a different positive value for a credit transaction
- [x] getCredit should return a positive value for a credit transaction
- [x] getCredit should return a different positive value for a credit transaction
- [x] getDebit should return a blank string for a credit transaction
- [x] getDate should return a date for a credit transaction
- [x] getDate should return a different date for a credit transaction
- [ ] debitTransaction should instantiate
- [ ] getValue should return a negative value for a debit transaction
- [ ] getValue should return a different negative value for a debit transaction
- [ ] getDebit should return a positive value for a debit transaction
- [ ] getDebit should return a different positive value for a debit transaction
- [ ] getCredit should return a blank field for a debit transaction
- [ ] getDate should return a date for a debit transaction
- [ ] getDate should return a different date for a debit transaction

## Account Class

### User Story 2

As a customer I want to be able to see the balance of my account, so I know how much money I have

### Domain Model 2

| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| account | - #balance @float | - getBalance() | - @float |

### tests 2

- [ ] getBalance should return the balance of the account

### User Story 3

As a customer, I want to be able to see the what transactions my account has had, so I can review the activity of my account

### Domain Model 3

| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| account | - #transactions {@Transaction[], @float} | - getTransactions() | - {@transaction,@float}[] |

### Tests 3

- [ ] getTransactions returns a list which consists of a transaction and a float.
  
### User Story 4

As a Customer, I should be able to deposit money into my account, so I can keep my money safe

### Domain Model 4

| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| account | - #transactions {@Transaction[], @float} | - addCredit(@transaction) | - void |

### Tests 4

- [ ] getBalance() should return an increased balance when a credit transaction is added
- [ ] getTransactions() should return an array one larger than before the transaction was added

### User Story 5
As a Customer, I should be able to withdraw my money from my account, so I can then use it as I desire

### Domain Model 5
| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| account | - #transactions {@Transaction[], @float} | - addDebit(@transaction) | - void |

### Tests 5

- [ ] getBalance should return a decreased balance when a debit transaction is added
- [ ] getTransactions should return an array one larger than before the transaction was added

### User Story 6

As a customer, I want the bank statement to match the template, so it is consistent with the banks present system

### Domain model 6

| Objects    | Properties     | Messages    | Output  |
| ---------- | -------------- | ----------- | ------- |
| StatementWriter | -  | - printTransactions({@Transaction[], @float}[]) | - void |

### Tests 6

- [ ] printTransaction takes the list of transactions and outputs them in the same format as required

## UML class diagram

![Class diagram](UMLclassdiagram.png)

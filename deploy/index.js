class BankAccount {
    constructor(accountHolderName, accountType, balance = 0) {
        this.accountHolderName = accountHolderName;
        this.accountType = accountType;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
        return this.balance;
    }

    checkBalance() {
        return this.balance;
    }
}

let account = new BankAccount('John Doe', 'Savings', 1000);

document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let action = document.getElementById('action').value;
    let amount = Number(document.getElementById('amount').value);
    let result;
    try {
        switch(action) {
            case 'deposit':
                result = account.deposit(amount);
                break;
            case 'withdraw':
                result = account.withdraw(amount);
                break;
            case 'checkBalance':
                result = account.checkBalance();
                break;
            default:
                throw new Error('Invalid action');
        }
        document.getElementById('result').textContent = 'Result: ' + result;
    } catch (error) {
        document.getElementById('result').textContent = 'Error: ' + error.message;
    }
});

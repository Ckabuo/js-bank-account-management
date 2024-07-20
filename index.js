// Define a class called BankAccount
class BankAccount {
    // Constructor function to initialize the account holder name, account type, and balance
    constructor(accountHolderName, accountType, balance = 0) {
        this.accountHolderName = accountHolderName;
        this.accountType = accountType;
        this.balance = balance;
    }

    // Method to deposit an amount into the account
    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    // Method to withdraw an amount from the account
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
        return this.balance;
    }

    // Method to check the current balance of the account
    checkBalance() {
        return this.balance;
    }
}

// Creates a new instance of the BankAccount class with initial values
let account = new BankAccount('John Doe', 'Savings', 1000);

// Adds an event listener to the bankForm element for form submission
document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get the selected action and amount from the form inputs
    let action = document.getElementById('action').value;
    let amount = Number(document.getElementById('amount').value);
    let result;
    //try-catch statement to handle potential errors
    try {
        // switch statement to perform the selected action on the account
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
        // Display the result of the action in the result element
        document.getElementById('result').textContent = 'Result: ' + result;
    } catch (error) {
        // Display any errors that occur during the action in the result element
        document.getElementById('result').textContent = 'Error: ' + error.message;
    }
});

/*

    Assignment: Expense Management System
    Student Name: Shayne McNeil
    Student ID: S0454809
    Date: April 3, 2025
    
    Assignment Description:

    You are working on a Personal Finance Management System that allows users to track expenses, income, and savings. This assignment will serve as a foundation for your final project, where you will expand upon this system by adding more functionalities.

    DISCLAIMER: ChatGPT was used for debugging and generating of regular expressions. All other code was written manually by the developer

*/

// Create transaction class

class Transaction {
    constructor(amount, category, type, date) {
        this.amount = parseFloat(amount); // Floating point number
        this.category = category; // String
        this.type = type; // Either income or expense
        this.date = date; // Formatted user date string format YYY-MM-DD
    }
}

// Create budget tracker class

class BudgetTracker {

    constructor() {
        this.transactions = []; // Array of transactions
    }

    // METHODS

    // Method to add transaction

    addTransaction(amount, category, type, date) {
        let transaction = new Transaction(amount, category, type, date);
        this.transactions.push(transaction);
    }

    // Method to calculate total income

    getTotalIncome() {
        let totalIncome = 0;

        for(let transaction of this.transactions) {
            if(transaction.type === "income") {
                totalIncome += transaction.amount;
            }
        }

        return totalIncome;
    }

    // Method to calculate total expenses

    getTotalExpenses() {
        let totalExpense = 0;

        for(let transaction of this.transactions) {
            if(transaction.type === "expense") {
                totalExpense += transaction.amount;
            }
        }

        return totalExpense;
    }

    // Method to get total balance

    getBalance() {
        let balance = this.getTotalIncome() - this.getTotalExpenses();

        return balance;
    }

    // Method to list all transactions

    getAllTransactions() {
        for(let transaction of this.transactions) {
            console.log(`Transaction date: ${transaction.date}`);
            console.log(`Transaction type: ${transaction.type}`);
            console.log(`Transaction category: ${transaction.category}`);
            console.log(`Transaction amount: $${transaction.amount.toFixed(2)}\n`);
        }
    }
}

// Create instance of new budget tracker class

let userBudget = new BudgetTracker();

// Allow user to add transactions

let state = true;

while(state) {
    // Prompt user to input data 

    let type = prompt("Enter the type of transaction [income/expense]: ");
    let amount = prompt("Enter the amount: ");
    let date = prompt("Enter date of transaction [YYY-MM-DD]: ");
    let category = prompt("Enter transaction category: ");

    // Data validation

    let isValidType = typeof(type) === "string" && ["income", "expense"].includes(type);

    let parsedAmount = parseFloat(amount);
    let isValidAmount = !isNaN(parsedAmount) && parsedAmount >= 0;

    let isValidDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(date);
    let parsedDate = new Date(date);
    let isValidDate = isValidDateFormat && !isNaN(parsedDate.getTime());

    let isValidCategory = typeof(category) === "string";

    if(!isValidType || !isValidAmount || !isValidCategory || !isValidDate) {
        console.log("One or more values entered is invalid. Please read instructions and try again.");
        continue;
    }

    // Add the transaction and prompt user to continue or stop the program 
    
    userBudget.addTransaction(amount, category, type, date);
    console.log("\nYour transaction has been successfully added to the system.");
    let status = prompt("Would you like to add another transaction? Type 0 for NO and 1 for YES: ");
    console.log("");

    switch(status) {
        case "0":
            state = false;
            break;
        case "1":
            break;
    }
}

// Test methods of the budget tracker class and display information appropriately

console.log(`Total income entered: $${userBudget.getTotalIncome().toFixed(2)}`);
console.log(`Total expenses entered: $${userBudget.getTotalExpenses().toFixed(2)}`);
console.log(`Balance: $${userBudget.getBalance().toFixed(2)}\n`);
console.log(`===== List of all transactions =====\n`);
userBudget.getAllTransactions();
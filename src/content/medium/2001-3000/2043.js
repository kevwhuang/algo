// 2043 - Simple Bank System

class Bank {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(account, money) {
        if (account > this.balance.length) return false;
        this.balance[account - 1] += money;
        return true;
    }
    transfer(account1, account2, money) {
        if (account1 > this.balance.length) return false;
        if (account2 > this.balance.length) return false;
        if (this.balance[account1 - 1] < money) return false;
        this.balance[account1 - 1] -= money;
        this.balance[account2 - 1] += money;
        return true;
    }
    withdraw(account, money) {
        if (account > this.balance.length) return false;
        if (this.balance[account - 1] < money) return false;
        this.balance[account - 1] -= money;
        return true;
    }
}

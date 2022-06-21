const addIncome = (account, amount) => {
    return account.income += amount;
}
const addExpense = (account, amount) => {
    return account.expenses += amount;
}
const getAccountSummary = account => {
    return `you have a balance of $${account.income -= account.expenses}`;
}
const resetAccount = account => {
    account.income = 0;
    account.expenses = 0;
    return `Your account information has been reset.`;
}
const account = {
    name: 'Mike',
    income: 0,
    expenses: 0,
};
console.log(addIncome(account, 1000));
console.log(addExpense(account, 500));
console.log(getAccountSummary(account));
console.log(resetAccount(account))
console.log(getAccountSummary(account));

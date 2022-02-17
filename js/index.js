
// claculate-button
document.getElementById('claculate-button').addEventListener('click', function(){
    // income
    const incomeAmount = parseFloat(document.getElementById('income-amount').value);
    // expenses
    const foodExpenses = parseFloat(document.getElementById('food-expenses').value);
    const rentExpenses = parseFloat(document.getElementById('rent-expenses').value);
    const clothesExpenses = parseFloat(document.getElementById('clothes-expenses').value);
    let totalExpenses = parseFloat(document.getElementById('total-expenses').innerText);
    totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('Balance-after-expenses').innerText = incomeAmount - totalExpenses;
});
document.getElementById('save-button').addEventListener('click', function(){
    // console.log('save is working')
    // income
    const incomeAmount = parseFloat(document.getElementById('income-amount').value);
    const percentOfSaving = parseFloat(document.getElementById('percent-of-saving').value);
    const savingAmount = (incomeAmount / 100) * percentOfSaving;
    document.getElementById('saving-amount').innerText = savingAmount;
    const totalExpenses = parseFloat(document.getElementById('total-expenses').innerText);
    document.getElementById('remaining-balance').innerText = incomeAmount - savingAmount - totalExpenses;

})

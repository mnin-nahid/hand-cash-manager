
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
})

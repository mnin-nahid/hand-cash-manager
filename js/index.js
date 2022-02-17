// error handle start
const showErrorMessage = document.getElementById('show-error');
showErrorMessage.style.display = 'none'
function showError(errorInput){
    document.getElementById('show-error').innerText = errorInput;
    showErrorMessage.style.display = 'block';  
};
// error handle start

// claculate-button start
document.getElementById('claculate-button').addEventListener('click', function(){
    // income
    const incomeAmount = parseFloat(document.getElementById('income-amount').value);
    // expenses
    const foodExpenses = parseFloat(document.getElementById('food-expenses').value);
    const rentExpenses = parseFloat(document.getElementById('rent-expenses').value);
    const clothesExpenses = parseFloat(document.getElementById('clothes-expenses').value);
    let totalExpenses = parseFloat(document.getElementById('total-expenses').innerText);
    totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    
    if(isNaN(totalExpenses)){
        const errorInInput = "Enter correct value"
        showError(errorInInput);
    }
    else{
        showErrorMessage.style.display = 'none';
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('Balance-after-expenses').innerText = incomeAmount - totalExpenses;
    }
});
// claculate-button end

// save button hendle start
document.getElementById('save-button').addEventListener('click', function(){
    const incomeAmount = parseFloat(document.getElementById('income-amount').value);
    const percentOfSaving = parseFloat(document.getElementById('percent-of-saving').value);
    if(percentOfSaving <=0 || isNaN(percentOfSaving)){
        const invalidPercent = 'Enter valid number in percent'
        showError(invalidPercent);
    }
    else{
        showErrorMessage.style.display = 'none';
        const savingAmount = (incomeAmount / 100) * percentOfSaving;
    
        const totalExpenses = parseFloat(document.getElementById('total-expenses').innerText);
        const remainingBalance = incomeAmount - savingAmount - totalExpenses;
        if(remainingBalance <= 0 || isNaN(remainingBalance)){
            const balanceAlert = "You have insufficient balance"
            showError(balanceAlert);
        }
        else{
            document.getElementById('saving-amount').innerText = savingAmount;
            document.getElementById('remaining-balance').innerText = remainingBalance;
        }
    }
})
// save button hendle start

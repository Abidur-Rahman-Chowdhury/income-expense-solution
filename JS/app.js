// function for get value 

function getValue(id) {
    const value = parseFloat(document.getElementById(id).value);
   
    return value;
}


// function for get display element 

function getShowElement(id) {
    const showElement = document.getElementById(id);
    return showElement;
}

// handel calculate button event

document.getElementById('cal-btn').addEventListener('click', function () {
    // get value 
    const income =getValue('income-value');
    const food = getValue('food-value');
    const rent = getValue('rent-value');
    const clothes = getValue('clothes-value');
    // get display element
    const showExpense = getShowElement('total-expense');
    const showBalance = getShowElement('balance');

    // validation for string 
    if (isNaN(income) || isNaN(food) || isNaN(rent)|| isNaN(clothes)) {
        alert('Please Enter number value');

    }
    //  validation for negative number 
    else if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        alert('Please enter positive value');
    }
        // main calculation is here
    else {
        const expense = food + rent + clothes;
        console.log(expense);
        
        if (expense > income) {
            alert('Opps!! your expense is more than your income')
        }
        else {
            showExpense.innerText = expense;
            showBalance.innerText = income - expense;
        }
    }

    
});

// handel save button event

document.getElementById('save-btn').addEventListener('click', function () {
    // get value 
    
    const totalIncome = getValue('income-value');
    const savePercent = getValue('save-input');
    console.log(savePercent);
    const savingAmount = totalIncome * (savePercent / 100);
    

    // get display element 
    const showSaveAmount = getShowElement('show-saving');
    const showRemainBalance = getShowElement('show-remain-balance');
    const balance = parseFloat(getShowElement('balance').innerText);
    
    // validation for input 
    if (isNaN(savePercent)|| savePercent < 0 ) {
        alert('Sorry your input is not valid');
    }
    // calculation 
    else {
        showSaveAmount.innerText = savingAmount;
        showRemainBalance.innerText = balance - savingAmount;
    }
})
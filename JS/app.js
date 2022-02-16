function getValue(id) {
    const value = parseFloat(document.getElementById(id).value);
   
    return value;
}
document.getElementById('cal-btn').addEventListener('click', function () {
    const income =getValue('income-value');
    const food = getValue('food-value');
    const rent = getValue('rent-value');
    const clothes = getValue('clothes-value');
    

    if (income == 'string' || food == 'string' || rent == 'string' || clothes == 'string') {
        alert('Please Enter number value');

    }
    else if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        alert('Please enter positive value');
    }
    else {
        const expense = food + rent + clothes;
        console.log(expense);
        
        if (expense > income) {
            alert('Opps!! your expense is more than your income')
        } 
    }

    
});
// Function to add an expense
function addExpense(amount, details, category) {
    const expense = {
        amount,
        details,
        category
    };

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Function to display expenses
function displayExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            ${expense.amount} - ${expense.details} - ${expense.category}
            <button class="btn btn-danger btn-sm float-right delete" data-index="${index}">Delete</button>
            <button class="btn btn-primary btn-sm float-right edit" data-index="${index}">Edit</button>
        `;
        expenseList.appendChild(li);
    });
}

// Function to delete an expense
function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Function to edit an expense
function editExpense(index, updatedExpense) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses[index] = updatedExpense;
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Event listener for form submission
document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = document.getElementById('expense-amount').value;
    const details = document.getElementById('expense-details').value;
    const category = document.getElementById('expense-category').value;

    addExpense(amount, details, category);
    displayExpenses();

    // Clear form fields
    document.getElementById('expense-amount').value = '';
    document.getElementById('expense-details').value = '';
    document.getElementById('expense-category').value = '';
});

// Event delegation for delete and edit buttons
document.getElementById('expense-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const index = e.target.getAttribute('data-index');
        deleteExpense(index);
        displayExpenses();
    } else if (e.target.classList.contains('edit')) {
        const index = e.target.getAttribute('data-index');
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        const expense = expenses[index];

        // Ask the user for updated values
        const updatedAmount = parseFloat(prompt('Enter updated amount:', expense.amount));
        const updatedDetails = prompt('Enter updated details:', expense.details);
        const updatedCategory = prompt('Enter updated category:', expense.category);

        const updatedExpense = {
            amount: updatedAmount,
            details: updatedDetails,
            category: updatedCategory
        };

        editExpense(index, updatedExpense);
        displayExpenses();
    }
});

// Initial display of expenses
displayExpenses();

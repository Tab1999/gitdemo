// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItemName = document.getElementById('item').value;

  // Check if local storage is available
  if (typeof(Storage) !== "undefined") {
    // Retrieve existing items from local storage or initialize an empty array
    var items = JSON.parse(localStorage.getItem('items')) || [];

    // Create an object for the new item
    var newItem = {
      name: newItemName
    };

    // Add the new item object to the array
    items.push(newItem);

    // Store the updated array in local storage
    localStorage.setItem('items', JSON.stringify(items));

    // Display the data in the browser's console
    displayLocalStorageData();
  } else {
    // Local storage is not available, handle accordingly
    alert('Local storage is not available in your browser.');
  }

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItemName));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear the input field
  document.getElementById('item').value = '';
}

// Function to display local storage data in the browser's console
function displayLocalStorageData() {
  var storedData = JSON.parse(localStorage.getItem('items'));
  if (storedData) {
   
    console.log(storedData);
  } else {
    console.log("Local storage is empty or not available.");
  }
}

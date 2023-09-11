// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItemName = document.getElementById('item').value;

  
  if (typeof(Storage) !== "undefined") {
    
    var items = JSON.parse(localStorage.getItem('items')) || [];

    
    var newItem = {
      name: newItemName
    };

    
    items.push(newItem);

    
    localStorage.setItem('items', JSON.stringify(items));

   
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

  // Create delete button element
  var deleteBtn = document.createElement('button');

  
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
  deleteBtn.setAttribute('data-item-name', newItemName);

  
  deleteBtn.appendChild(document.createTextNode('X'));

  
  li.appendChild(deleteBtn);

  
  itemList.appendChild(li);

  
  document.getElementById('item').value = '';
}


itemList.addEventListener('click', removeItem);


function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      var itemName = li.textContent.trim(); // Get the item name
      var items = JSON.parse(localStorage.getItem('items')) || [];

      
      items = items.filter(function (item) {
        return item.name !== itemName;
      });

      
      localStorage.setItem('items', JSON.stringify(items));

      
      itemList.removeChild(li);

      
      displayLocalStorageData();
    }
  }
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


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  

 
  if (typeof(Storage) !== "undefined") {
    
    var items = JSON.parse(localStorage.getItem('items')) || [];

  
    var newItem = {
      name: newItem
    };

    // Add the new item object to the array
    items.push(newItem);

    
    localStorage.setItem('items', JSON.stringify(items));
  } else {
   
    alert('Local storage is not available in your browser.');
  }


  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  var editBtn = document.createElement('button');

  // Add classes to edit button
  editBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(editBtn);

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
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}// Add item
// function addItem(e) {
//   e.preventDefault();

  
//   var newItemName = document.getElementById('item').value;

 
//   if (typeof(Storage) !== "undefined") {
    
//     var items = JSON.parse(localStorage.getItem('items')) || [];

  
//     var newItem = {
//       name: newItemName
//     };

//     // Add the new item object to the array
//     items.push(newItem);

    
//     localStorage.setItem('items', JSON.stringify(items));
//   } else {
   
//     alert('Local storage is not available in your browser.');
//   }

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItemName));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);

//   // Clear the input field
//   document.getElementById('item').value = '';
// }

// Add item
function addItem(e) {
  e.preventDefault();

 
  var newItem = document.getElementById('item').value;

 
  if (typeof(Storage) !== "undefined") {
   
    var items = JSON.parse(localStorage.getItem('items')) || [];

   
    items.push(newItem);

    
    localStorage.setItem('items', JSON.stringify(items));
  } else {
   
    alert('Local storage is not available in your browser.');
  }

 
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

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

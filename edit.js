
        var form = document.getElementById('addForm');
        var itemList = document.getElementById('items');
        var filter = document.getElementById('filter');

        // Form submit event
        form.addEventListener('submit', addItem);
        // Delete event
        itemList.addEventListener('click', removeOrEditItem);
        // Filter event
        filter.addEventListener('keyup', filterItems);

        // Add item
        function addItem(e) {
            e.preventDefault();

            
            var newItemName = document.getElementById('item').value;

            
            if (typeof (Storage) !== "undefined") {
               
                var items = JSON.parse(localStorage.getItem('items')) || [];

                
                var newItem = {
                    name: newItemName
                };

                
                items.push(newItem);

                
                localStorage.setItem('items', JSON.stringify(items));

                
                displayLocalStorageData();
            } else {
                
                alert('Local storage is not available in your browser.');
            }

            // Create new li element
            var li = document.createElement('li');
            // Add class
            li.className = 'list-group-item';
            
            li.appendChild(document.createTextNode(newItemName));

          
            var deleteBtn = document.createElement('button');

           
            deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
            
            deleteBtn.setAttribute('data-item-name', newItemName);

            
            deleteBtn.appendChild(document.createTextNode('X'));

           
            var editBtn = document.createElement('button');

            
            editBtn.className = 'btn btn-primary btn-sm float-right edit';

           
            editBtn.appendChild(document.createTextNode('Edit'));

            
            li.appendChild(deleteBtn);
            li.appendChild(editBtn);

            
            itemList.appendChild(li);

            
            document.getElementById('item').value = '';
        }

       
        function removeOrEditItem(e) {
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
            } else if (e.target.classList.contains('edit')) {
               
                alert('Edit button clicked for item: ' + e.target.parentElement.textContent.trim());
            }
        }

        
        function displayLocalStorageData() {
            var storedData = JSON.parse(localStorage.getItem('items'));
            if (storedData) {
               
                console.log(storedData);
            } else {
                console.log("Local storage is empty or not available.");
            }
        }
   

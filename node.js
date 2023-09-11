var headerTitle = document.getElementById("header-title");

  
  var helloText = document.createTextNode("Hello World ");

  
  headerTitle.insertBefore(helloText, headerTitle.firstChild);

  var item1 = document.querySelector("#items li:first-child");


  var helloText = document.createTextNode("Hello World ");

  item1.parentNode.insertBefore(helloText, item1);
// Check if there are any products stored in local storage
if (localStorage.getItem('products') === null) {
    // If not, initialize an empty array
    var products = [];
  } else {
    // If yes, retrieve the products from local storage
    var products = JSON.parse(localStorage.getItem('products'));
  }
  
  // Function to display the products in the table
  function displayProducts() {
    var productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear the existing table content
  
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var row = document.createElement('tr');
  
      // Create and append table cells for each product detail
      var nameCell = document.createElement('td');
      nameCell.textContent = product.name;
      row.appendChild(nameCell);
  
      var categoryCell = document.createElement('td');
      categoryCell.textContent = product.category;
      row.appendChild(categoryCell);
  
      var priceCell = document.createElement('td');
      priceCell.textContent = product.price;
      row.appendChild(priceCell);
  

  
      // Append the row to the product list table
      productList.appendChild(row);
    }
  }
  
  
  
  // Display the products on page load
  displayProducts();
  

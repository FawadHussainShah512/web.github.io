// Retrieve the product form and product list elements
var productForm = document.getElementById("productForm");
var productList = document.getElementById("productList");

// Add event listener to the product form for submitting a new product
productForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the product name and quantity from the form
  var productName = document.getElementById("productName").value;
  var productQuantity = document.getElementById("productQuantity").value;
  var productImage = document.getElementById("productImage").files[0];

  // Create a new product object
  var product = {
    name: productName,
    quantity: productQuantity,
    image: productImage
  };

  // Retrieve the existing products from Local Storage
  var products = JSON.parse(localStorage.getItem("products")) || [];

  // Add the new product to the list
  products.push(product);

  // Store the updated products in Local Storage
  localStorage.setItem("products", JSON.stringify(products));

  // Clear the form fields
  productForm.reset();

  // Update the product list
  displayProducts();

  // Show success message
  showSuccessPopup();
});

// Function to display the products in the product list
function displayProducts() {
  productList.innerHTML = ""; // Clear the product list

  // Retrieve the products from Local Storage
  var products = JSON.parse(localStorage.getItem("products")) || [];

  // Display the products in the list
  products.forEach(function(product, index) {
    var listItem = document.createElement("li");
    listItem.innerHTML =
      "Product: " + product.name + ", Quantity: " + product.quantity +
      '<button class="deleteButton" onclick="deleteProduct(' + index + ')">Delete</button>' +
      '<button class="updateButton" onclick="updateProduct(' + index + ')">Update</button>';
    productList.appendChild(listItem);
  });
}

// Function to delete a product from the product list
function deleteProduct(index) {
  // Retrieve the products from Local Storage
  var products = JSON.parse(localStorage.getItem("products")) || [];

  // Remove the product at the specified index
  products.splice(index, 1);

  // Store the updated products in Local Storage
  localStorage.setItem("products", JSON.stringify(products));

  // Update the product list
  displayProducts();
}

// Function to update a product in the product list
function updateProduct(index) {
  // Retrieve the products from Local Storage
  var products = JSON.parse(localStorage.getItem("products")) || [];

  // Retrieve the product at the specified index
  var product = products[index];

  // Prompt the user to enter the updated quantity
  var updatedQuantity = prompt("Enter the updated quantity for " + product.name + ":");

  // Update the quantity of the product
  if (updatedQuantity !== null) {
    product.quantity = updatedQuantity;

    // Store the updated products in Local Storage
    localStorage.setItem("products", JSON.stringify(products));

    // Update the product list
    displayProducts();
  }
}

// Display the initial products
displayProducts();

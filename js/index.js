// ITERATION 1

function updateSubtotal(product) {
  //alert('Calculating subtotal, yey!');

  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = Number(product.querySelector('.quantity input').value);

  let subTotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subTotal;
  
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  const products = document.getElementsByClassName('product');
  let sumTotal = 0;

  for(let i = 0; i<products.length; i++){
    sumTotal += updateSubtotal(products[i]);
  }
  
  const total = document.querySelector('#total-value span');
  total.innerHTML = sumTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const cell = target.parentNode;
  const row = cell.parentNode;
  const table = row.parentNode;
  
  table.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const footer = document.getElementsByClassName('create-product');
  const inputs = footer[0].querySelectorAll('td input');
  const productName = inputs[0];
  const productPrice = inputs[1];
  
  const table = document.getElementById('cart');
  const tableBody = table.getElementsByTagName('tbody');

  let rowToAdd = '<tr class="product"><td class="name"><span>' + productName.value + '</span></td><td class="price">$<span>' + productPrice.value + '</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td></tr>';

  //let lastAddedRow = tableBody[0].querySelectorAll('tr').length;
  
  tableBody[0].innerHTML += rowToAdd;
  productName.value = '';
  productPrice.value = 0;
  
  addEventListener();
  calculateAll();
}
/*
function createEventListener(row){
  let tableRows = document.querySelectorAll('#cart tbody tr');
  let removeButton = tableRows[row].querySelector('.action .btn-remove');

  removeButton.addEventListener('click',removeProduct);

}*/

function addEventListener(){

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  
  for(let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const addItem = document.getElementById('create');
  addItem.addEventListener('click', createProduct);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  
  for(let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const addItem = document.getElementById('create');
  addItem.addEventListener('click', createProduct);
  //... your code goes here
});

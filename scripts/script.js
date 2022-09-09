function selectAll(){
    var fonzi = document.querySelectorAll('.cozy');
    for (var i = 0; i < fonzi.length; i++) {
      fonzi[i].checked = true;
    }
  }
  
  function addProduct1(n) {
    var quantityField = document.querySelector('#item1Quantity1');
    var priceField = document.querySelector('#item1Price1');
    var quantity = parseInt(quantityField.innerHTML);
  
    quantity += n;
    if (quantity < 0) { quantity = 0; }
  
    quantityField.innerHTML = quantity;
    priceField.innerHTML = quantity * 300;
  }
  
  function addProduct3(n) {
    var quantityField = document.querySelector('#item1Quantity3');
    var priceField = document.querySelector('#item1Price3');
    var quantity = parseInt(quantityField.innerHTML);
  
    quantity += n;
    if (quantity < 0) { quantity = 0; }
  
    quantityField.innerHTML = quantity;
    priceField.innerHTML = quantity * 900;
  }
  
  function addProduct2(n) {
    var quantityField = document.querySelector('#item1Quantity2');
    var priceField = document.querySelector('#item1Price2');
    var quantity = parseInt(quantityField.innerHTML);
  
    quantity += n;
    if (quantity < 0) { quantity = 0; }
  
    quantityField.innerHTML = quantity;
    priceField.innerHTML = quantity * 500;
  }
  
  
  
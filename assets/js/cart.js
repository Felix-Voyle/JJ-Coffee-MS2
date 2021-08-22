//object and properties that are used in addItem
var items = {
  "longblack": {id: "longblack", name: "Long Black", 
  price: 2.7, min: 1, max: 20, qty: 0 },
  "flatwhite": {id: "flatwhite", name: "Flat White",
   price: 2.9,  min: 1, max: 20, qty: 0 },
  "espresso": {id: "espresso", name: "Espresso",
   price: 2.5, min: 1, max: 20, qty: 0 },
  "americano": {id: "americano", name: "Americano", 
  price: 2.7, min: 1, max: 20, qty: 0 },
  "coldbrew": {id: "coldbrew", name: "Cold Brew",
   price: 2.9,  min: 1, max: 20, qty: 0 },
  "icedamericano": {id: "icedamericano", name: "Iced Americano",
   price: 2.9, min: 1, max: 20, qty: 0 },
  "filtercoffee": {id: "filtercoffee", name: "Filter Coffee",
   price: 3,  min: 1, max: 20, qty: 0 },
  "macchiato": {id: "macchiato", name: "Macchiatto",
   price: 2.8, min: 1, max: 20, qty: 0 },
  "cortado": {id: "cortado", name: "Cortado",
   price: 2.8,  min: 1, max: 20, qty: 0 },
  "cappuccino": {id: "cappuccino", name: "Cappuccino", 
  price: 2.9, min: 1, max: 20, qty: 0 },
  "mocha": {id: "mocha", name: "Mocha", 
  price: 3.1,  min: 1, max: 20, qty: 0 },
  "icedlatte": {id: "icedlatte", name: "Iced Latte",
   price: 3,  min: 1, max: 20, qty: 0 },
  "extrashot": {id: "extrashot", name: "Extra Shot",
   price: 0.5,  min: 1, max: 20, qty: 0 },
  "syrup": {id: "syrup", name: "Syrup",
   price: 0.5,  min: 1, max: 20, qty: 0 },
  
  "teapigstea": {id: "teapigstea", name: "Teapigs Tea",
    price: 2, min: 1, max: 10, qty: 0 },
  "matchatea": {id: "matchatea", name: "Matcha Tea",
   price: 3,  min: 1, max: 10, qty: 0 },
  "matchalatte": {id: "matchalatte", name: "Matcha Latte",
   price: 2.8, min: 1, max: 10, qty: 0 },
  "hotchocolate": {id: "hotchocolate", name: "Hot Chocolate",
   price: 3,  min: 1, max: 10, qty: 0 },
  "nutellahotchoc": {id: "nutellahotchoc", name: "Nutella Hot Choc", 
  price: 3.4, min: 1, max: 10, qty: 0 },
  "chailatte": {id: "chailatte", name: "Chai Latte",
   price: 2.9,  min: 1, max: 10, qty: 0 },
  "icedtea": {id: "icedtea", name: "Iced Tea", 
  price: 2.8, min: 1, max: 10, qty: 0 },
  "icedmatcha": {id: "icedmatcha", name: "Iced Matcha", 
  price: 3,  min: 1, max: 10, qty: 0 },
  "strawberrysplit": {id: "strawberrysplit", name: "Strawberry Split",
   price: 4.5, min: 1, max: 10, qty: 0 },
  "musclematcha": {id: "musclematcha", name: "Muscle Matcha",
   price: 4.5,  min: 1, max: 10, qty: 0 },
  
  "bircher": {id: "bircher", name: "Bircher",
  price: 3.5,  min: 1, max: 10, qty: 0 },
  "porridge": {id: "porridge", name: "Porridge", 
  price: 3.5,  min: 1, max: 10, qty: 0 },
  "granola": {id: "granola", name: "Granola Pot",
   price: 3,  min: 1, max: 10, qty: 0 },
  "toast": {id: "toast", name: "Toast & Butter",
   price: 2.5,  min: 1, max: 10, qty: 0 },
  "stuffedcroissant": {id: "stuffedcroissant", name: "Stuffed Croissant",
   price: 4,  min: 1, max: 10, qty: 0 },
  "avocado": {id: "avocado", name: "Avocado toast",
   price: 4.5, min: 1, max: 10, qty: 0 },
  "avopesto": {id: "avopesto", name: "Avocado Pesto",
   price: 5,  min: 1, max: 10, qty: 0 },
  "smokedsalmon": {id: "smokedsalmon", name: "Smoked Salmon",
   price: 5.5,  min: 1, max: 10, qty: 0 },
  "flatbreadone": {id: "flatbreadone", name: "Flatbread One",
   price: 6, min: 1, max: 10, qty: 0 },
  "flatbreadtwo": {id: "flatbreadtwo", name: "Flatbread Two",
   price: 7,  min: 1, max: 10, qty: 0 },
  "saladbox": {id: "saladbox", name: "Salad Box",
   price: 6,  min: 1, max: 10, qty: 0 },
  "feta": {id: "feta", name: "Feta",
   price: 0.5,  min: 1, max: 10, qty: 0 },
  "halloumi": {id: "halloumi", name: "Halloumi",
   price: 1.5,  min: 1, max: 10, qty: 0 },
  "egg": {id: "egg", name: "Egg",
   price: 1, min: 1, max: 10, qty: 0 },
  "salmon": {id: "salmon", name: "Salmon", 
  price: 2,  min: 1, max: 10, qty: 0 }
};

//function to add items to cart
function addItem(key) {
  var cart = document.getElementById("cart");
  var itemElem = document.getElementById(key);
  var item = items[key];
  if (item != null) {
      if (itemElem == null) {
          itemElem = document.createElement('div');
          itemElem.className = ('itemCartRow');
          itemElem.id = key;
          
          this.addElement(itemElem, 'span', 'itemNameCart', item.name);
          this.addElement(itemElem, 'span', 'itemPriceCart', '£' + item.price);
          this.addButton(itemElem, 'button', 'button btnCart qtySectionDec' , "-", () => incItem(key, -1));
          this.addElement(itemElem, 'span', 'qty qtySectionNum text-center', "1");
          this.addButton(itemElem, 'button', 'button btnCart qtySectionInc', "+", () => incItem(key, 1));
          this.addButton(itemElem, 'button', 'button btnCartDel', "Delete", () => deleteItem(key));
          cart.appendChild(itemElem);
          item.qty ++;
          localStorage.setItem(item.id, JSON.stringify(item));
          itemTotal();
          priceTotal();
          return itemElem;
      } 
          var elemQty = itemElem.getElementsByClassName("qty")[0];
          elemQty.innerHTML = Number(elemQty.innerHTML) + 1;
          item.qty ++;
          localStorage.setItem(item.id, JSON.stringify(item));
          itemTotal();
          priceTotal();
      }
  
}

//increases and decreases items quantity in basket
function incItem(key, inc) {
  var item = items[key];
  var itemElem = document.getElementById(key);
  var elemQty = itemElem.getElementsByClassName("qty")[0];
  const value = Number(elemQty.innerHTML) + inc;
  if (value >= item.min && value <= item.max) {
      elemQty.innerHTML = value;
      item.qty = value;
      localStorage.setItem(item.id, JSON.stringify(item));
      itemTotal();
      priceTotal();
  } else if (value < item.min) {
      itemElem.remove();
      item.qty = 0;
      localStorage.removeItem(item.id);
      itemTotal();
      priceTotal();
    }
  }

// function to add Elements
function addElement(parent, myElement, myClass, myContent) {
  var elem = document.createElement(myElement);
  elem.className = myClass;
  elem.innerHTML = myContent;
  parent.appendChild(elem);
  return elem;
}

//function to add button element with event listener
function addButton(parent, myElement, myClass, myTitle, myFunction) {
  var elem = document.createElement(myElement);
  elem.className = myClass;
  elem.innerHTML = myTitle;
  elem.addEventListener("click", myFunction);
  parent.appendChild(elem);
  return elem;
}

//deletes item from cart
function deleteItem(key) {
  var itemElem = document.getElementById(key);
  var item = items[key];
  itemElem.remove();
  item.qty = 0;
  localStorage.removeItem(item.id);
  itemTotal();
  priceTotal();
}

//counts number of items in basket and
function itemTotal() {
  var counter = document.getElementById('itemCounter');
  var emptyCartMsg = document.getElementById('emptyCartMsg');
    var totalItems = [];
      for (let item in items) {
    let itemQty = (items[item].qty);
    totalItems.push(itemQty);
    }
        totalItems = totalItems.reduce(function(a, b){
          return a + b;
      }, 0); 
     if (totalItems >= 1) {
      counter.innerHTML = totalItems;
      counter.style.display = "block";
      emptyCartMsg.style.display = "none";
     } else {
     counter.innerHTML = "";
     counter.style.display = "none";
     emptyCartMsg.style.display = "block"; 
     }
  } 

//Works out total price of items in cart  
  function priceTotal() {
    var cartPriceTotal = document.getElementById('totalAmmount');
    var totalPrice = [];
    for (let item in items) {
      let price = (items[item].qty) * (items[item].price);
      totalPrice.push(price);
      }
      totalPrice = totalPrice.reduce(function(a, b){
        return a + b;
    }, 0); 
    var priceRounded = totalPrice.toFixed(2);
    if (priceRounded > 0) {
      cartPriceTotal.innerHTML = "total:  £" + priceRounded;
  } else {
    cartPriceTotal.innerHTML = "";
  }
}


  // creates elements on load if in basket
  var cartArray = [];

  // adds each product to an array 
  function getLocalStorageData() {
  for (let products in localStorage) {
      if (localStorage.hasOwnProperty(products)) {
          var cartItems = JSON.parse(localStorage.getItem(products));
          cartArray.push(cartItems);
      }
    }
  }
  
  //loads items from array and creates element in basket
  function loadCart() {
    getLocalStorageData();
    for (let i=0; i<cartArray.length; i++) {
      const cartKey = cartArray[i].id;
      const qty = cartArray[i].qty;
        for (let key in items) {
        if (cartKey == key) {
      var item = items[key];
      item.qty = qty;
      var cart = document.getElementById("cart");
      var itemElem = document.getElementById(key);
      itemElem = document.createElement('div');
                itemElem.className = ('itemCartRow');
                itemElem.id = key;
                
                this.addElement(itemElem, 'span', 'itemNameCart', item.name);
                this.addElement(itemElem, 'span', 'itemPriceCart', '£' + item.price);
                this.addButton(itemElem, 'button', 'button btnCart qtySectionDec' , "-", () => incItem(key, -1));
                this.addElement(itemElem, 'span', 'qty qtySectionNum text-center', item.qty);
                this.addButton(itemElem, 'button', 'button btnCart qtySectionInc', "+", () => incItem(key, 1));
                this.addButton(itemElem, 'button', 'button btnCartDel', "Delete", () => deleteItem(key));
                cart.appendChild(itemElem);
                itemTotal();
                priceTotal();
          }
        }
      }
  }

$(document).ready(function(){ 
  loadCart();
  });


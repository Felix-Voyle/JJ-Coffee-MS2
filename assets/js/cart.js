const items = {
  "longblack": { name: "Long Black", price: 2.7, min: 1, max: 20, qty: 0 },
  "flatwhite": { name: "Flat White", price: 2.9,  min: 1, max: 20, qty: 0 },
  "espresso": { name: "Espresso", price: 2.5, min: 1, max: 20, qty: 0 },
  "americano": { name: "Americano", price: 2.7, min: 1, max: 20, qty: 0 },
  "coldbrew": { name: "Cold Brew", price: 2.9,  min: 1, max: 20, qty: 0 },
  "icedamericano": { name: "Iced Americano", price: 2.9, min: 1, max: 20, qty: 0 },
  "filtercoffee": { name: "Filter Coffee", price: 3,  min: 1, max: 20, qty: 0 },
  "macchiato": { name: "Macchiatto", price: 2.8, min: 1, max: 20, qty: 0 },
  "cortado": { name: "Cortado", price: 2.8,  min: 1, max: 20, qty: 0 },
  "cappuccino": { name: "Cappuccino", price: 2.9, min: 1, max: 20, qty: 0 },
  "mocha": { name: "Mocha", price: 3.1,  min: 1, max: 20, qty: 0 },
  "icedlatte": { name: "Iced Latte", price: 3,  min: 1, max: 20, qty: 0 },
  "extrashot": { name: "Extra Shot", price: 0.5,  min: 1, max: 20, qty: 0 },
  "syrup": { name: "Syrup", price: 0.5,  min: 1, max: 20, qty: 0 },
  
  "teapigstea": { name: "Teapigs Tea", price: 2, min: 1, max: 10, qty: 0 },
  "matchatea": { name: "Matcha Tea", price: 3,  min: 1, max: 10, qty: 0 },
  "matchalatte": { name: "Matcha Latte", price: 2.8, min: 1, max: 10, qty: 0 },
  "hotchocolate": { name: "Hot Chocolate", price: 3,  min: 1, max: 10, qty: 0 },
  "nutellahotchoc": { name: "Nutella Hot Choc", price: 3.4, min: 1, max: 10, qty: 0 },
  "chailatte": { name: "Chai Latte", price: 2.9,  min: 1, max: 10, qty: 0 },
  "icedtea": { name: "Iced Tea", price: 2.8, min: 1, max: 10, qty: 0 },
  "icedmatcha": { name: "Iced Matcha", price: 3,  min: 1, max: 10, qty: 0 },
  "strawberrysplit": { name: "Strawberry Split", price: 4.5, min: 1, max: 10, qty: 0 },
  "musclematcha": { name: "Muscle Matcha", price: 4.5,  min: 1, max: 10, qty: 0 },
  
  "bircher": { name: "Bircher", price: 3.5,  min: 1, max: 10, qty: 0 },
  "porridge": { name: "Porridge", price: 3.5,  min: 1, max: 10, qty: 0 },
  "granola": { name: "Granola Pot", price: 3,  min: 1, max: 10, qty: 0 },
  "toast": { name: "Toast & Butter", price: 2.5,  min: 1, max: 10, qty: 0 },
  "stuffedcroissant": { name: "Stuffed Croissant", price: 4,  min: 1, max: 10, qty: 0 },
  "avocado": { name: "Avocado toast", price: 4.5, min: 1, max: 10, qty: 0 },
  "avopesto": { name: "Avocado Pesto", price: 5,  min: 1, max: 10, qty: 0 },
  "smokedsalmon": { name: "Smoked Salmon", price: 5.5,  min: 1, max: 10, qty: 0 },
  "flatbreadone": { name: "Flatbread One", price: 6, min: 1, max: 10, qty: 0 },
  "flatbreadtwo": { name: "Flatbread Two", price: 7,  min: 1, max: 10, qty: 0 },
  "saladbox": { name: "Salad Box", price: 6,  min: 1, max: 10, qty: 0 },
  "feta": { name: "Feta", price: 0.5,  min: 1, max: 10, qty: 0 },
  "halloumi": { name: "Halloumi", price: 1.5,  min: 1, max: 10, qty: 0 },
  "egg": { name: "Egg", price: 1, min: 1, max: 10, qty: 0 },
  "salmon": { name: "Salmon", price: 2,  min: 1, max: 10, qty: 0 }
}

//function to add items to cart
function addItem(key) {
  var cart = document.getElementById("cart");
  var div = document.getElementById(key);
  var item = items[key];
  if (item != null) {
      if (div == null) {
          div = document.createElement('div');
          div.className = ('itemCartRow');
          div.id = key;
          
          var elemName = this.addElement(div, 'span', 'itemNameCart', item.name);
          var elemPrice = this.addElement(div, 'span', 'itemPriceCart', '£' + item.price);
          var elemButtonDec = this.addButton(div, 'button', 'button btnCart qtySectionDec' , "-", () => incItem(key, -1));
          var elemQty = this.addElement(div, 'span', 'qty qtySectionNum text-center', "1");
          var elemButtonInc = this.addButton(div, 'button', 'button btnCart qtySectionInc', "+", () => incItem(key, 1));
          var elemButtonDelete = this.addButton(div, 'button', 'button btnCartDel', "Delete", () => deleteItem(key));
          cart.appendChild(div);
          item.qty ++
          itemTotal();
      } else if (item.qty < item.max) {
          var elemQty = div.getElementsByClassName("qty")[0];
          elemQty.innerHTML = Number(elemQty.innerHTML) + 1;
          item.qty ++
          itemTotal();
      }
  }
  return div
}

//increases and decreases items quantity in basket
function incItem(key, inc) {
  var item = items[key];
  var div = document.getElementById(key);
  var elemQty = div.getElementsByClassName("qty")[0];
  const value = Number(elemQty.innerHTML) + inc;
  if (value >= item.min && value <= item.max) {
      elemQty.innerHTML = value;
      item.qty = value
      itemTotal();
  } else if (value < item.min) {
      div.remove();
      item.qty = 0
      itemTotal();
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
  var div = document.getElementById(key);
  var item = items[key];
  div.remove();
  item.qty = 0
  itemTotal();
}

//counts number of items in basket 
function itemTotal() {
  var counter = document.getElementById('itemCounter');
    var totalItems = [];
      for (let item in items) {
    let itemQty = (items[item].qty);
    totalItems.push(itemQty);
    }
    var sum = totalItems.reduce(function(a, b){
          return a + b;
      }, 0);
     if (sum >= 1) {
      counter.innerHTML = sum
      counter.style.display = "block"
     } else if (sum < 1) {
     counter.innerHTML = ""
     counter.style.display = "none"
     }
  } 




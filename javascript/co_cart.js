"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Brandy Guzman
   Date:   3/20/2025
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

window.addEventListener("load", function() {
   calcCart();
   var orderForm = this.document.forms.cart;

   orderForm.elements.modelQty.onchange = calcCart;

   var shippingOptions = this.document.querySelectorAll('input[name="shipping"]');
   for (var i = 0; i < shippingOptions.length; i++) {
      shippingOptions[i].onclick = calcCart;
   }
});



function calcCart() {
   console.log("running :)");

   var orderForm = document.forms.cart;

   var cost = orderForm.elements.modelCost.value;
   var qIndex = orderForm.elements.modelQty.selectedIndex;
   var quantity = orderForm.elements.modelQty[qIndex].value;

   // Product cost
   var orderCost = cost * quantity;
   orderForm.elements.orderCost.value = formatUSCurrency(orderCost);

   // Shipping
   var shipOption = document.querySelector('input[name="shipping"]:checked').value;
   
   var shipCost = shipOption * quantity;
   orderForm.elements.shippingCost.value = formatNumber(shipCost, 2);

   // Subtotal
   orderForm.elements.subTotal.value = formatNumber(orderCost + shipCost, 2);

   // tax
   var salesTax = 0.05 * (orderCost + shipCost);
   orderForm.elements.salesTax.value = formatNumber(salesTax, 2);

   orderForm.elements.cartTotal.value = formatUSCurrency(orderCost + shipCost + salesTax);

   // store text label of shipping
   orderForm.elements.shippingType.value = document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;

}



function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}

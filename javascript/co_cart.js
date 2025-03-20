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
   document.getElementById("modelQty").onchange = calcCart();
   var shippingOptions = this.document.querySelectorAll('input[name="shipping"]');
   for (var i = 0; i < shippingOptions.length; i++) {
      shippingOptions[i].onclick = calcCart();
   }
});

function calcCart() {
   var orderForm = document.forms.cart;

   var mCost = orderForm.elements.modelCost.value;
   var qIndex = orderForm.elements.modelQty.selectedIndex;


}

/*    help
   var orderForm = document.forms.cart;
   var orderCost = document.getElementById("modelCost").value * orderForm.elements.modelQty[orderForm.elem].value;
   orderForm.elements.orderCost.value = formatUSCurrency(orderCost);

*/ 






function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}

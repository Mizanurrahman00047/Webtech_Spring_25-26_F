
const unitPrice = 1000;
const days = 30;

const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

quantity.addEventListener("input", function(){

    let qty = parseInt(quantity.value);

    if(qty < 0){
        alert("Quantity cannot be negative");
        quantity.value = 0;
        qty = 0;
    }

    let total = unitPrice * qty * days;

    totalPrice.value = total;

    if(total > 1000){
        alert("You are eligible for a Gift Coupon!");
    }

});
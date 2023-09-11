let menubar = document.querySelector('.icon-menu');
let container = document.querySelector(".container");
let navbar = document.querySelector('.nav');
let textBox = document.querySelector('.textbox')

menubar.onclick = ()=>{
    navbar.classList.toggle("small");
    textBox.classList.toggle('big');
}

//This is for the header ToggleTop
var scroll1 = window.pageYOffset;
window.onscroll = function(){
    var scroll2 = window.pageYOffset;
    if(scroll1 > scroll2){
        document.querySelector('.header').style.top = "0";
    }
    else{
        document.querySelector('.header').style.top = "-100px";
    }
    scroll1 = scroll2;
}
//var scroll3 = window.pageYOffset;
/*window.onscroll = function(){
    var scroll4 = window.pageYOffset;
    if(scroll3 > scroll4){
        document.querySelector('.head').style.top = "0";
    }
    else{
        document.querySelector('.head').style.top = "-100px";
    }
    scroll3 = scroll4;
}*/
//Closing the header ToggleTop

//Tag for the button down to go upward
/*window.onscroll = function(){
    if(window.scrollTop() > 300){
        document.getElementsByClassName('chevron-up').style.opacity = "1";
    }else{
        document.getElementsByClassName('chevron-up').style.opacity = "0";
        
    }
}*/
//Tag for the button down to go upward close here

//User Document begin

var email = document.getElementById("emailInput");
var userName = document.getElementById("nameInput");
var number = document.getElementById("numberInput");
var subject = document.getElementById("subjectInput");
var textarea = document.getElementById("textareaInput");
function documentPage(){
    document.getElementById("userEmail").innerHTML = email.value;
    document.getElementById("userName").innerHTML = userName.value;
    document.getElementById("userNumber").innerHTML = number.value;
    document.getElementById("userSubject").innerHTML = subject.value;
    document.getElementById("userMessage").innerHTML = textarea.value;
}
//User Document Close




//Open Cart and Home Link
var tabContents = document.getElementsByClassName('tab-Contents');

function openLink(tabname){
    for(tabcontent of tabContents){
        tabcontent.classList.remove('toggle');
    }
    document.getElementById(tabname).classList.add('toggle');
}
//Close Cart and Home Link here//



//Shopping Javascript
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
};

//Remove Item from cart
function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    //Quantity Change
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }

    //Adding to Cart
    var addCart = document.getElementsByClassName("add-cart");
    for(var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}

//Remove Item from cart 2
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//Quantity Change2
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
//Adding to cart 2
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('pro-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('pro-img')[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
}
//calling the addProductToCart function
function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsName = cartItems.getElementsByClassName('cart-title');
    for(var i = 0; i < cartItemsName.length; i++){
        if(cartItemsName[i].innerText == title){
            alert("You have added this product before");
            return;
        }
    }
    //Putting content into Js
    var cartBoxContent = `                              
            <img src="${productImg}" class="cart-image">
            <div class="cart-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number"value="1" class="cart-quantity">
            <i class="fa fa-trash cart-remove"></i>
            `;
    cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantityChanged)

}


// function for the updateTotal()
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        //var priceEle = cartBox.getElementsByClassName('cart-price');
        //var pri = parseFloat(priceEle.innerText.replace("N", ""));
        var price = parseFloat(priceElement.innerText.replace("N", ""));
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var quantity = quantityElement.value;
        //var quantityEle = cartBox.getElementsByClassName('cart-quantity');
        total = total + (price * quantity);
    }

    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = 'N' + total;
}

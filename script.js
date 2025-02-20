class Basket {
    
    constructor(){
      product=null;
      qty = null;
      price=null;
    }


    addItem (a, b) {
        product=a
        qty=b
    }
    
}



function getCost (){
    const  myBasket  = new Basket();
    let productName= document.getElementById("productId").value;
    let productQty=parseInt(document.getElementById("qtyId").value);
    let productPrice=parseInt(document.getElementById("priceId").value);

    myBasket.addItem(productName,productQty);
    alert(`Added ${productQty} of ${productName} to the basket.`);
    
    
    if (!myBasket.product || myBasket.qty === null) {
        alert("Please add a product first!");
    }

    let p =productPrice*productQty;
    alert(`The total price of ${myBasket.qty} ${myBasket.product}(s) is €${p}`);
}



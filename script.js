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
    getCost(prc){
     this.price=prc;
     return this.qty*this.price;
     
    }
}

const  myBasket  = new Basket();

function addToBasket (){

    let productName= document.getElementById("productId").value;
    let productQty=parseInt(document.getElementById("qtyId").value);
    
    myBasket.addItem(productName,productQty);
    alert(`Added ${productQty} of ${productName} to the basket.`);
    
}

function findPrice(){

    
    let productPrice=parseInt(document.getElementById("priceId").value);
    
    if (!myBasket.product || myBasket.qty === null) {
        alert("Please add a product first!");
        return;
    }

    let p = myBasket.getCost(productPrice);
    alert(`The total price of ${myBasket.qty} ${myBasket.product}(s) is €${p}`);
    
}

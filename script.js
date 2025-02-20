class Basket {
    
    constructor(){
      let product=null;
      let qty = null;
      let price=null;
    }


    addItem(a,b){
        this.product=a;
        this.qty=b;
    }


    getPrice (a, b) {
        
        this.price=a;
        this.qty=b;
        return this.price*this.qty;
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

    let p =myBasket.getPrice(productQty*productPrice);
    alert(`The total price of ${myBasket.qty} ${myBasket.product}(s) is €${p}`);
}



class Basket {
    
    constructor(){
      this.product=null;
      this.qty = null;
      this.price=null;
    }


    addItem(a,b){
        this.product=a;
        this.qty=b;
    }


    getPrice (p,q) {

        this.price=p;
        this.qty=q;
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

    let p =myBasket.getPrice(productPrice,productQty);
    alert(`The total price of ${myBasket.qty} ${myBasket.product}(s) is €${p}`);
}



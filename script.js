class basket {
    


    constructor(){
      product=null;
      qty = null;
      price=null;
    }

    basket(a,b){

        this.product=a
        this.qty=b
      
    }
    addItem (a, b) {
        product=a
        qty=b
    }
    getCost(prc){
     price=prc;
     return this.qty*this.price;
     
    }
}
function findPrice(){

    let productName= document.getElementById("productId").value;
    let productQty=parseInt(document.getElementById("QtyId").value);
    let productPrice=parseInt(document.getElementById("priceId").value);
    
    const myBasket = new basket();
    myBasket.addItem(productName,productQty);
    let p=myBasket.getCost(productPrice);
    alert(`The Price of the product is ${p}`);
    
}

class basket {
    
    basket(a,b,c ){

        this.product=a
        this.qty=b
        this.price=c
    }
    addItem (a, b) {
        product=a
        qty=b
    }
    getCost(){
     return this.qty*this.price;
     
    }
}

const basket = new basket.addItem('Apple', 2, 2.5);
let p=basket.getCost();
alert(`The Price of the product is ${p}`)


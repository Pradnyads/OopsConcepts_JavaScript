class Base {
    constructor (...param){
        this.name = param[0];
        this.weight = param[1];
        this.price = param[2];
    }
    totalPrice() {
        let ricetotal = this.weight * this.price;
        console.log("Total price for " + this.name + " is : " +ricetotal);
        return ricetotal;
      }
    } 
    
  module.exports = Base;

   
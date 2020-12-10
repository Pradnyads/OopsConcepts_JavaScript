/*******************************************************************************
* @problem : Json objects of Stock of Comapnies and calculate total stock price
* @fileName : StockManagementBusinessLogic.js
* @Auther : Pradnya D. S.
/*******************************************************************************/

const fs = require("fs");
const data = fs.readFileSync("./StockManagement.JSON");
let stockData = JSON.parse(data);
//class of Stock contain different method calcutating total price of stack
class Stock {
  constructor(...param) {
    this.name = param[0];
    this.number = param[1];
    this.price = param[2];
  }

  tcs() {
    let tcsTotalShare = 0;
    stockData.Tcs.forEach((element) => {
      tcsTotalShare = element.noOfShare * element.priceOfShare;
    });
    return "Total of TCS shares is :" + tcsTotalShare;
  }
  infosys() {
    let infosysTotalShare = 0;
    stockData.Infosys.forEach((element) => {
      infosysTotalShare = element.noOfShare * element.priceOfShare;
    });
    return "Total of Infosys shares is :" + infosysTotalShare;
  }
  vipro() {
    let viproTotalShare = 0;
    stockData.Vipro.forEach((element) => {
      viproTotalShare = element.noOfShare * element.priceOfShare;
    });

    return "Total of Vipro shares is :" + viproTotalShare;
  }
}

module.exports = new Stock();

/*******************************************************************************
* @problem : Json objects of Stock of Comapnies and calculate total stock price
* @fileName : StockManagementBusinessLogic.js
* @Auther : Pradnya D. S.
/*******************************************************************************/

const fs = require("fs");
const data = fs.readFileSync("./StockManagement.JSON");
let stockData = JSON.parse(data);

//class of Stock contain different methods calcutating total price of stack
class Stock {
  constructor(...param) {
    this.shareName = param[0];
    this.noOfShare = param[1];
    this.priceOfShare = param[2];
  }
  
  stockAccount() {
    stockData.company[stockData.company.length] = [];
  }
  
  addShare(shareName, noOfShare, priceOfShare) {
    let stock = {
      shareName: shareName,
      numberOfShares: noOfShare,
      sharePrice: priceOfShare,
    };
    stockData.company[stockData.company.length] = stock;
  }

  display() {
    return stockData;
  }

  calculation() {
    let sharesTotal = 0;
    stockData.company.forEach((element) => {
      sharesTotal = element.priceOfShare * element.noOfShare;
    });
    return " Total shares of Company:" + sharesTotal;

  }
  
  save() {
    fs.writeFileSync(
      "./StockManagement.JSON",JSON.stringify(stockData, null, 2)
    );
  }
}

module.exports = new Stock();

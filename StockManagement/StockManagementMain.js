/*******************************************************************************************************
* @problem : Json objects of stock of companies calculate total stack price
* @fileName : StockManagementMain.js
* @Auther : Pradnya D. S.
/*******************************************************************************/

let fs = require("fs");
let readlineSync = require("readLine-Sync");
const data = fs.readFileSync("./StockManagement.json");
let stockData = JSON.parse(data);
let Stock = require("./StockManagementBusinessLogic");

//Methods are called for calculate total stock price
function stockManagement() {
  for (i = 1; i < 10; i++) {
    let input = readlineSync.question(
      "enter choice : 1.Add Shares 2.Display Shares 3.Total Shares 4.Exit:"
    );
    if (input == 4) return;
    switch (parseInt(input)) {
      case 1:
        let Company = readlineSync.question("Enter name of company: ");
        let numOfShares = readlineSync.questionInt("Enter number of shares: ");
        let price = readlineSync.questionInt("Enter price of Share: ");
        Stock.addShare(Company, numOfShares, price);
        Stock.save();
        break;
      case 2:
        console.log(Stock.display());
        break;
      case 3:
        console.log(Stock.calculation(parseInt()));
        break;
      case 4:
        console.log("Exit");
        break;
      default:
        "Wrong choice";
        break;
    }
  }
}
stockManagement();


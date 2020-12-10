/*******************************************************************************************************
* @problem : Json objects of stock of companies calculate total stack price
* @fileName : StockManagementMain.js
* @Auther : Pradnya D. S.
/*******************************************************************************/

let fs = require("fs");
const { stringify } = require("querystring");
let readlineSync = require("readLine-Sync");
const data = fs.readFileSync("./StockManagement.json");
let stockData = JSON.parse(data);
let Stock = require("./StockManagementBusinessLogic");

//Methods are defined for calculate total stock price
function stockManagement() {
  for (i = 1; i < 10; i++) {
    let input = readlineSync.question(
      "enter choice : 1.Tcs 2.Infosys 3.Vipro 4.exit:"
    );
    if (input == 4) return;
    switch (parseInt(input)) {
      case 1:
        console.log(stockData.Tcs);
        console.log(Stock.tcs());
        break;
      case 2:
        console.log(stockData.Infosys);
        console.log(Stock.infosys());
        break;
      case 3:
        console.log(stockData.Vipro);
        console.log(Stock.vipro());
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
console.log(stockManagement(parseInt()));

//const jsonString = JSON.stringify(Stock.tcs())
//fs.writeFileSync('./StockManagement.json', jsonString);
//fs.writeFileSync('./StockManagment.json', tcs.push(jsonString));
//console.log("Data stored sucessfully")

let fs = require("fs");
let readlineSync = require("readLine-Sync");
const data = fs.readFileSync("./StockManagement.json");
let stockData = JSON.parse(data);
let Stock = require("./StockManagementBusinessLogic");

console.log(stockData.Tcs);
console.log(Stock.tcs());

console.log(stockData.Infosys);
console.log(Stock.infosys());

console.log(stockData.Vipro);
console.log(Stock.vipro());

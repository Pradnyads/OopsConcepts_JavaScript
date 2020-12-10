/**************************************************************************************
* @problem : Json objects of rice,pulses and wheat, calculate total price of Elements
* @fileName : InventoryManagementMain.js
* @Auther : Pradnya D. S.
/**************************************************************************************/
const fs = require("fs");
const Data = fs.readFileSync("./InventoryManagement.json");
let grains = JSON.parse(Data);
const Base = require("./InventoryManagementBusinessLogic");

function riceTotal() {
  console.log(grains.Rice);
  for (let i = 0; i < 3; i++) {
    let riceName = grains.Rice[i].name;
    let riceWeight = grains.Rice[i].weight;
    let ricePrice = grains.Rice[i].price;
    let objRiceTotal = new Base(riceName, riceWeight, ricePrice);
    objRiceTotal.totalPrice();
  }
}
riceTotal();

function wheatTotal() {
  console.log(grains.Wheat);
  for (let i = 0; i < 3; i++) {
    let wheatName = grains.Wheat[i].name;
    let wheatWeight = grains.Wheat[i].weight;
    let wheatPrice = grains.Wheat[i].price;
    let objRiceTotal = new Base(wheatName, wheatWeight, wheatPrice);
    objRiceTotal.totalPrice();
  }
}
wheatTotal();

function pulsesTotal() {
  console.log(grains.Pulses);
  for (let i = 0; i < 3; i++) {
    let pulsesName = grains.Pulses[i].name;
    let pulsesWeight = grains.Pulses[i].weight;
    let pulsesPrice = grains.Pulses[i].price;
    let objPulsesTotal = new Base(pulsesName, pulsesWeight, pulsesPrice);
    objPulsesTotal.totalPrice();
  }
}
pulsesTotal();

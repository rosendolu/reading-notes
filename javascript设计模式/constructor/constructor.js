/* eslint-disable no-unused-vars */
/* eslint-disable func-names */


// 基本的
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.tostring = function () {
    return this.model + this.year + this.miles;
  };
}

const taxi = new Car('model1', 2019, 100);
const jeep = new Car('jeep', 2020, 1000);

// 原型
function Car2(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.tostring = function () {
  return this.model + this.year + this.miles;
};

const ferari = new Car2('model', 2010, 2000);

ferari.tostring();

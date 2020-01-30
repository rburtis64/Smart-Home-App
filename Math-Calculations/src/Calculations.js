/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var org;
(function (org) {
    var jsweet;
    (function (jsweet) {
        var Calculations = (function () {
            function Calculations() {
                if (this.tempChangePerSec === undefined)
                    this.tempChangePerSec = 0;
                if (this.difference === undefined)
                    this.difference = 0;
                if (this.b === undefined)
                    this.b = false;
            }
            Calculations.prototype.calculateCost = function (applianceWatts, applianceHours) {
                var total = 0;
                for (var i = 0; i < applianceWatts.length; i++) {
                    {
                        total += (applianceWatts[i] * applianceHours[i]) / 1000 * 0.12;
                        console.info("Current total is: " + total);
                    }
                    ;
                }
                return total;
            };
            Calculations.prototype.tempHouseSealed = function (houseTemp, outsideTemp) {
                if (houseTemp > outsideTemp) {
                    this.b = false;
                    this.difference = houseTemp - outsideTemp;
                    this.tempChangePerSec = this.difference * (1.0 / 1800.0);
                    this.startTempChangeTimer(this.tempChangePerSec, houseTemp, this.b);
                }
                else {
                    this.b = true;
                    this.difference = outsideTemp - houseTemp;
                    this.tempChangePerSec = this.difference * (1.0 / 1800.0);
                    this.startTempChangeTimer(this.tempChangePerSec, houseTemp, this.b);
                }
            };
            Calculations.prototype.tempDoorOpen = function (houseTemp, outsideTemp) {
                if (houseTemp > outsideTemp) {
                    this.b = false;
                    this.difference = houseTemp - outsideTemp;
                    this.tempChangePerSec = this.difference * (1.0 / 150.0);
                    console.info("TCPS: " + this.tempChangePerSec);
                    this.startTempChangeTimer(this.tempChangePerSec, houseTemp, this.b);
                }
                else {
                    this.b = true;
                    this.difference = outsideTemp - houseTemp;
                    console.info("Difference is: " + this.difference);
                    this.tempChangePerSec = this.difference * (1.0 / 150.0);
                    console.info("TCPS: " + this.tempChangePerSec);
                    this.startTempChangeTimer(this.tempChangePerSec, houseTemp, this.b);
                }
            };
            Calculations.prototype.tempWindowOpen = function (houseTemp, outsideTemp) {
                if (houseTemp > outsideTemp) {
                    this.b = false;
                    this.difference = houseTemp - outsideTemp;
                    this.tempChangePerSec = this.difference * (1.0 / 300.0);
                    console.info("TCPS: " + this.tempChangePerSec);
                    this.startTempChangeTimer(this.tempChangePerSec, houseTemp, this.b);
                }
                else {
                    this.b = true;
                    this.difference = outsideTemp - houseTemp;
                    this.tempChangePerSec = this.difference * (1.0 / 300.0);
                    console.info("TCPS: " + this.tempChangePerSec);
                    this.startTempChangeTimer(this.tempChangePerSec, houseTemp, this.b);
                }
            };
            Calculations.prototype.startTempChangeTimer = function (tempChangePerSecond, houseTemperature, upOrDown) {
                if (upOrDown === true) {
                    console.info("Temperature is rising by " + tempChangePerSecond + " each second from the current house temp of " + houseTemperature + ".");
                }
                else {
                    console.info("Temperature is lowering by " + tempChangePerSecond + " each second from the current house temp of " + houseTemperature + ".");
                }
            };
            Calculations.prototype.printResults = function (totes) {
                console.info("The total cost for each day is estimated at: " + totes);
                console.info();
            };
            return Calculations;
        }());
        jsweet.Calculations = Calculations;
        Calculations["__class"] = "org.jsweet.Calculations";
    })(jsweet = org.jsweet || (org.jsweet = {}));
})(org || (org = {}));

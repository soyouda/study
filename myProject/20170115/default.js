/**
 * Created by jintae on 2017-01-19.
 */

var vendingMachine = {
    power : false,
    moneyBox : [{
        bills : 0,
        coin : [{
            coin500 : [{
                worth : 500,
                quantity : 0
            }],
            coin100 : [{
                worth : 100,
                quantity : 0
            }]
        }]
    }],
    moneyTemp : 0,
    returnButton : false
};

var vendingMAction = {
    on : function() {
        this.power = true;
    },
    off : function() {
        this.power = false;
    },
    getMoney : function(money){
        if(this.power === false) throw new Error('disconnect power');
        if(money > 1000) throw new Error('only 1000 won bills');
        this.moneyTemp += money;

        switch (money) {
            case money === 1000:
                this.moneyTemp += money;
                this.moneyBox.bills += money;
                break;
            case money === 500:
                this.moneyTemp += money;
                this.moneyBox.coin.coin500.quantity += 1;
                break;
            case money === 100:
                this.moneyTemp += money;
                this.moneyBox.coin.coin100.quantity += 1;
                break;
        }
    },
    getBeverage : function(beverageName) {
        for (var i = 0; i < this.product.length; i++){
            var beverage = this.product[i];

            if(beverage.price >= this.moneyTemp) throw new Error('not enough money');
            if(beverage.quantity <= 0) throw new Error('not enough quantity');
            if(beverage.name === beverageName){
                beverage.quantity -= 1;
                this.moneyTemp -= beverage.price;
                return beverage;
            }
        }
    },
    returnMoney : function(){
        var changes = [], i = 0;
        console.log(this.moneyTemp);

        while(this.moneyTemp !== 0) {
            if(this.moneyTemp > 500) {
                this.moneyBox.coin.coin500.quantity -= 1;
                this.moneyTemp -= this.moneyBox.coin.coin500.worth;
                changes += this.moneyBox.coin.coin500;
            }
            if(this.moneyTemp > 100) {
                this.moneyBox.coin.coin100.quantity -= 1;
                this.moneyTemp -= this.moneyBox.coin.coin100.worth;
                changes += this.moneyBox.coin.coin100;
            }
            i++;
        }
        return changes;
    }
};

function VendingM(product){
    this.power = true;
    this.moneyTemp = 1600;
    this.moneyBox = [{
        bills : 1000,
        coin : [{
            coin500 : [{
                worth : 500,
                quantity : 5
            }],
            coin100 : [{
                worth : 100,
                quantity : 10
            }]
        }]
    }];
    this.product = product;
}
VendingM.prototype = vendingMAction;

var v1 = new VendingM([{
    name : '콜라',
    price : 1000,
    quantity : 2
}, {
    name : '사이다',
    price : 900,
    quantity : 2

}]);
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

        switch (money !== 0) {
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

            if(beverage.name === beverageName){
                if(beverage.price >= this.moneyTemp) throw new Error('not enough money');
                if(beverage.quantity <= 0) throw new Error('not enough quantity');

                beverage.quantity -= 1;
                this.moneyTemp -= beverage.price;
                return beverage;
            }
        }
    },
    returnMoney : function(){
        var changes = [];
        var changesTemp = this.moneyTemp;
        var quantity500won = this.moneyBox.coin.coin500.quantity;
        var quantity100won = this.moneyBox.coin.coin100.quantity;

        if(changesTemp >= 500) {
            while(changesTemp >= 500 && quantity500won > 0){
                quantity500won -= 1;
                changesTemp -= this.moneyBox.coin.coin500.worth;
                changes += this.moneyBox.coin.coin500.name;
            }
        }
        if(changesTemp >= 100) {
            while (changesTemp >= 100 && quantity100won > 0){
                quantity100won -= 1;
                changesTemp -= this.moneyBox.coin.coin100.worth;
                changes += this.moneyBox.coin.coin100.name;
            }
        }

        return changes;
    }
};

function VendingM(product){
    this.power = false;
    this.moneyTemp = 0;
    this.moneyBox = {
        bills : 0,
        coin : {
            coin500 : {
                name : '500원',
                worth : 500,
                quantity : 5
            },
            coin100 : {
                name : '100원',
                worth : 100,
                quantity : 10
            }
        }
    };
    this.product = product;
}
VendingM.prototype = vendingMAction; //prototype

var v1 = new VendingM([{ //생성자함수
    name : '콜라',
    price : 1000,
    quantity : 2
}, {
    name : '사이다',
    price : 900,
    quantity : 2

}]);
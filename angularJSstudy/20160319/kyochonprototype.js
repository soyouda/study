/**
 * Created by soyouda on 16. 3. 23..
 */
function Kyochon(name){
    this.name = name;
}
Kyochon.prototype.delivery = function() {
    return this.name +'의 치킨';
};

var sindorim = new Kyochon('신도림점');
var kangnam = new Kyochon('강남점');
var sinsa = new Kyochon('신사점');

console.log(sindorim);
console.log(kangnam);
console.log(sinsa);
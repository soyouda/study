function min(a,b,c){
    var m = a;
    if(m >b) m = b;
    if(m >c) m = c;
    return m;
}


describe('min 테스트', function () {
    it('가장 작은수를 반환한다', function () {
        expect(min(1,2,5)).toBe(1);
    })
});
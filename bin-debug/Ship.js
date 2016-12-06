var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ShipType;
(function (ShipType) {
    ShipType[ShipType["CA"] = 1.2] = "CA";
})(ShipType || (ShipType = {}));
var Ship = (function () {
    //private __cachemaxHp;////flag !
    function Ship(_type, _name) {
        this.level = 1; //船只等级不会变化，各船只等级不同。
        this.hp = 50;
        this.speed = 10;
        this.isInTeam = false;
        this.equipments = [];
        this.name = _name;
        this.type = _type;
        /*
        this.maxHP = this.getmaxHP();
        this.attack = this.getAttack();
        this.fightPower = this.getfightPower();
        */
    }
    var d = __define,c=Ship,p=c.prototype;
    p.setInTeam = function (_isinTeam) {
        this.isInTeam = _isinTeam;
    };
    //@Cache
    p.getmaxHP = function () {
        var result = 0;
        result += this.level * 10 * this.type;
        return result;
    };
    p.getAttack = function () {
        var result = 0;
        this.equipments.forEach(function (e) { return result += e.calFightPower(); });
        return result;
    };
    p.getfightPower = function () {
        return this.calFightPower();
    };
    p.calFightPower = function () {
        return this.getmaxHP() * 1.5 + this.getAttack() * 1.8 + this.speed * 1.2;
    };
    __decorate([
        Cache
    ], p, "getAttack", null);
    return Ship;
}());
egret.registerClass(Ship,'Ship');
//# sourceMappingURL=Ship.js.map
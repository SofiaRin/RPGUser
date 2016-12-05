var ShipType;
(function (ShipType) {
    ShipType[ShipType["CA"] = 1.2] = "CA";
})(ShipType || (ShipType = {}));
var Ship = (function () {
    function Ship(_type, _name) {
        this.level = 1;
        this.hp = 50;
        this.isInTeam = false;
        this.equipments = [];
        this.name = _name;
        this.type = _type;
    }
    var d = __define,c=Ship,p=c.prototype;
    p.setInTeam = function (_isinTeam) {
        this.isInTeam = _isinTeam;
    };
    d(p, "maxHP"
        ,function () {
            if (!this.__cacheMaxHp) {
                var result = 0;
                result += this.level * 100 * this.type;
                this.__cacheMaxHp = result;
            }
            return this.__cacheMaxHp;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.calFightPower(); });
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.calFightPower();
        }
    );
    p.calFightPower = function () {
        return this.maxHP * 1.5 + this.attack * 1.8;
    };
    return Ship;
}());
egret.registerClass(Ship,'Ship');
//# sourceMappingURL=Ship.js.map
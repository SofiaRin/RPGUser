var Cache = function (target, propertyKey, descriptor) {
    var method = descriptor.value;
    descriptor.value = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i - 0] = arguments[_i];
        }
        console.log(target, propertyKey);
        var cacheKey = "__cache" + propertyKey;
        if (!target[cacheKey]) {
            target[cacheKey] = method.apply(this, arg);
        }
        return target[cacheKey];
    };
};
var User = (function () {
    function User() {
        this.level = 0;
        this.exp = 0;
        this.totalExp = 0;
        this.cash = 0;
        this.gold = 0;
        this.ships = [];
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "shipsInTeam"
        ,function () {
            return this.ships.filter(function (ship) { return ship.isInTeam; });
        }
    );
    p.calFightPower = function () {
        var result = 0;
        this.shipsInTeam.map(function (ship) { return result += ship.calFightPower(); });
        //result += this.pet.calFightPower();
        return Math.floor(result);
    };
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map
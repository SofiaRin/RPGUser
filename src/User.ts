var Cache: MethodDecorator = (target, propertyKey, descriptor) => {

    const method = descriptor.value;
    descriptor.value = function (...arg) {
        console.log(target, propertyKey);

        var cacheKey = "__cache" + propertyKey;
        if (!target[cacheKey]) {
            target[cacheKey] = method.apply(this, arg);
        }
        return target[cacheKey];
    }
}


class User {
    level = 0;
    exp = 0;
    totalExp = 0;
    cash = 0;
    gold = 0;

    ships: Ship[] = [];

    get shipsInTeam() {

        return this.ships.filter(ship => ship.isInTeam);
    }

    calFightPower() {

        var result = 0;
        this.shipsInTeam.map(ship => result += ship.calFightPower());
        //result += this.pet.calFightPower();

        
        return Math.floor(result);
    }

}


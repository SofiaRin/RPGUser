enum ShipType {
    CA = 1.2
}

class Ship {

    name:string;

    level = 1;

    hp = 50;

    type: ShipType;

    isInTeam: boolean = false;

    equipments: Equipment[] = [];

    private __cacheMaxHp;////flag !

    constructor(_type: ShipType,_name:string) {
    this.name = _name;
    this.type = _type;
    }

    public setInTeam(_isinTeam:boolean){

        this.isInTeam = _isinTeam;
    }


    get maxHP() {

        if (!this.__cacheMaxHp) {
            var result = 0;
            result += this.level * 100 * this.type;
            this.__cacheMaxHp = result;
        }
        return this.__cacheMaxHp;
    }

    get attack() {
        var result = 0;
        this.equipments.forEach(e => result += e.calFightPower());
        return result;
    }

    get fightPower() {

        return this.calFightPower();
    }


    calFightPower() {
        return this.maxHP * 1.5 + this.attack * 1.8;
    }
}


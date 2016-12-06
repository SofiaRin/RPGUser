enum ShipType {
    CA = 1.2
}

class Ship {

    name: string;

    level = 1;//船只等级不会变化，各船只等级不同。

    hp = 50;

    speed = 10;

    type: ShipType;

    isInTeam: boolean = false;

    equipments: Equipment[] = [];

    //private __cachemaxHp;////flag !

    constructor(_type: ShipType, _name: string) {
        this.name = _name;
        this.type = _type;
        /*
        this.maxHP = this.getmaxHP();
        this.attack = this.getAttack();
        this.fightPower = this.getfightPower();
        */
    }

    public setInTeam(_isinTeam: boolean) {

        this.isInTeam = _isinTeam;
    }

    //@Cache
    getmaxHP() {
        var result = 0;
        result += this.level * 10 * this.type;
        return result;
    }
    @Cache
    getAttack() {
        var result = 0;
        this.equipments.forEach(e => result += e.calFightPower());
        return result;
    }

    getfightPower() {

        return this.calFightPower();
    }

    
    calFightPower() {
        return this.getmaxHP() * 1.5 + this.getAttack() * 1.8 + this.speed*1.2;
    }
}


enum EquipmentType {

    CANNON = 1.8,

    RADAR = 1.4

}


class Equipment {
    name:string;

    status = 100;

    equipmentType:EquipmentType;
    
    technicians: Technician[] = [];


    constructor(_equipmentType: EquipmentType,_name:string) {
        this.name = _name;
        this.equipmentType = _equipmentType;
    }


    get attack() {
        

        var result = 0;
        this.technicians.forEach(t => result += t.calFightPower());
        return result;


    }

    calFightPower() {
        return this.attack  + this.status * this.equipmentType;
    }

}



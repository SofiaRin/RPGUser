enum TechnicianQuality {

    GREEN_HAND = 1.2,

    SKILLED = 1.4

}

class Technician {

    name:string;

    status = 100;

    technicianQuality: TechnicianQuality;


    constructor(_technicianQuality: TechnicianQuality,_name:string) {
        this.name = _name;
        this.technicianQuality = _technicianQuality;
    }

    get attack() {
        return this.status/2 * this.technicianQuality;
    }

    calFightPower() {
        return this.attack * 1.2 + this.status * 1.7;
    }

}
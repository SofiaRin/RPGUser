var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TechnicianQuality;
(function (TechnicianQuality) {
    TechnicianQuality[TechnicianQuality["GREEN_HAND"] = 1.2] = "GREEN_HAND";
    TechnicianQuality[TechnicianQuality["SKILLED"] = 1.4] = "SKILLED";
})(TechnicianQuality || (TechnicianQuality = {}));
var Technician = (function () {
    function Technician(_technicianQuality, _name) {
        this.level = 1; //人员等级
        this.exp = 0; //人员经验
        this.totalExp = 0; //人员经验上限
        this.status = 25; //人员疲劳值上限
        this.name = _name;
        this.technicianQuality = _technicianQuality;
        // this.attack = this.getAttack();
    }
    var d = __define,c=Technician,p=c.prototype;
    p.getAttack = function () {
        return this.status * this.technicianQuality;
    };
    //@Cache
    p.calFightPower = function () {
        return this.getAttack() * 1.4 + this.level * 2;
    };
    __decorate([
        Cache
    ], p, "getAttack", null);
    return Technician;
}());
egret.registerClass(Technician,'Technician');
//# sourceMappingURL=Technician.js.map
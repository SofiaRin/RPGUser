var TechnicianQuality;
(function (TechnicianQuality) {
    TechnicianQuality[TechnicianQuality["GREEN_HAND"] = 1.2] = "GREEN_HAND";
    TechnicianQuality[TechnicianQuality["SKILLED"] = 1.4] = "SKILLED";
})(TechnicianQuality || (TechnicianQuality = {}));
var Technician = (function () {
    function Technician(_technicianQuality, _name) {
        this.status = 100;
        this.name = _name;
        this.technicianQuality = _technicianQuality;
    }
    var d = __define,c=Technician,p=c.prototype;
    d(p, "attack"
        ,function () {
            return this.status / 2 * this.technicianQuality;
        }
    );
    p.calFightPower = function () {
        return this.attack * 1.2 + this.status * 1.7;
    };
    return Technician;
}());
egret.registerClass(Technician,'Technician');
//# sourceMappingURL=Technician.js.map
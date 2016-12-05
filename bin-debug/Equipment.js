var EquipmentType;
(function (EquipmentType) {
    EquipmentType[EquipmentType["CANNON"] = 1.8] = "CANNON";
    EquipmentType[EquipmentType["RADAR"] = 1.4] = "RADAR";
})(EquipmentType || (EquipmentType = {}));
var Equipment = (function () {
    function Equipment(_equipmentType, _name) {
        this.status = 100;
        this.technicians = [];
        this.name = _name;
        this.equipmentType = _equipmentType;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            var result = 0;
            this.technicians.forEach(function (t) { return result += t.calFightPower(); });
            return result;
        }
    );
    p.calFightPower = function () {
        return this.attack + this.status * this.equipmentType;
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map
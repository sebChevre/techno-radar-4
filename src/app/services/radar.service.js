"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by seb on 25.05.17.
 */
var core_1 = require("@angular/core");
var mock_radars_1 = require("../data/mock-radars");
var Rx_1 = require("rxjs/Rx");
var RadarService = (function () {
    function RadarService() {
    }
    RadarService.prototype.getRadars = function () {
        return mock_radars_1.RADARS;
    }; // stub
    RadarService.prototype.getRadarsObervable = function () {
        return Rx_1.Observable.from(mock_radars_1.RADARS);
    };
    return RadarService;
}());
RadarService = __decorate([
    core_1.Injectable()
], RadarService);
exports.RadarService = RadarService;
//# sourceMappingURL=radar.service.js.map
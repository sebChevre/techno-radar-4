/**
 * Created by seb on 25.05.17.
 */
import { Injectable } from '@angular/core';
import {RADARS, RADAR_ELEMENTS} from '../data/mock-radars';
import { Radar } from '../entity/radar';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class RadarService {
    getRadars(): Radar[] {
        return RADARS;
    } // stub

    getRadarsObervable():Observable<Radar>{
        return Observable.from(RADARS);
    }

    getLazyRadarById(id:number):Observable<Radar>{

        let radar = RADARS.find(function (radar) {
            return radar.id === id;
        });

        return Observable.of(radar);
    }

    getRadarById(id:number):Observable<Radar>{


        let radar = RADARS.find(function (radar) {
            return radar.id === id;
        });

        let elements = RADAR_ELEMENTS.filter(function (element){
            return element._ref === radar.id;
        });

        radar.elements = elements;

        return Observable.of(radar);
    }
}

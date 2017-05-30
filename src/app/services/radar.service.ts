/**
 * Created by seb on 25.05.17.
 */
import { Injectable } from '@angular/core';
import { RADARS } from '../data/mock-radars';
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
}

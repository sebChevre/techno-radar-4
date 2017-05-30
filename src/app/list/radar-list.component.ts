/**
 * Created by seb on 25.05.17.
 */
import { Component } from '@angular/core';
import {Radar} from "../entity/Radar";
import {ActivatedRoute} from "@angular/router";
import { RadarService } from '../services/radar.service';


@Component({
    selector: 't2-radar-list',
    templateUrl: './radar-list.component.html',
    styleUrls: ['./radar-list.component.css'],
    providers: [RadarService]
})
export class RadarListComponent {
    title = 'Liste des radars';
    radars:Array<Radar> = [];

    ngOnInit(): void {
        //radars:Radar[];
        //this.getRadars();
    }

    constructor(private service:RadarService ) {
        this.getRadars();
    }

    getRadars(){
        //this.radars = this.service.getRadars();

        var that = this;
        this.service.getRadarsObervable().subscribe(
            function (radar) {
                console.log('Next: %s', radar);
                that.radars.push(radar);
            },
            function (err) {
                console.log('Error: %s', err);
            },
            function () {
                console.log('Completed');
            });
    }

}

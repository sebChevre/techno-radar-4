/**
 * Created by seb on 25.05.17.
 */
import { Component } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import { RadarService } from '../services/radar.service';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import {Radar} from "../entity/Radar";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
    selector: 't2-radar-detail',
    templateUrl: 'radar-detail.component.html',
    styleUrls: ['radar-detail.component.css'],
    providers: [RadarService]
})
export class RadarDetailComponent {
    title = 'Tour of Heroes';
    hero = 'Windstorm';
    radarid:number;

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;


    constructor(
        private service:RadarService,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    goToProductDetails() {
        this.router.navigate(['/product-details', this.radarid]);
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.radarid = +params['id']; // (+) converts string 'id' to a number


            this.service.getRadarById(this.radarid).subscribe(next =>{
                    this.show(next);
                }

            );

            this.testD3();
        });

    }


    testD3 () {
        d3.select("#detail-panel-body")
            .append("h1")
            .text("hello d3.js");
    }

    show(radar:Radar){
        d3.select("#detail-panel-body")
            .append("h2")
            .text(radar.description);

        for(let element of radar.elements){
            d3.select("#detail-panel-body")
                .append("h3")
                .text(element.nom);
        }
    }
}

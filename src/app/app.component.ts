import { Component } from '@angular/core';
import '../assets/css/styles.css';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    //styleUrls: ['./app.component.css'],
    styles: [
        require('./app.style.less').toString()
    ]
})
export class AppComponent {

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;


    ngOnInit(): void {
        d3.select("body")
            .append("span")
        .text("hello world");
    }

    constructor(
       // private route: ActivatedRoute,
        //private router: Router
    ) {


        /*
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
*/


        // console.log(radar);

    }
}
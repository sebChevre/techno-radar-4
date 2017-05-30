import { Component } from '@angular/core';
import '../assets/css/styles.css';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'techno2-app',
    templateUrl: './app.component.html',
    styles: [
        require('./app.style.less').toString(),
        'app.component.css'
    ]
})
export class AppComponent {



    constructor(

    ) {


    }
}
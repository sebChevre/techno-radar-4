/**
 * Created by seb on 24.05.17.
 */
import { Component } from '@angular/core';


@Component({
    selector: 't2-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    title = 'Tour of Heroes';
    hero = 'Windstorm';
}

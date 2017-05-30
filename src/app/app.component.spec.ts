import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
import {RadarDetailComponent} from "./detail/radar-detail.component";
import {RadarListComponent} from "./list/radar-list.component";
import {RouterModule} from "@angular/router";

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [
            AppComponent,MenuComponent,HomeComponent,RadarDetailComponent,RadarListComponent]
        });
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
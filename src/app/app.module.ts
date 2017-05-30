import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
import {RadarListComponent} from "./list/radar-list.component";
import { RouterModule, Routes } from '@angular/router';
import {RadarDetailComponent} from "./detail/radar-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BsDropdownModule} from "ngx-bootstrap";

const appRoutes: Routes = [
    { path: 'list', component: RadarListComponent },
    { path: 'detail/:id',      component: RadarDetailComponent },
    { path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BsDropdownModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        RadarListComponent,
        RadarDetailComponent,
        PageNotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
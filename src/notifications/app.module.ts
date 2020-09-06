import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AlertModule } from './_alert';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AlertModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
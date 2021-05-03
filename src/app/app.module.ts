import { HeroeComponent } from './heroes/heroe/heroe.component';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ListadoComponent } from './heroes/listado/listado.component';

import { ContadorComponent} from './contador/contador.component';

import { VillanoComponent } from './villano/villano.component';

import { FormsModule } from '@angular/forms';



@NgModule({

declarations: [

AppComponent,

HeroeComponent,

ListadoComponent,

ContadorComponent,
VillanoComponent,
],



imports: [

BrowserModule,

AppRoutingModule,

FormsModule

],



providers: [],

bootstrap: [AppComponent]



})



export class AppModule { }
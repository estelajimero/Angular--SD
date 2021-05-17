import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SinMaterialComponent } from './sin-material/sin-material.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations' ;
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    SinMaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

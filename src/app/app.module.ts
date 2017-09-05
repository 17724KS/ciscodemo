import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
      ],
  imports: [
    BrowserModule, HttpModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

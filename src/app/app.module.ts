import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { ClrChartsModule } from 'clr-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    ClrChartsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

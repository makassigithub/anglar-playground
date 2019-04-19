import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule, routableComponents } from './app-routing-module';
import { AppComponent } from './app.component';
import { FilterComponent } from '../core/filter/filter-component';
import { FamilyService } from './services/family.service';
import { FamilyServiceResolver } from './services/family.service.resolver';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [FamilyService, FamilyServiceResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

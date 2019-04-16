import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule, routableComponents } from './app-routing-module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './members/member/member.component';
import { FilterComponent } from '../core/filter/filter-component';
import { FamilyService } from './services/family.service';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberComponent,
    FilterComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [FamilyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

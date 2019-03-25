import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './members/member/member.component';
import { FilterComponent } from '../core/filter/filter-component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

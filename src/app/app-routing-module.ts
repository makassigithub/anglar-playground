import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { MemberComponent } from './members/member/member.component';
import { OtherFeatureComponent } from './otherFeature/other-feature.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'member' },
    { path: 'members', component: MembersComponent },
    { path: 'blank', component: OtherFeatureComponent },
    { path: 'member/:name', component: MemberComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouterModule {}

export const routableComponents = [
    MemberComponent,
    MembersComponent,
    OtherFeatureComponent,
];

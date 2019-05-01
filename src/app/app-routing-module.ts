import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { MemberComponent } from './members/member/member.component';
import { OtherFeatureComponent } from './otherFeature/other-feature.component';
import { FamilyServiceResolver } from './services/family.service.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CanActivateAuthGuard } from './services/authGard';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'blank', component: OtherFeatureComponent },
    { path: 'members',
        component: MembersComponent,
        canActivate: [CanActivateAuthGuard],
        canActivateChild: [CanActivateAuthGuard],
        children : [
            { path: '', component: HomeComponent},
            { path: ':name', component: MemberComponent},
        ]
    },
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
    LoginComponent,
    HomeComponent
];

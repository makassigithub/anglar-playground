import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Member } from '../models/member.model';
import { FamilyService } from './family.service';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable()
export class FamilyServiceResolver implements Resolve<Member> {
    constructor(
        private router: Router,
        private familyService: FamilyService,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):
        Observable<any>|Promise<any>|any {
            const { name } = route.params;
            if (name === 'Karim') {
                return this.router.navigate(['blank']);
            }
            return this.familyService.provideMemberByName(name);
    }
}

import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { FamilyService } from '../../services/family.service';
import { Member } from 'src/app/models/member.model';


@Component({
    selector: 'app-member-description',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
    name: string;
    member: Member;

    constructor(
        private route: ActivatedRoute,
        private familyService: FamilyService,
    ) {}

    ngOnInit() {
        /* USING SNAPSHOT

        this.name = this.route.snapshot.params.name;
        this.familyService.provideMemberByName(this.name)
        .subscribe(selectedMember => this.member = selectedMember);
        */

        /* USING OBSERVABLES  */
        this.route.params.pipe(
            map(params => params.name),
            tap(name => this.name = name)
        )
        .subscribe(name => {
            this.familyService.provideMemberByName(name)
            .subscribe(member => this.member = member,
                err => console.log(err)
            );
        });

       /* Using a Resolver Middleware 
        this.route.data.subscribe((data: { member: Member}) => {
            return this.member = data.member;
        });*/
    }
}

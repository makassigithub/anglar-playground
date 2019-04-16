import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        this.name = this.route.snapshot.params.name;
        this.familyService.provideMemberByName(this.name)
            .subscribe(selectedMember => this.member = selectedMember);
    }
}

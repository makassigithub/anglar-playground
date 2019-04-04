import { Component, Input, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';

@Component({
    selector: 'member-description',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    @Input() inputMember: Member;

    ngOnInit() {
        console.log('OnInit is fired');
    }
    ngOnChanges() {
        console.log('Onchanges is fired');
    }

    ngOnDestroy() {
        console.log('Ondestroy is fired');
    }

    ngAfterViewInit() {
        console.log('AfterViewInit is fired');
    }
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'member-description',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})
export class MemberComponent {
    @Input() inputMember: any;
}

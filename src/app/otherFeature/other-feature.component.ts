import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-other-feature',
    templateUrl: './other-feature.component.html',
    styleUrls: ['./other-feature-component.css']
})
export class OtherFeatureComponent implements OnInit {
    constructor() { }
    dump = 'Empty view for now';
    ngOnInit(): void { }
}

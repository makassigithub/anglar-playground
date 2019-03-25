import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    @Output() changed: EventEmitter<string>;
    filterValue: any;

    constructor() {
        this.changed = new EventEmitter();
    }

    ngOnInit(): void { }
    changeValue(event: any) {
        event.preventDefault();
        console.log(`filter contains the value ${this.filterValue}`);
        this.changed.emit(this.filterValue);
    }
}
